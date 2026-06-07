function NotificationCard({ notification }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px"
    }}>
      <h3>{notification.Type}</h3>
      <p>{notification.Message}</p>
      <small>{notification.Timestamp}</small>
    </div>
  );
}

export default NotificationCard;