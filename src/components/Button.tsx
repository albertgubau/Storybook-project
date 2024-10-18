import { CSSProperties, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  onClick?: () => void;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
}>;

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
}: Props) {
  const defaultStyles: CSSProperties = {
    outline: "none",
    border: "none",
    cursor: "pointer",
    borderRadius: 10,
  };

  const variantStyles: Record<Props["variant"], CSSProperties> = {
    primary: { backgroundColor: "blue" },
    secondary: { backgroundColor: "gray" },
  };

  const sizeStyles: Record<Props["size"], CSSProperties> = {
    sm: { padding: "0.5rem" },
    md: { padding: "0.75rem" },
    lg: { padding: "1rem" },
  };

  return (
    <button
      style={{
        ...defaultStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      onClick={onClick}>
      {children}
    </button>
  );
}
