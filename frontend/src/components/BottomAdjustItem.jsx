export default function BottomAdjustItem({ name, active, handleClick }) {
  return (
    <button className={``} onClick={handleClick}>
      {name}
    </button>
  );
}
