import type { IconNameType } from "@types";

export type LinkTabPropsType = {
  to: string
  iconName: IconNameType
  label: string
  size: SizeType
}

export type SizeType = 25 | 50 | 75 | 100 | "md" | "lg";

