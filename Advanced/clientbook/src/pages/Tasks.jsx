import { useState } from "react";
import { daysFromNow } from "../utils/helpers";
import { inputClass, primaryBtn, cardClass, statusColor } from "../utils/styles";
import Toggle from "../components/Toggle";

export default function Tasks({ tasks, setTasks, customers }) {
  const [text, setText] = useState("");
  const [customer, setCustomer] = useState("");
  const [due, setDue] = useState(daysFromNow(1));
  const [filter, setFilter] = useState("All");
  const today = daysFromNow(0);

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim() || !customer) return;
    setTasks([...tasks, { id: Date.now(), text, customer, due, done: false }]);
    setText("");
  };

  const toggleTask = (id) => setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const removeTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  // Pending tasks first, earliest due date on top
  const sorted = [...tasks].sort((a, b) => a.done - b.done || a.due.localeCompare(b.due));
  const shown = sorted.filter((t) => filter === "All" || (filter === "Done" ? t.done : !t.done));

  return (
    <div>
      <form onSubmit={addTask} className={cardClass + " mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"}>
        <input className={inputClass} placeholder="What needs to be done?" value={text} onChange={(e) => setText(e.target.value)} />
        <select className={inputClass} value={customer} onChange={(e) => setCustomer(e.target.value)}>
          <option value="">Choose customer</option>
          {customers.map((c) => <option key={c.id} value={c.company}>{c.company}</option>)}
        </select>
        <input className={inputClass} type="date" value={due} onChange={(e) => setDue(e.target.value)} />
        <button type="submit" className={primaryBtn}>Add task</button>
      </form>

      <Toggle options={["All", "Pending", "Done"]} value={filter} onChange={setFilter} />

      {shown.length === 0 && (
        <div className={cardClass + " py-10 text-center text-sm text-slate-500 dark:text-slate-400"}>
          {tasks.length === 0 ? "No tasks yet. Add a follow-up above." : "No tasks in this view."}
        </div>
      )}
      <div className="space-y-3">
        {shown.map((t) => {
          const overdue = !t.done && t.due < today;
          return (
            <div key={t.id} className={cardClass + " flex flex-col gap-3 border-l-4 sm:flex-row sm:items-center " + (t.done ? "border-l-emerald-500" : overdue ? "border-l-red-500" : "border-l-blue-500")}>
              <div className="flex flex-1 items-center gap-3">
                <input type="checkbox" className="h-5 w-5 accent-emerald-600" checked={t.done} onChange={() => toggleTask(t.id)} aria-label="Mark as done" />
                <div>
                  <p className={"font-medium " + (t.done ? "text-slate-400 line-through" : "")}>{t.text}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.customer}</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 sm:w-36 sm:text-right">Due {t.due}</p>
              <div className="sm:w-36 sm:text-right">
                <span className={"inline-block rounded-full px-2.5 py-0.5 text-xs font-medium " + statusColor[t.done ? "Won" : overdue ? "Lost" : "New"]}>
                  {t.done ? "Done" : overdue ? "Overdue" : "Pending"}
                </span>
              </div>
              <button className="text-left text-sm text-red-600 dark:text-red-400 sm:w-14 sm:text-right" onClick={() => removeTask(t.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
