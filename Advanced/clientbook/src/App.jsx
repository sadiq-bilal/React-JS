import { Routes, Route, Navigate } from "react-router-dom";
import useSavedState from "./hooks/useSavedState";
import { startCustomers, startDeals, startTasks } from "./data/sampleData";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import CustomerDetails from "./pages/CustomerDetails";
import Deals from "./pages/Deals";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";

export default function App() {
  const [user, setUser] = useSavedState("crm-user", null);
  const [customers, setCustomers] = useSavedState("crm-customers", startCustomers);
  const [deals, setDeals] = useSavedState("crm-deals", startDeals);
  const [tasks, setTasks] = useSavedState("crm-tasks", startTasks);

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login onLogin={setUser} />} />

      {/* Pages below need a logged-in user */}
      <Route element={user ? <MainLayout user={user} onLogout={() => setUser(null)} /> : <Navigate to="/login" />}>
        <Route index element={<Dashboard customers={customers} deals={deals} tasks={tasks} />} />
        <Route path="customers" element={<Customers customers={customers} setCustomers={setCustomers} />} />
        <Route path="customers/:id" element={<CustomerDetails customers={customers} setCustomers={setCustomers} deals={deals} tasks={tasks} />} />
        <Route path="deals" element={<Deals deals={deals} setDeals={setDeals} customers={customers} />} />
        <Route path="tasks" element={<Tasks tasks={tasks} setTasks={setTasks} customers={customers} />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
