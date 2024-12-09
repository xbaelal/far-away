const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <li key={item.id}>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.description}
            </span>
            <button>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
