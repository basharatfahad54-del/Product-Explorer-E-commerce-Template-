interface CategoryFilterProps {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
}

function formatCategory(category: string): string {
  return category
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function CategoryFilter({ categories, value, onChange }: CategoryFilterProps) {
  return (
    <div className="w-full">
      <label htmlFor="category-filter" className="mb-1 block text-sm font-medium text-cyan-200">
        Category
      </label>
      <select
        id="category-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-fuchsia-500/30 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-500/30"
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {formatCategory(category)}
          </option>
        ))}
      </select>
    </div>
  );
}
