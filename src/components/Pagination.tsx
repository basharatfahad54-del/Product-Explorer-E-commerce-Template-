interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Pagination({ currentPage, totalPages, onPrevious, onNext }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
      <button
        type="button"
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="rounded-md border border-cyan-500/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/10 disabled:cursor-not-allowed disabled:border-slate-700 disabled:text-slate-500 disabled:hover:bg-transparent"
      >
        Previous
      </button>
      <p className="text-sm text-slate-300">
        Page <span className="font-semibold text-fuchsia-300">{currentPage}</span> of{' '}
        <span className="font-semibold text-fuchsia-300">{totalPages}</span>
      </p>
      <button
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="rounded-md border border-cyan-500/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/10 disabled:cursor-not-allowed disabled:border-slate-700 disabled:text-slate-500 disabled:hover:bg-transparent"
      >
        Next
      </button>
    </div>
  );
}
