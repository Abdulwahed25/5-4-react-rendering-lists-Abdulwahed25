import { useState } from "react";
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function toggleTask(id) {
    onMutateCourse(index, tasks =>
      tasks.map(t => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  }

  function deleteTask(id) {
    onMutateCourse(index, tasks => tasks.filter(t => t.id !== id));
  }

  function addTask(e) {
    e.preventDefault();
    if (!title.trim() || !date) return;

    const newTask = {
      id: Date.now(),
      title,
      dueDate: date,
      isDone: false,
    };

    onMutateCourse(index, tasks => [...tasks, newTask]);
    setTitle("");
    setDate("");
  }

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>
      </header>

      <ul className="tasksList">
        {course.tasks.length > 0 ? (
          course.tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        ) : (
          <p className="empty">All caught up!</p>
        )}
      </ul>

      <form onSubmit={addTask} className="newTask">
        <input
          className="titleField"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title"
          aria-label="Task title"
        />
        <div className="dateRow">
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            aria-label="Due date"
          />
          <button type="submit" className="primary">
            Add
          </button>
        </div>
      </form>
    </article>
  );
}