import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type LoadingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
  children: ReactNode;
  loadingText: string;
};

export default function LoadingButton({ isLoading, children, loadingText, disabled, className = "", ...props }: LoadingButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 ${className}`}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
      {isLoading ? loadingText : children}
    </button>
  );
}
