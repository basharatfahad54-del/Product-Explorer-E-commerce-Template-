import type { Product } from '../types/product';

// Fallback demo data used when the public API is unavailable.
export const demoProducts: Product[] = [
  {
    id: 1,
    title: 'Neon Pulse Wireless Headphones',
    price: 89.99,
    description:
      'Immersive wireless headphones with deep bass, crystal-clear highs, and a glowing neon finish for late-night listening sessions.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.6, count: 214 },
  },
  {
    id: 2,
    title: 'Cyber Runner Sneakers',
    price: 119.5,
    description:
      'Lightweight sneakers designed for comfort and speed, featuring breathable mesh and a futuristic streetwear look.',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.4, count: 168 },
  },
  {
    id: 3,
    title: 'Aurora Smart Watch',
    price: 149.0,
    description:
      'Track your health, notifications, and workouts with a sleek smart watch that shines with subtle neon accents.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.7, count: 342 },
  },
  {
    id: 4,
    title: 'Luminous Denim Jacket',
    price: 74.25,
    description:
      'A classic denim jacket reimagined with modern tailoring and reflective details for an urban neon vibe.',
    category: "women's clothing",
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.2, count: 97 },
  },
  {
    id: 5,
    title: 'Prism Glow Backpack',
    price: 59.99,
    description:
      'Durable everyday backpack with spacious compartments, water-resistant fabric, and a bold color-blocked design.',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.5, count: 183 },
  },
  {
    id: 6,
    title: 'Starlight Pendant Necklace',
    price: 129.99,
    description:
      'Elegant pendant necklace crafted to catch the light beautifully, perfect for elevating any evening outfit.',
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.8, count: 76 },
  },
  {
    id: 7,
    title: 'Flux Mechanical Keyboard',
    price: 99.0,
    description:
      'Tactile mechanical keyboard with customizable keys and vibrant backlighting for focused work and gaming.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.6, count: 251 },
  },
  {
    id: 8,
    title: 'Velvet Night Dress',
    price: 84.75,
    description:
      'A flowing evening dress with a soft finish and flattering silhouette, made for standout moments.',
    category: "women's clothing",
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.3, count: 134 },
  },
  {
    id: 9,
    title: 'Photon Desk Lamp',
    price: 39.99,
    description:
      'Adjustable LED desk lamp with warm and cool modes, bringing focused neon-inspired light to your workspace.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.1, count: 88 },
  },
  {
    id: 10,
    title: 'Orbit Silver Ring',
    price: 54.0,
    description:
      'Minimal silver ring with a polished orbit-inspired band, designed for everyday wear and subtle shine.',
    category: 'jewelery',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.5, count: 64 },
  },
  {
    id: 11,
    title: 'Horizon Casual Hoodie',
    price: 64.5,
    description:
      'Cozy cotton-blend hoodie with a relaxed fit and clean lines, ideal for layering in any season.',
    category: "men's clothing",
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.4, count: 142 },
  },
  {
    id: 12,
    title: 'Nova Trail Water Bottle',
    price: 24.99,
    description:
      'Insulated stainless steel bottle that keeps drinks cold or hot, built for travel, gym, and daily hydration.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    rating: { rate: 4.7, count: 301 },
  },
];
