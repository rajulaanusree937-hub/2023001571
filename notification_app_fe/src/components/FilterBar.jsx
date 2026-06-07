function FilterBar({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Placement")}>Placement</button>
      <button onClick={() => setFilter("Result")}>Result</button>
      <button onClick={() => setFilter("Event")}>Event</button>
    </div>
  );
}

export default FilterBar;