interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full">
      <label htmlFor="product-search" className="mb-1 block text-sm font-medium text-cyan-200">
        Search products
      </label>
      <input
        id="product-search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title..."
        className="w-full rounded-lg border border-cyan-500/30 bg-slate-900/70 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
      />
    </div>
  );
}
