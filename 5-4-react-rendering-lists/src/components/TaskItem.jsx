import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task" key={task.id}>
      <label className="taskMain">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onToggle(task.id)}
        />
        {task.title}
      </label>

      {!task.isDone && <DueBadge dueDate={task.dueDate} />}

      <button
        className="ghost"
        aria-label="Delete task"
        onClick={() => onDelete(task.id)}
      >
        ✕
      </button>
    </li>
  );
}