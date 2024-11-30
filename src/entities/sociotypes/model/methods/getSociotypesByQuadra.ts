import type { QuadrasType, SociotypeIdType } from "@types";
import getAllSociotypes from "./getAllSociotypes";

const groupedByQuadras = getAllSociotypes().reduce(
  (acc, item) => {
    acc[item.quadra] ??= [];

    acc[item.quadra].push(item.id);

    return acc;
  },
  {} as Record<QuadrasType, SociotypeIdType[]>,
);

const getSociotypesByQuadra = (quadra: QuadrasType) => {
  return groupedByQuadras[quadra];
};

export default getSociotypesByQuadra;
