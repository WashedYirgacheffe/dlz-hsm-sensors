"use client";

import { useState } from "react";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");

    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Could not sign in.");
        setBusy(false);
        return;
      }

      window.location.reload();
    } catch {
      setError("Network error. Try again.");
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-[420px] flex-col justify-center px-4 py-24 sm:px-6">
      <p className="eyebrow">Internal</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900">
        Inbound inquiries
      </h1>
      <form onSubmit={submit} className="mt-6 rounded-lg border border-ink-200 bg-white p-6">
        <label className="block">
          <span className="text-[12.5px] font-medium text-ink-800">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            autoFocus
            className="mt-1.5 w-full rounded border border-ink-300 px-3 py-2.5 text-[13.5px] text-ink-900 focus:border-brand-500 focus:outline-none"
          />
        </label>
        {error && (
          <p role="alert" className="mt-3 text-[12.5px] text-red-600">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={busy || password.length === 0}
          className="mt-5 w-full rounded bg-brand-600 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? "Checking…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
