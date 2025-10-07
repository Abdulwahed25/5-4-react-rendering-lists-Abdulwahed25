function daysUntil(dateStr) {
  const today = new Date();
  const due = new Date(dateStr + "T00:00:00");
  today.setHours(0,0,0,0);
  due.setHours(0,0,0,0);
  const diff = Math.round((due - today) / (1000 * 60 * 60 * 24));
  return diff;
}

export default function DueBadge({ dueDate }) {
  const daysLeft = daysUntil(dueDate);

  let label = "";
  if (daysLeft < 0) {
    label = "Overdue!";
  } else if (daysLeft === 0) {
    label = "Due today!";
  } else {
    label = `Due in ${daysLeft} days`;
  }

  return <span className="badge">{label}</span>;

}
