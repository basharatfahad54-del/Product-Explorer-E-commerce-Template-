import type { SortOption } from '../types/product';

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="w-full">
      <label htmlFor="sort-products" className="mb-1 block text-sm font-medium text-cyan-200">
        Sort by
      </label>
      <select
        id="sort-products"
        value={value}
        onChange={(event) => onChange(event.target.value as SortOption)}
        className="w-full rounded-lg border border-cyan-500/30 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
}
