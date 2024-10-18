import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  color: string;
};

export default function Button({ children, color }: Props) {
  return <button style={{ color }}>{children}</button>;
}
