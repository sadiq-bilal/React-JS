import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { money } from "../utils/helpers";
import { inputClass, primaryBtn, cardClass } from "../utils/styles";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";

export default function CustomerDetails({ customers, setCustomers, deals, tasks }) {
  const { id } = useParams();
  const [note, setNote] = useState("");
  const customer = customers.find((c) => String(c.id) === id);

  if (!customer) {
    return (
      <p>
        Customer not found. <Link to="/customers" className="text-blue-700 hover:underline dark:text-blue-400">Back to customers</Link>
      </p>
    );
  }

  const notes = customer.notes || [];
  const customerDeals = deals.filter((d) => d.customer === customer.company);
  const customerTasks = tasks.filter((t) => t.customer === customer.company);

  const addNote = (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    const newNote = { id: Date.now(), text: note, date: new Date().toLocaleDateString("en-IN") };
    setCustomers(customers.map((c) => (c.id === customer.id ? { ...c, notes: [newNote, ...notes] } : c)));
    setNote("");
  };

  return (
    <div>
      <Link to="/customers" className="mb-4 inline-block text-sm text-blue-700 hover:underline dark:text-blue-400">← Back to customers</Link>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className={cardClass}>
          <div className="flex items-center gap-3">
            <Avatar name={customer.name} />
            <div>
              <p className="font-semibold">{customer.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{customer.company}</p>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p>{customer.email}</p>
            <p>{customer.phone}</p>
            <Badge text={customer.status} />
          </div>
        </div>

        <div className={cardClass + " lg:col-span-2"}>
          <h2 className="mb-3 font-semibold">Notes</h2>
          <form onSubmit={addNote} className="mb-4 flex gap-2">
            <input className={inputClass} placeholder="Write a note about this customer" value={note} onChange={(e) => setNote(e.target.value)} />
            <button type="submit" className={primaryBtn}>Add</button>
          </form>
          {notes.length === 0 && <p className="text-sm text-slate-500 dark:text-slate-400">No notes yet.</p>}
          <ul className="space-y-2">
            {notes.map((n) => (
              <li key={n.id} className="rounded-lg bg-slate-100 p-3 text-sm dark:bg-slate-700">
                <p>{n.text}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{n.date}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={cardClass}>
          <h2 className="mb-3 font-semibold">Deals</h2>
          {customerDeals.length === 0 && <p className="text-sm text-slate-500 dark:text-slate-400">No deals yet.</p>}
          {customerDeals.map((d) => (
            <div key={d.id} className="mb-2 flex items-center justify-between">
              <span>{d.title} ({money(d.value)})</span>
              <Badge text={d.stage} />
            </div>
          ))}
        </div>

        <div className={cardClass + " lg:col-span-2"}>
          <h2 className="mb-3 font-semibold">Tasks</h2>
          {customerTasks.length === 0 && <p className="text-sm text-slate-500 dark:text-slate-400">No tasks yet.</p>}
          {customerTasks.map((t) => (
            <p key={t.id} className={"mb-2 " + (t.done ? "text-slate-400 line-through" : "")}>
              {t.text} <span className="text-sm text-slate-500 dark:text-slate-400">(due {t.due})</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
