const getImage = (path: string): string => {
  const images = import.meta.glob("public/images/**/*", {
    eager: true,
    import: "default",
  });

  return images[`../` + path] as string;
};

export default getImage;
