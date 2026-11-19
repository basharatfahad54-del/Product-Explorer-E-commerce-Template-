import { useEffect, useMemo, useRef, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import SortDropdown from '../components/SortDropdown';
import { useProducts } from '../hooks/useProducts';
import type { SortOption } from '../types/product';

const PRODUCTS_PER_PAGE = 8;

export default function ProductsPage() {
  const { products, categories, loading, error, retry } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState<SortOption>('price-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  // Reset to the first page whenever search/filter/sort criteria change.
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortOption]);

  // Scroll back to the results section when changing pages for better UX.
  useEffect(() => {
    if (currentPage > 1) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  const filteredAndSortedProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(normalizedSearch);
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [products, searchTerm, selectedCategory, sortOption]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedProducts = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredAndSortedProducts, safeCurrentPage]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-cyan-300 neon-text sm:text-4xl">
          Explore Products
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
          Browse our neon collection, search by name, filter by category, sort results, and view detailed
          product information.
        </p>
      </header>

      {loading && <Loader message="Loading products..." />}

      {!loading && error && <ErrorMessage message={error} onRetry={retry} />}

      {!loading && !error && (
        <>
          <div className="neon-border mb-8 grid gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 md:grid-cols-3">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <CategoryFilter
              categories={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
            <SortDropdown value={sortOption} onChange={setSortOption} />
          </div>

          <div ref={resultsRef} className="scroll-mt-24">
            {filteredAndSortedProducts.length === 0 ? (
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-10 text-center">
                <h2 className="text-xl font-semibold text-fuchsia-300">No products found</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Try adjusting your search term, category, or sorting options.
                </p>
              </div>
            ) : (
              <>
                <p className="mb-4 text-sm text-slate-400">
                  Showing <span className="font-semibold text-cyan-300">{paginatedProducts.length}</span> of{' '}
                  <span className="font-semibold text-cyan-300">{filteredAndSortedProducts.length}</span>{' '}
                  products
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <Pagination
                  currentPage={safeCurrentPage}
                  totalPages={totalPages}
                  onPrevious={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  onNext={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                />
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
}
