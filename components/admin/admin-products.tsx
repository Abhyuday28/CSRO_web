"use client";

import { useState } from "react";
import type { AdminProduct } from "@/data/admin-data";
import {
  AdminTable,
  dangerButtonClass,
  inputClass,
  Modal,
  primaryButtonClass,
  secondaryButtonClass,
  StatusBadge
} from "./admin-ui";

type ProductPayload = Omit<AdminProduct, "id">;

const blankProduct: ProductPayload = {
  name: "",
  feature: "",
  description: "",
  price: 0,
  features: [],
  image: "",
  images: [],
  tag: "",
  active: true
};

export function AdminProducts({
  products,
  onSave,
  onDelete
}: {
  products: AdminProduct[];
  onSave: (payload: ProductPayload, id?: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}) {
  const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <button type="button" onClick={() => setIsAdding(true)} className={primaryButtonClass}>
          Add Product
        </button>
      </div>

      <AdminTable headers={["Image", "Name", "Price", "Status", "Tag", "Actions"]}>
        {products.map((product) => (
          <tr key={product.id} className="transition hover:bg-slate-50">
            <td className="px-4 py-3">
              <img
                src={product.image}
                alt={product.name}
                className="h-12 w-16 rounded-lg object-cover"
              />
            </td>
            <td className="min-w-56 px-4 py-3">
              <p className="font-medium text-slate-950">{product.name}</p>
              <p className="mt-1 text-xs text-slate-500">{product.features.join(", ")}</p>
            </td>
            <td className="whitespace-nowrap px-4 py-3">Rs {product.price.toLocaleString("en-IN")}</td>
            <td className="whitespace-nowrap px-4 py-3">
              <StatusBadge label={product.active ? "Active" : "Inactive"} />
            </td>
            <td className="whitespace-nowrap px-4 py-3">{product.tag || "-"}</td>
            <td className="flex min-w-48 flex-wrap gap-2 px-4 py-3">
              <button
                type="button"
                onClick={() => setEditingProduct(product)}
                className={secondaryButtonClass}
              >
                Edit
              </button>
              <button type="button" onClick={() => onDelete(product.id)} className={dangerButtonClass}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </AdminTable>

      {isAdding ? (
        <Modal title="Add Product" onClose={() => setIsAdding(false)}>
          <ProductForm
            product={blankProduct}
            onSubmit={async (payload) => {
              await onSave(payload);
              setIsAdding(false);
            }}
          />
        </Modal>
      ) : null}

      {editingProduct ? (
        <Modal title="Edit Product" onClose={() => setEditingProduct(null)}>
          <ProductForm
            product={editingProduct}
            onSubmit={async (payload) => {
              await onSave(payload, editingProduct.id);
              setEditingProduct(null);
            }}
          />
        </Modal>
      ) : null}
    </div>
  );
}

function ProductForm({
  product,
  onSubmit
}: {
  product: ProductPayload;
  onSubmit: (payload: ProductPayload) => Promise<void>;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function toDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          resolve(result);
        } else {
          reject(new Error("Unable to read image file."));
        }
      };
      reader.onerror = () => reject(new Error("Image file read failed."));
      reader.readAsDataURL(file);
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const features = String(formData.get("features") ?? "")
      .split(/\n|,/) 
      .map((feature) => feature.trim())
      .filter(Boolean);

    const images = String(formData.get("images") ?? "")
      .split(/\n|,/) 
      .map((image) => image.trim())
      .filter(Boolean);

    const imageFile = formData.get("mainImageFile");
    let imageValue = String(formData.get("image") ?? "");
    if (imageFile instanceof File && imageFile.size > 0) {
      imageValue = await toDataUrl(imageFile);
    }

    const additionalFiles = formData.getAll("additionalImageFiles");
    const fileImages: string[] = [];
    for (const file of additionalFiles) {
      if (file instanceof File && file.size > 0) {
        fileImages.push(await toDataUrl(file));
      }
    }

    await onSubmit({
      name: String(formData.get("name") ?? ""),
      feature: String(formData.get("feature") ?? ""),
      description: String(formData.get("description") ?? ""),
      price: Number(formData.get("price") ?? 0),
      features,
      image: imageValue,
      images: [...images, ...fileImages],
      tag: String(formData.get("tag") ?? "") as ProductPayload["tag"],
      active: formData.get("active") === "on"
    });

    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Product Name
        <input name="name" defaultValue={product.name} required className={inputClass} />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Price
        <input
          name="price"
          type="number"
          min="0"
          defaultValue={product.price}
          required
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Feature
        <input name="feature" defaultValue={product.feature} required className={inputClass} />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Description
        <textarea
          name="description"
          rows={4}
          defaultValue={product.description}
          className={inputClass}
          placeholder="Product description"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Key features
        <textarea
          name="features"
          rows={4}
          defaultValue={product.features.join("\n")}
          className={inputClass}
          placeholder="One feature per line"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Main image URL
        <input
          name="image"
          type="url"
          defaultValue={product.image}
          className={inputClass}
          placeholder="Paste image URL or choose a local file below"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Upload main product image
        <input name="mainImageFile" type="file" accept="image/*" className={inputClass} />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Additional images
        <textarea
          name="images"
          rows={3}
          defaultValue={product.images.join("\n")}
          className={inputClass}
          placeholder="One image URL per line"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Upload additional images
        <input
          name="additionalImageFiles"
          type="file"
          accept="image/*"
          multiple
          className={inputClass}
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Tag
        <select name="tag" defaultValue={product.tag} className={inputClass}>
          <option value="">None</option>
          <option value="Best Seller">Best Seller</option>
          <option value="New">New</option>
        </select>
      </label>
      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        <input name="active" type="checkbox" defaultChecked={product.active} />
        Active
      </label>
      <button type="submit" disabled={isSubmitting} className={primaryButtonClass}>
        {isSubmitting ? "Saving..." : "Save Product"}
      </button>
    </form>
  );
}
