import { demoProducts } from '../data/demoProducts';
import type { Product } from '../types/product';

const API_BASE_URL = 'https://fakestoreapi.com';

/**
 * Re-throw AbortError so callers can ignore cancelled requests separately
 * from real API failures.
 */
function rethrowIfAborted(error: unknown): void {
  if (error instanceof DOMException && error.name === 'AbortError') {
    throw error;
  }
}

async function fetchJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return (await response.json()) as T;
}

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  try {
    return await fetchJson<Product[]>(`${API_BASE_URL}/products`, signal);
  } catch (error) {
    rethrowIfAborted(error);
    // Fallback to demo data when the public API is unavailable.
    return demoProducts;
  }
}

export async function fetchProductById(
  id: number,
  signal?: AbortSignal,
): Promise<Product> {
  try {
    return await fetchJson<Product>(`${API_BASE_URL}/products/${id}`, signal);
  } catch (error) {
    rethrowIfAborted(error);
    // Fallback: try to find the product in demo data.
    const fallback = demoProducts.find((product) => product.id === id);
    if (!fallback) {
      throw new Error('Product not found');
    }
    return fallback;
  }
}

export async function fetchCategories(signal?: AbortSignal): Promise<string[]> {
  try {
    return await fetchJson<string[]>(`${API_BASE_URL}/products/categories`, signal);
  } catch (error) {
    rethrowIfAborted(error);
    // Derive categories from demo data when the API is unavailable.
    return Array.from(new Set(demoProducts.map((product) => product.category)));
  }
}
