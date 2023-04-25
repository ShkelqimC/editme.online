export default function AdjustItem({ item }) {
  console.log(item, "item");
  return (
    <div>
      <p>{item.name}</p>
    </div>
  );
}
