import type { DetailCardType, DetailValueType, IconNameType } from "@types";

const WITH_PREFIX = ["aspect", "yung", "reinin"] as const;
type WithPrefix = (typeof WITH_PREFIX)[number];
const isWithPrefix = (type: DetailCardType["type"]): type is WithPrefix => {
  return WITH_PREFIX.includes(type as WithPrefix);
};

const getIconByDetail = (
  detailValue: DetailValueType,
  type: DetailCardType["type"],
): IconNameType => {
  if (isWithPrefix(type)) {
    return `${type}_${detailValue}` as IconNameType;
  }

  if (type === "alignment") return "zap";

  if (type === "mindset") return "zap";

  return detailValue as IconNameType;
};

export default getIconByDetail;
