import CustomImage from "./customimage";

export default function HeroSection() {
  const images = [
    { id: 1, src: "/images/img_1.jpg", title: "Butter Chicken" },
    { id: 2, src: "/images/img_2.jpg", title: "Image 2" },
    { id: 3, src: "/images/img_3.jpg", title: "Image 3" },
    { id: 4, src: "/images/img_4.jpg", title: "Image 4" },
    { id: 5, src: "/images/img_5.jpg", title: "Image 5" },
    { id: 6, src: "/images/img_6.jpg", title: "Image 6" },
    { id: 7, src: "/images/img_7.jpg", title: "Image 7" },
    { id: 8, src: "/images/img_8.jpg", title: "Image 8" },
    { id: 9, src: "/images/img_9.jpg", title: "Image 9" },
  ];
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          RecipeHub is a place where you can get all kind of recipes to please
          your soul and tummy with delicious food of all cuisine. And our
          service is absolutely free. so start exploring now
        </p>
        <button className="btn">Explore Now</button>
      </div>
      <div className="col gallery">
        {images.map((img) => (
          <CustomImage
            key={img.id}
            imgSrc={img.src}
            pt={"85%"}
            title={img.title}
          />
        ))}
      </div>
    </div>
  );
}
