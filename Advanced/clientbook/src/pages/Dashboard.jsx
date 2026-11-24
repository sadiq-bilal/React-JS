import { money } from "../utils/helpers";
import { stages } from "../data/sampleData";
import { cardClass, barColor } from "../utils/styles";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";

export default function Dashboard({ customers, deals, tasks }) {
  const pendingTasks = tasks.filter((t) => !t.done).length;
  const openDeals = deals.filter((d) => d.stage === "New" || d.stage === "Negotiation");
  const openValue = openDeals.reduce((sum, d) => sum + d.value, 0);
  const wonValue = deals.filter((d) => d.stage === "Won").reduce((sum, d) => sum + d.value, 0);

  const stats = [
    { label: "Total customers", value: customers.length, color: "bg-blue-600" },
    { label: "Pending tasks", value: pendingTasks, color: "bg-violet-600" },
    { label: "Open deal value", value: money(openValue), color: "bg-orange-500" },
    { label: "Revenue won", value: money(wonValue), color: "bg-emerald-600" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={"rounded-xl p-4 text-white " + s.color}>
            <p className="text-sm text-white/80">{s.label}</p>
            <p className="mt-1 text-2xl font-semibold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className={cardClass}>
          <h2 className="mb-3 font-semibold">Deals by stage</h2>
          {stages.map((stage) => {
            const count = deals.filter((d) => d.stage === stage).length;
            const percent = deals.length ? (count / deals.length) * 100 : 0;
            return (
              <div key={stage} className="mb-3">
                <div className="mb-1 flex justify-between text-sm">
                  <span>{stage}</span>
                  <span className="text-slate-500 dark:text-slate-400">{count}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className={"h-2 rounded-full " + barColor[stage]} style={{ width: percent + "%" }}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={cardClass}>
          <h2 className="mb-3 font-semibold">Recent customers</h2>
          <ul className="divide-y divide-slate-200 dark:divide-slate-700">
            {customers.slice(-4).reverse().map((c) => (
              <li key={c.id} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Avatar name={c.name} />
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{c.company}</p>
                  </div>
                </div>
                <Badge text={c.status} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
