import type { IconNameType } from "@types";

const getIconMap = () => {
  const globIcon = import.meta.glob("/public/assets/icons/**/*.svg", {
    query: "?raw",
    import: "default",
  });

  return Object.entries(globIcon).reduce(
    (map, [key, value]) => {
      const name = key.replace(/(.+)\//, "").replace(".svg", "");

      map[name] = value;

      return map;
    },
    {} as Record<IconNameType, () => Promise<string>>,
  );
};

export default getIconMap;
