export default function CustomImage({ imgSrc, pt, title }) {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt={title} />
    </div>
  );
}
