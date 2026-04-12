export type Product = {
  id: number;
  name: string;
  feature: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "CSRO Aqua Pro",
    feature: "Mineral-rich purification",
    description: "Balanced filtration for modern homes with naturally refreshing taste.",
    image:
      "https://images.unsplash.com/photo-1624958723474-7c1a0db2f6cb?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "CSRO Urban Flow",
    feature: "Compact kitchen fit",
    description: "Space-saving purification built for apartments, studios, and city living.",
    image:
      "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "CSRO Office Elite",
    feature: "High-volume hydration",
    description: "Reliable daily purification for workspaces, teams, and reception zones.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "CSRO Pure Drop",
    feature: "Smart taste retention",
    description: "Keeps water crisp and light with a premium multi-stage natural filter process.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    name: "CSRO Family Max",
    feature: "Large-capacity comfort",
    description: "Made for busy households that need more clean water throughout the day.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "CSRO Signature+",
    feature: "Premium glass finish",
    description: "A statement purifier with sleek design, soft indicators, and dependable performance.",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80"
  }
];
