import { Link } from 'react-router-dom';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="neon-card group flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.18)]">
      <Link to={`/products/${product.id}`} className="block bg-slate-950/60 p-4">
        <div className="flex h-48 items-center justify-center overflow-hidden rounded-lg bg-white/95 p-3">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-2 inline-flex w-fit rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-2.5 py-0.5 text-xs font-medium capitalize text-fuchsia-200">
          {product.category}
        </p>
        <Link to={`/products/${product.id}`} className="mb-2">
          <h3 className="line-clamp-2 text-base font-semibold text-slate-100 transition hover:text-cyan-300">
            {product.title}
          </h3>
        </Link>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-cyan-300">${product.price.toFixed(2)}</p>
            <p className="text-sm text-amber-300">
              ★ {product.rating.rate.toFixed(1)}
              <span className="ml-1 text-slate-400">({product.rating.count})</span>
            </p>
          </div>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex w-full items-center justify-center rounded-md border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_18px_rgba(34,211,238,0.45)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
