export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>start adding new items to your packing list 🐱‍🏍</em>
      </footer>
    );
  const itemsNum = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const itemsPercentage = Math.round((itemsPacked / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {itemsPercentage === 100
          ? "you got every thing to go ✈✈"
          : `💼 You have ${itemsNum} items on your listt, and you already packed${" "}
        ${itemsPacked} (${itemsPercentage})%`}
      </em>
    </footer>
  );
}
