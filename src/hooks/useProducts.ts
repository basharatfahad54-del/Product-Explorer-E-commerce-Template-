import { useEffect, useState } from 'react';
import { fetchCategories, fetchProducts } from '../services/productService';
import type { Product } from '../types/product';

interface UseProductsResult {
  products: Product[];
  categories: string[];
  loading: boolean;
  error: string | null;
  retry: () => void;
}

/**
 * Loads products and categories for the listing page.
 * Uses AbortController to cancel in-flight requests on unmount or retry.
 */
export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(controller.signal),
          fetchCategories(controller.signal),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        // Ignore aborted requests to prevent outdated state updates.
        if (err instanceof DOMException && err.name === 'AbortError') {
          return;
        }
        const message = err instanceof Error ? err.message : 'Failed to load products.';
        setError(message);
      } finally {
        // Only clear loading if this request wasn't aborted.
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadData();

    return () => {
      controller.abort();
    };
  }, [reloadKey]);

  const retry = () => {
    setReloadKey((key) => key + 1);
  };

  return { products, categories, loading, error, retry };
}
