export default function Item({ item, onDeleteItems, onItemPacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onItemPacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
