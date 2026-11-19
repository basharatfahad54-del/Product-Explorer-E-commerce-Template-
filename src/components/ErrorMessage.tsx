interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="mx-auto my-8 max-w-xl rounded-xl border border-rose-500/40 bg-rose-950/40 p-6 text-center shadow-[0_0_24px_rgba(244,63,94,0.15)]">
      <h3 className="text-lg font-semibold text-rose-300">Something went wrong</h3>
      <p className="mt-2 text-sm text-rose-100/90">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 hover:shadow-[0_0_18px_rgba(34,211,238,0.5)]"
        >
          Retry
        </button>
      )}
    </div>
  );
}
