import Link from "next/link";

type Variant = "primary" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-950 hover:bg-blue-900 text-white font-semibold rounded-xl transition-colors",
  outline:
    "font-bold border-b border-black text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:rounded-lg hover:border-b-0",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3",
  lg: "px-8 py-4 text-lg",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `inline-block ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
