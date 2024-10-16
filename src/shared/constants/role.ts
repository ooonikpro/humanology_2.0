import type { Role, SignProp } from "@types";

export const ROLE: Record<Role, SignProp> = {
  knight: {
    label: "Рыцарь",
    element: "water",
  },

  king: {
    label: "Король",
    element: "fire",
  },

  queen: {
    label: "Королева",
    element: "fire",
  },

  lady: {
    label: "Дама",
    element: "earth",
  },

  paige: {
    label: "Паж",
    element: "air",
  },
} as const;
