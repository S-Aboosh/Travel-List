// import { useState } from "react";
// import "./index.css";

// export default function App() {
//   const [items, setItems] = useState([]);

//   function handleAddItems(item) {
//     setItems((items) => [...items, item]);
//   }

//   function handleDeleteItems(id) {
//     setItems((items) => items.filter((item) => item.id !== id));
//   }

//   function handleItemPacked(id) {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   }

//   function handleClearList() {
//     const confirmed = window.confirm(
//       "Are You Sure You Want To Delete All Items"
//     );
//     // alert("Are You Sure You Want To Delete All Items");
//     if (confirmed) setItems([]);
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItem={handleAddItems} />
//       <PackingList
//         items={items}
//         onDeleteItems={handleDeleteItems}
//         onItemPacked={handleItemPacked}
//         onDeleteAllItems={handleClearList}
//       />
//       <Stats items={items} />
//     </div>
//   );
// }

// function Logo() {
//   return <h1>🌴 Far Away 🎒</h1>;
// }

// function Form({ onAddItem }) {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(0);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!description) return;

//     const newItem = { description, quantity, packed: false, id: Date.now() };
//     onAddItem(newItem);

//     setDescription("");
//     setQuantity(0);
//   }

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h3>what do you need for your 😍 trip?</h3>
//       <select
//         value={quantity}
//         onChange={(e) => setQuantity(Number(e.target.value))}
//       >
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
//           <option value={item} key={item}>
//             {item}
//           </option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="item..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button>add</button>
//     </form>
//   );
// }

// function PackingList({ items, onDeleteItems, onItemPacked, onDeleteAllItems }) {
//   const [SortBy, setSortBy] = useState("input");

//   let sortedItems;

//   if (SortBy === "input") sortedItems = items;

//   if (SortBy === "description")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => a.description.localeCompare(b.description));

//   if (SortBy === "packed")
//     sortedItems = items
//       .slice()
//       .sort((a, b) => Number(a.packed) - Number(b.packed));

//   return (
//     <div className="list">
//       <ul>
//         {sortedItems.map((item) => (
//           <Item
//             item={item}
//             key={item.id}
//             onDeleteItems={onDeleteItems}
//             onItemPacked={onItemPacked}
//           />
//         ))}
//       </ul>

//       <div className="actions">
//         <select value={SortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="input">sort by input order</option>
//           <option value="description">sort by description</option>
//           <option value="packed">sort by packed</option>
//         </select>
//         <button onClick={onDeleteAllItems}>Clear List</button>
//       </div>
//     </div>
//   );
// }

// function Item({ item, onDeleteItems, onItemPacked }) {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         value={item.packed}
//         onChange={() => onItemPacked(item.id)}
//       />
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.quantity} {item.description}
//       </span>
//       <button onClick={() => onDeleteItems(item.id)}>❌</button>
//     </li>
//   );
// }

// function Stats({ items }) {
//   if (!items.length)
//     return (
//       <footer className="stats">
//         <em>start adding new items to your packing list 🐱‍🏍</em>
//       </footer>
//     );
//   const itemsNum = items.length;
//   const itemsPacked = items.filter((item) => item.packed).length;
//   const itemsPercentage = Math.round((itemsPacked / itemsNum) * 100);
//   return (
//     <footer className="stats">
//       <em>
//         {itemsPercentage === 100
//           ? "you got every thing to go ✈✈"
//           : `💼 You have ${itemsNum} items on your listt, and you already packed${" "}
//         ${itemsPacked} (${itemsPercentage})%`}
//       </em>
//     </footer>
//   );
// }
// a
