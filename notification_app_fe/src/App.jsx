import { useState } from "react";
import NotificationCard from "./components/NotificationCard";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";

function App() {

  const notifications = [
    {
      Type: "Placement",
      Message: "CSX Corporation hiring",
      Timestamp: "2026-04-22 17:51:18"
    },
    {
      Type: "Result",
      Message: "Semester Results Released",
      Timestamp: "2026-04-21 10:00:00"
    },
    {
      Type: "Event",
      Message: "Hackathon Tomorrow",
      Timestamp: "2026-04-20 09:00:00"
    }
  ];

  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 2;

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) => item.Type === filter
        );

  const totalPages = Math.ceil(
    filtered.length / ITEMS_PER_PAGE
  );

  const start = (page - 1) * ITEMS_PER_PAGE;

  const currentItems = filtered.slice(
    start,
    start + ITEMS_PER_PAGE
  );

  return (
    <div>
      <h1>Notification App</h1>

      <FilterBar setFilter={setFilter} />

      {currentItems.map((item, index) => (
        <NotificationCard
          key={index}
          notification={item}
        />
      ))}

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}

export default App;