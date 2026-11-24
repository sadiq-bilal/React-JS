import { useState } from "react";
import { statuses } from "../data/sampleData";
import { inputClass, primaryBtn } from "../utils/styles";

export default function CustomerForm({ customer, onSave, onClose }) {
  const [form, setForm] = useState(customer || { name: "", company: "", email: "", phone: "", status: "Lead" });
  const [error, setError] = useState("");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const save = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center bg-slate-900/50 p-0 sm:items-center sm:p-4" onClick={onClose}>
      <div className="max-h-full w-full max-w-md overflow-y-auto rounded-t-2xl bg-white p-5 dark:bg-slate-800 sm:rounded-2xl" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-4 text-lg font-semibold">{customer ? "Edit customer" : "Add customer"}</h2>
        <div className="space-y-3">
          <label className="block text-sm">Name
            <input className={inputClass + " mt-1"} name="name" value={form.name} onChange={change} />
          </label>
          <label className="block text-sm">Company
            <input className={inputClass + " mt-1"} name="company" value={form.company} onChange={change} />
          </label>
          <label className="block text-sm">Email
            <input className={inputClass + " mt-1"} name="email" type="email" value={form.email} onChange={change} />
          </label>
          <label className="block text-sm">Phone
            <input className={inputClass + " mt-1"} name="phone" value={form.phone} onChange={change} />
          </label>
          <label className="block text-sm">Status
            <select className={inputClass + " mt-1"} name="status" value={form.status} onChange={change}>
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
        </div>
        {error && <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>}
        <div className="mt-5 flex justify-end gap-2">
          <button onClick={onClose} className="rounded-lg px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700">Cancel</button>
          <button onClick={save} className={primaryBtn}>Save customer</button>
        </div>
      </div>
    </div>
  );
}
