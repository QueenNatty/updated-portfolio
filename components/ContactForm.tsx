"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";

export default function ContactForm() {
  const [status, setStatus] = useState<{ text: string; error?: boolean }>({
    text: "",
  });
  const [sending, setSending] = useState(false);

  const notConnected = FORMSPREE_ID === "YOUR_FORM_ID";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (notConnected) {
      setStatus({
        text: "Form not connected yet — see README to set up Formspree (2 min).",
        error: true,
      });
      return;
    }

    setSending(true);
    setStatus({ text: "Transmitting..." });

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus({ text: "Message sent — thanks! I'll reply soon." });
        form.reset();
      } else {
        setStatus({
          text: "Something went wrong. Please try again or email me directly.",
          error: true,
        });
      }
    } catch {
      setStatus({
        text: "Network error — please try again or email me directly.",
        error: true,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your name" />
      </div>
      <div className="contact-form__row">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@email.com"
        />
      </div>
      <div className="contact-form__row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Type your message..."
        />
      </div>
      <button
        type="submit"
        className="btn btn--primary contact-form__submit"
        disabled={sending}
      >
        <span className="btn__text">{sending ? "Sending..." : "Transmit"}</span>
      </button>
      <p
        className={`contact-form__status${status.error ? " is-error" : ""}`}
        role="status"
      >
        {status.text}
      </p>
    </form>
  );
}
