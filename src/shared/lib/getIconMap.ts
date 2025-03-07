import type { IconNameType } from "@types";

const getIconMap = () => {
  const globIcon = import.meta.glob(`public/icons/**/*.svg`, {
    eager: true,
    query: "?raw",
    import: "default",
  });

  return Object.entries(globIcon).reduce(
    (map, [key, value]) => {
      const name = key.replace(/(.+)\//, "").replace(".svg", "");

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      map[name] = value;

      return map;
    },
    {} as Record<IconNameType, () => Promise<string>>,
  );
};

export default getIconMap;
