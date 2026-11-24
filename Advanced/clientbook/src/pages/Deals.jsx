import { useState } from "react";
import { money } from "../utils/helpers";
import { stages } from "../data/sampleData";
import { inputClass, primaryBtn, cardClass, columnColor, borderColor, barColor } from "../utils/styles";
import Toggle from "../components/Toggle";

export default function Deals({ deals, setDeals, customers }) {
  const [title, setTitle] = useState("");
  const [customer, setCustomer] = useState("");
  const [value, setValue] = useState("");
  const [view, setView] = useState("List"); // List or Board

  const addDeal = (e) => {
    e.preventDefault();
    if (!title.trim() || !customer || !value) return;
    setDeals([...deals, { id: Date.now(), title, customer, value: Number(value), stage: "New" }]);
    setTitle(""); setCustomer(""); setValue("");
  };

  const changeStage = (id, stage) => setDeals(deals.map((d) => (d.id === id ? { ...d, stage } : d)));
  const removeDeal = (id) => setDeals(deals.filter((d) => d.id !== id));

  return (
    <div>
      <form onSubmit={addDeal} className={cardClass + " mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"}>
        <input className={inputClass} placeholder="Deal title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <select className={inputClass} value={customer} onChange={(e) => setCustomer(e.target.value)}>
          <option value="">Choose customer</option>
          {customers.map((c) => <option key={c.id} value={c.company}>{c.company}</option>)}
        </select>
        <input className={inputClass} type="number" min="0" placeholder="Value in ₹" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit" className={primaryBtn}>Add deal</button>
      </form>

      <Toggle options={["List", "Board"]} value={view} onChange={setView} />

      <div className={view === "Board" ? "hidden" : "space-y-3"}>
        {deals.length === 0 && (
          <div className={cardClass + " py-10 text-center text-sm text-slate-500 dark:text-slate-400"}>
            No deals yet. Add your first deal above.
          </div>
        )}
        {deals.map((d) => (
          <div key={d.id} className={cardClass + " flex flex-col gap-3 border-l-4 sm:flex-row sm:items-center " + borderColor[d.stage]}>
            <div className="flex flex-1 items-center gap-3">
              <span className="flex w-5 justify-center"><span className={"h-3 w-3 rounded-full " + barColor[d.stage]}></span></span>
              <div>
                <p className="font-medium">{d.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{d.customer}</p>
              </div>
            </div>
            <p className="font-semibold sm:w-36 sm:text-right">{money(d.value)}</p>
            <select className={inputClass + " sm:w-36"} value={d.stage} onChange={(e) => changeStage(d.id, e.target.value)} aria-label="Change stage">
              {stages.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button className="text-left text-sm text-red-600 dark:text-red-400 sm:w-14 sm:text-right" onClick={() => removeDeal(d.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Board view: one column for each stage */}
      {view === "Board" && (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage) => {
            const stageDeals = deals.filter((d) => d.stage === stage);
            return (
              <div key={stage} className={"rounded-xl p-3 " + columnColor[stage]}>
                <p className="mb-3 flex justify-between text-sm font-semibold">
                  <span>{stage}</span>
                  <span>{stageDeals.length}</span>
                </p>
                {stageDeals.map((d) => (
                  <div key={d.id} className="mb-2 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                    <p className="font-medium">{d.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{d.customer}</p>
                    <p className="mt-1 font-semibold">{money(d.value)}</p>
                    <select className={inputClass + " mt-2 py-1"} value={d.stage} onChange={(e) => changeStage(d.id, e.target.value)} aria-label="Move deal">
                      {stages.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                ))}
                {stageDeals.length === 0 && <p className="text-sm text-slate-500 dark:text-slate-400">No deals here.</p>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
