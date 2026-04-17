export type Product = {
  id: string;
  name: string;
  feature: string;
  description: string;
  image: string;
  price: number;
  features: string[];
  images: string[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "CSRO Aqua Pro",
    feature: "Mineral-rich purification",
    description: "Balanced filtration for modern homes with naturally refreshing taste.",
    price: 14999,
    features: [
      "Advanced mineral retention",
      "High flow rate up to 15L/min",
      "Compact countertop design"
    ],
    image:
      "https://images.unsplash.com/photo-1624958723474-7c1a0db2f6cb?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1624958723474-7c1a0db2f6cb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1597776992625-b623eb7ac7d4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "2",
    name: "CSRO Urban Flow",
    feature: "Compact kitchen fit",
    description: "Space-saving purification built for apartments, studios, and city living.",
    price: 12999,
    features: [
      "Slim wall-mount profile",
      "Low noise operation",
      "Easy filter replacement"
    ],
    image:
      "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1592809332635-f1a3ed23a7ef?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "3",
    name: "CSRO Office Elite",
    feature: "High-volume hydration",
    description: "Reliable daily purification for workspaces, teams, and reception zones.",
    price: 24999,
    features: [
      "Large storage tank",
      "Multiple user dispensing",
      "Robust daily throughput"
    ],
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1581579184996-4ec66427d934?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "4",
    name: "CSRO Pure Drop",
    feature: "Smart taste retention",
    description: "Keeps water crisp and light with a premium multi-stage natural filter process.",
    price: 17999,
    features: [
      "Selective mineral preservation",
      "Digital filter life display",
      "Slim countertop footprint"
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542818268-8e6fb1f60d18?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "5",
    name: "CSRO Family Max",
    feature: "Large-capacity comfort",
    description: "Made for busy households that need more clean water throughout the day.",
    price: 19999,
    features: [
      "Extra-large storage",
      "Easy family access",
      "Durable long-life filters"
    ],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: "6",
    name: "CSRO Signature+",
    feature: "Premium glass finish",
    description: "A statement purifier with sleek design, soft indicators, and dependable performance.",
    price: 27999,
    features: [
      "Glass-front premium design",
      "Smart LED feedback",
      "Highest filtration capacity"
    ],
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1468777675496-5782faaea55b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
    ]
  }
];
