import { promises as fs } from "fs";
import path from "path";
import {
  adminFaqs,
  adminLeads,
  adminProducts,
  adminServiceRequests,
  type AdminProduct,
  type FAQ,
  type Lead,
  type ServiceRequest
} from "@/data/admin-data";

export type LocalStoreData = {
  leads: Lead[];
  serviceRequests: ServiceRequest[];
  products: AdminProduct[];
  faqs: FAQ[];
};

const storePath = path.join(process.cwd(), "data", "local-db.json");

let writeQueue = Promise.resolve();

function seedData(): LocalStoreData {
  return {
    leads: adminLeads,
    serviceRequests: adminServiceRequests,
    products: adminProducts,
    faqs: adminFaqs
  };
}

async function ensureStoreFile() {
  try {
    await fs.access(storePath);
  } catch {
    await fs.mkdir(path.dirname(storePath), { recursive: true });
    await fs.writeFile(storePath, JSON.stringify(seedData(), null, 2), "utf8");
  }
}

export async function readStore(): Promise<LocalStoreData> {
  await ensureStoreFile();
  const raw = await fs.readFile(storePath, "utf8");
  return JSON.parse(raw) as LocalStoreData;
}

export async function writeStore(data: LocalStoreData) {
  await fs.mkdir(path.dirname(storePath), { recursive: true });
  await fs.writeFile(storePath, JSON.stringify(data, null, 2), "utf8");
}

export async function updateStore<T>(updater: (data: LocalStoreData) => T | Promise<T>) {
  const run = writeQueue.then(async () => {
    const data = await readStore();
    const result = await updater(data);
    await writeStore(data);
    return result;
  });

  writeQueue = run.then(
    () => undefined,
    () => undefined
  );

  return run;
}
