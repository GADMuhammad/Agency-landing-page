const images = [
  {
    desktopImageURL: "desktop/image-gallery-sugarcubes.jpg",
    mobileImageURL: "mobile/image-gallery-sugar-cubes.jpg",
  },
  {
    desktopImageURL: "desktop/image-gallery-milkbottles.jpg",
    mobileImageURL: "mobile/image-gallery-milkbottles.jpg",
  },
  {
    desktopImageURL: "desktop/image-gallery-orange.jpg",
    mobileImageURL: "mobile/image-gallery-orange.jpg",
  },
  {
    desktopImageURL: "desktop/image-gallery-cone.jpg",
    mobileImageURL: "mobile/image-gallery-cone.jpg",
  },
];

export default function Products() {
  return (
    <section className="grid grid-cols-4 max-lg:grid-cols-2">
      {images.map(({ desktopImageURL, mobileImageURL }) => (
        <figure className="overflow-hidden" key={desktopImageURL}>
          <img
            className="transition-transform duration-500 hover:scale-125 max-second:hidden"
            src={desktopImageURL}
          />
          <img
            className="hidden transition-transform duration-500 hover:scale-125 max-second:block"
            src={mobileImageURL}
          />
        </figure>
      ))}
    </section>
  );
}
