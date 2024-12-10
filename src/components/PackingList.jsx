

const PackingList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
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
