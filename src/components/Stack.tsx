import { PropsWithChildren } from "react";
import { CSSProperties } from "react";

type Props = PropsWithChildren & {
  orientation: "horizontal" | "vertical";
};

export default function Stack({ children, orientation }: Props) {
  const orientationStyles: Record<Props["orientation"], CSSProperties> = {
    horizontal: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    vertical: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
    },
  };

  return <div style={{ ...orientationStyles[orientation] }}>{children}</div>;
}
