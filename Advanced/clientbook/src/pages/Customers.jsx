import { useState } from "react";
import { Link } from "react-router-dom";
import { statuses } from "../data/sampleData";
import { inputClass, primaryBtn, cardClass } from "../utils/styles";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import CustomerForm from "../components/CustomerForm";

export default function Customers({ customers, setCustomers }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editing, setEditing] = useState(null); // null = closed, {} = new, customer = edit

  const shown = customers.filter((c) => {
    const text = (c.name + c.company + c.email).toLowerCase();
    return text.includes(search.toLowerCase()) && (filter === "All" || c.status === filter);
  });

  const saveCustomer = (data) => {
    if (data.id) {
      setCustomers(customers.map((c) => (c.id === data.id ? data : c)));
    } else {
      setCustomers([...customers, { ...data, id: Date.now() }]);
    }
    setEditing(null);
  };

  const removeCustomer = (c) => {
    if (window.confirm("Delete " + c.name + "?")) {
      setCustomers(customers.filter((x) => x.id !== c.id));
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <input className={inputClass + " sm:max-w-xs"} placeholder="Search by name, company or email" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className={inputClass + " sm:w-40"} value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          {statuses.map((s) => <option key={s}>{s}</option>)}
        </select>
        <button className={primaryBtn + " sm:ml-auto"} onClick={() => setEditing({})}>Add customer</button>
      </div>

      {shown.length === 0 ? (
        <div className={cardClass + " py-10 text-center text-sm text-slate-500 dark:text-slate-400"}>
          No customers match your search. Try a different word or add a new customer.
        </div>
      ) : (
        <>
          {/* Table for larger screens */}
          <div className={cardClass + " hidden overflow-x-auto p-0 md:block"}>
            <table className="w-full text-left">
              <thead className="border-b border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                <tr>
                  <th className="px-4 py-3 text-sm font-medium">Name</th>
                  <th className="px-4 py-3 text-sm font-medium">Company</th>
                  <th className="px-4 py-3 text-sm font-medium">Contact</th>
                  <th className="px-4 py-3 text-sm font-medium">Status</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {shown.map((c) => (
                  <tr key={c.id}>
                    <td className="px-4 py-3 font-medium">
                      <div className="flex items-center gap-3"><Avatar name={c.name} /><Link to={"/customers/" + c.id} className="font-medium text-blue-700 hover:underline dark:text-blue-400">{c.name}</Link></div>
                    </td>
                    <td className="px-4 py-3">{c.company}</td>
                    <td className="px-4 py-3">
                      <div>{c.email}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{c.phone}</div>
                    </td>
                    <td className="px-4 py-3"><Badge text={c.status} /></td>
                    <td className="whitespace-nowrap px-4 py-3 text-right">
                      <button className="mr-3 text-blue-700 hover:underline dark:text-blue-400" onClick={() => setEditing(c)}>Edit</button>
                      <button className="text-red-600 hover:underline dark:text-red-400" onClick={() => removeCustomer(c)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for phones */}
          <div className="space-y-3 md:hidden">
            {shown.map((c) => (
              <div key={c.id} className={cardClass}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar name={c.name} />
                    <div>
                      <Link to={"/customers/" + c.id} className="block font-medium text-blue-700 hover:underline dark:text-blue-400">{c.name}</Link>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{c.company}</p>
                    </div>
                  </div>
                  <Badge text={c.status} />
                </div>
                <p className="mt-2 text-sm">{c.email}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{c.phone}</p>
                <div className="mt-3 flex gap-4 text-sm">
                  <button className="text-blue-700 dark:text-blue-400" onClick={() => setEditing(c)}>Edit</button>
                  <button className="text-red-600 dark:text-red-400" onClick={() => removeCustomer(c)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {editing && (
        <CustomerForm customer={editing.id ? editing : null} onSave={saveCustomer} onClose={() => setEditing(null)} />
      )}
    </div>
  );
}
