export default function PaintingItem({ currentPainting }) {
  const baseUrlForImg = 'http://localhost:8080';
  return (
    <div>
      <p>{currentPainting.title}</p>
      <img
        src={baseUrlForImg + currentPainting.img}
        alt={currentPainting.img}
      />
    </div>
  );
}
