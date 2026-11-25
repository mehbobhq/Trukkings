"use client";

import { useState } from "react";
import { contactPage } from "@/content/company";
import { site } from "@/content/site";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("Please enter your name and a valid email address.");
      return;
    }
    // No backend yet: open the visitor's email app with their answers filled in.
    const body = `Name: ${name}\nEmail: ${email}\nRole: ${f.get("role")}\nOperates: ${f.get("where") || ""}\nTools today: ${f.get("tools") || ""}\n\n${f.get("note") || ""}`;
    const url = `mailto:${site.contactEmail}?subject=${encodeURIComponent("Trukkings early access")}&body=${encodeURIComponent(body)}`;
    setStatus(`Opening your email app. If nothing opens, write to ${site.contactEmail} and we'll take it from there.`);
    window.location.href = url;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="formcard">
      <label>
        Your name
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        I am a…
        <select name="role" defaultValue={contactPage.roles[0]}>
          {contactPage.roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </label>
      <label>
        Where do you operate?
        <input name="where" placeholder="Regions or lanes you work" />
      </label>
      <label>
        Tools you use today
        <input name="tools" placeholder="Dispatch software, load boards, spreadsheets…" />
      </label>
      <label>
        Anything we should know?
        <textarea name="note" />
      </label>
      <button className="btn btn-dark" type="submit">
        {contactPage.submit}
      </button>
      <p className="fine" role="status">
        {status}
      </p>
    </form>
  );
}
