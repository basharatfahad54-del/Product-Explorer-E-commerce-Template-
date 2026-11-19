interface LoaderProps {
  message?: string;
}

export default function Loader({ message = 'Loading...' }: LoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16" role="status" aria-live="polite">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-cyan-500/30 border-t-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.45)]" />
      <p className="text-sm font-medium tracking-wide text-cyan-200">{message}</p>
    </div>
  );
}
