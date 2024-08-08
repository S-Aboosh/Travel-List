import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onItemPacked,
  onDeleteAllItems,
}) {
  const [SortBy, setSortBy] = useState("input");

  let sortedItems;

  if (SortBy === "input") sortedItems = items;

  if (SortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (SortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onItemPacked={onItemPacked}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={SortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={onDeleteAllItems}>Clear List</button>
      </div>
    </div>
  );
}
