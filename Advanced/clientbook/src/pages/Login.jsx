import { useState } from "react";
import { inputClass, primaryBtn } from "../utils/styles";

// Demo login: there is no backend, so any valid email and a password of 4+ characters works
export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Enter a valid email address.");
    } else if (password.length < 4) {
      setError("Password must be at least 4 characters.");
    } else {
      onLogin(email);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <p className="text-2xl font-semibold">ClientBook</p>
        <p className="mb-5 mt-1 text-sm text-slate-500 dark:text-slate-400">Log in to manage your customers.</p>
        <label className="mb-3 block text-sm">Email
          <input className={inputClass + " mt-1"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="mb-3 block text-sm">Password
          <input className={inputClass + " mt-1"} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className="mb-3 text-sm text-red-600 dark:text-red-400">{error}</p>}
        <button type="submit" className={primaryBtn + " w-full"}>Log in</button>
      </form>
    </div>
  );
}
