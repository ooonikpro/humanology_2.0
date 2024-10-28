import type { RoleType, SignPropType } from "@types";

const ROLES: Record<RoleType, SignPropType> = {
  knight: {
    label: "Рыцарь",
    quadra: "water",
  },

  king: {
    label: "Король",
    quadra: "fire",
  },

  queen: {
    label: "Королева",
    quadra: "fire",
  },

  lady: {
    label: "Дама",
    quadra: "earth",
  },

  page: {
    label: "Паж",
    quadra: "air",
  },
} as const;

export default ROLES;
