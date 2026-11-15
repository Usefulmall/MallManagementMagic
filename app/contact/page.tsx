"use client";

import { useState } from "react";

const SUBJECTS = [
  "General Enquiry",
  "Question about the Book",
  "Article Suggestion",
  "Resource Request",
  "Professional Advice",
  "Speaking or Training",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Could not send your message. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-dark py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-gold font-semibold text-xs uppercase tracking-widest block mb-3">
            Get in Touch
          </span>
          <h1 className="text-white font-bold text-4xl md:text-5xl font-serif mb-4">Contact</h1>
          <p className="text-white/60 text-lg max-w-[500px]">
            Questions, article ideas, resource requests, or anything else — send a message and Johan will get back to you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Contact info sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-navy-dark font-serif font-bold text-lg mb-3">
                Johan Olwage
              </h3>
              <p className="text-mid-grey text-sm leading-relaxed">
                Shopping centre management professional, author, and founder of UsefulMall.
              </p>
            </div>

            <div>
              <span className="text-gold font-semibold text-xs uppercase tracking-widest block mb-2">
                Location
              </span>
              <p className="text-mid-grey text-sm">Langebaan, South Africa</p>
            </div>

            <div>
              <span className="text-gold font-semibold text-xs uppercase tracking-widest block mb-3">
                Quick Links
              </span>
              <div className="space-y-2">
                <a href="/articles" className="block text-mid-grey hover:text-navy-dark text-sm transition-colors">
                  Read Articles &rarr;
                </a>
                <a href="/resources" className="block text-mid-grey hover:text-navy-dark text-sm transition-colors">
                  Free Resources &rarr;
                </a>
                <a href="/the-book" className="block text-mid-grey hover:text-navy-dark text-sm transition-colors">
                  The Book &rarr;
                </a>
                <a href="/about" className="block text-mid-grey hover:text-navy-dark text-sm transition-colors">
                  About Johan &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-navy-dark font-serif font-bold text-2xl mb-3">Message Sent</h3>
                <p className="text-mid-grey mb-6">
                  Thank you for reaching out. Johan will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-gold hover:text-navy-dark font-semibold text-sm transition-colors"
                >
                  Send another message &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-navy-dark font-semibold text-sm mb-2"
                    >
                      Your Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full border border-border-grey rounded-lg px-4 py-3 text-sm text-navy-dark placeholder-mid-grey/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-navy-dark font-semibold text-sm mb-2"
                    >
                      Your Email <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.co.za"
                      className="w-full border border-border-grey rounded-lg px-4 py-3 text-sm text-navy-dark placeholder-mid-grey/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-navy-dark font-semibold text-sm mb-2"
                  >
                    Subject <span className="text-gold">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-border-grey rounded-lg px-4 py-3 text-sm text-navy-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors bg-white"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-navy-dark font-semibold text-sm mb-2"
                  >
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="w-full border border-border-grey rounded-lg px-4 py-3 text-sm text-navy-dark placeholder-mid-grey/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto bg-gold hover:bg-gold/90 disabled:opacity-60 text-navy-dark font-bold px-10 py-3 rounded-lg transition-colors uppercase tracking-wider text-sm"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
