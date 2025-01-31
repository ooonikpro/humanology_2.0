import type { DateRuLocaleType } from "@types";

const getLocaleDateString = (date: DateRuLocaleType) => {
  const [dd, mm, yyyy] = date.split(".");

  return new Date(
    parseInt(yyyy),
    parseInt(mm) - 1,
    parseInt(dd),
  ).toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default getLocaleDateString;
