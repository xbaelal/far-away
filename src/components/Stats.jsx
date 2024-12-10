const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <em>You can get started by adding your items to the list!</em>
      </footer>
    );
  const itemsNum = items.length;
  const itemsPacked = items.filter((items) => items.packed).length;
  const itemsPercentage = Math.round((itemsPacked / itemsNum) * 100);

  return (
    <footer className="stats">
      <em>
        {itemsPercentage === 100
          ? `You've Packed Everything, Ready to GO!!`
          : `You have ${itemsNum} items on your list, and you already packed ${itemsPacked} (${itemsPercentage}%)
        `}
      </em>
    </footer>
  );
};

export default Stats;
