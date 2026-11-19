import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { fetchProductById } from '../services/productService';
import type { Product } from '../types/product';

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    // Validate the route parameter before making an API request.
    const productId = Number(id);
    if (!id || Number.isNaN(productId) || !Number.isInteger(productId) || productId <= 0) {
      setProduct(null);
      setError('Invalid product ID.');
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const loadProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchProductById(productId, controller.signal);
        setProduct(data);
      } catch (err) {
        // Ignore aborted requests (e.g. when navigating away or retrying).
        if (err instanceof DOMException && err.name === 'AbortError') {
          return;
        }
        const message = err instanceof Error ? err.message : 'Failed to load product details.';
        setError(message);
        setProduct(null);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadProduct();

    return () => {
      controller.abort();
    };
  }, [id, reloadKey]);

  const retry = () => {
    setReloadKey((key) => key + 1);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center rounded-md border border-cyan-500/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/10"
      >
        ← Back to Products
      </Link>

      {loading && <Loader message="Loading product details..." />}

      {!loading && error && <ErrorMessage message={error} onRetry={retry} />}

      {!loading && !error && product && (
        <div className="neon-card grid gap-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:grid-cols-2 md:p-8">
          <div className="flex items-center justify-center rounded-xl bg-white/95 p-6">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[420px] w-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <p className="mb-3 inline-flex w-fit rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-200">
              {product.category}
            </p>
            <h1 className="text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">{product.title}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <p className="text-3xl font-extrabold text-cyan-300">${product.price.toFixed(2)}</p>
              <div className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-sm text-amber-200">
                ★ {product.rating.rate.toFixed(1)} rating
                <span className="ml-1 text-amber-100/70">({product.rating.count} reviews)</span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-200">Description</h2>
              <p className="mt-2 leading-relaxed text-slate-300">{product.description}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-lg border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-slate-400">Product ID</p>
                <p className="mt-1 font-semibold text-slate-100">#{product.id}</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-950/50 p-4">
                <p className="text-slate-400">Category</p>
                <p className="mt-1 font-semibold capitalize text-slate-100">{product.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
