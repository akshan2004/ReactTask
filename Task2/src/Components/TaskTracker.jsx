import { useState } from "react";
import "./TaskTracker.css";

export default function TaskTracker() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [error, setError] = useState("");

  function addTask(event) {
    event.preventDefault();

    const text = input.trim();
    if (!text) {
      setError("Please enter a task.");
      return;
    }

    setError("");

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
    setInput("");
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  const activeCount = tasks.filter((task) => !task.completed).length;

  const visibleTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <section className="task-tracker">
      <h1>Task Tracker</h1>

      <form className="task-form" onSubmit={addTask}>
        <label className="sr-only" htmlFor="new-task">
          New task
        </label>
        <input
          id="new-task"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            if (error) setError("");
          }}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add</button>
      </form>
      {error && <p className="validation-message" role="alert">{error}</p>}

      <p className="active-count">
        {activeCount} {activeCount === 1 ? "active task" : "active tasks"}
      </p>

      <div className="task-filters" aria-label="Filter tasks">
        {["All", "Active", "Completed"].map((filterName) => (
          <button
            key={filterName}
            type="button"
            className={filter === filterName ? "selected" : ""}
            aria-pressed={filter === filterName}
            onClick={() => setFilter(filterName)}
          >
            {filterName}
          </button>
        ))}
      </div>

      {visibleTasks.length === 0 ? (
        <p className="no-tasks">No tasks to show.</p>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <li className="task-item" key={task.id}>
              <label className={task.completed ? "task-text completed" : "task-text"}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
              </label>
              <button
                className="delete-button"
                type="button"
                onClick={() => deleteTask(task.id)}
                aria-label={`Delete ${task.text}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

