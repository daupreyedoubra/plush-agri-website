"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

// ─── Shared styles ────────────────────────────────────────────────────────────
const inputClass =
  "w-full px-4 py-3 border border-accent bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors";
const labelClass = "block text-xs font-semibold text-primary mb-2 tracking-wide";
const errorClass = "mt-1.5 text-xs text-red-500";

// ─── Success card ─────────────────────────────────────────────────────────────
function SuccessCard({ message }: { message: string }) {
  return (
    <motion.div
      className="bg-white border border-accent p-10 lg:p-14 text-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <span className="block w-8 h-0.5 bg-secondary mx-auto mb-6" aria-hidden="true" />
      <h3 className="text-xl font-bold text-primary mb-3">Message received.</h3>
      <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">{message}</p>
    </motion.div>
  );
}

// ─── General Inquiry Form ──────────────────────────────────────────────────
type GeneralData = { name: string; email: string; phone?: string; message: string; company?: string };

const DEFAULT_ERROR = "Form temporarily down — email plushagrisolutions@gmail.com or WhatsApp 08087702906.";

function GeneralForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<GeneralData>();

  const onSubmit = async (data: GeneralData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) setSubmitted(true);
      else setServerError(json.error || DEFAULT_ERROR);
    } catch { setServerError(DEFAULT_ERROR); }
  };

  if (submitted) return <SuccessCard message="A member of the PAS team will respond to your message within 48 hours." />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-accent p-8 lg:p-12 space-y-6" noValidate>
      {/* Honeypot: hidden from real visitors, bots that autofill every field will trip it */}
      <div className="absolute w-px h-px overflow-hidden" style={{ clip: "rect(0,0,0,0)" }} aria-hidden="true">
        <label htmlFor="g-company">Company</label>
        <input id="g-company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="g-name" className={labelClass}>Full Name <span className="text-red-400">*</span></label>
          <input id="g-name" type="text" placeholder="Your full name" className={inputClass} style={{ borderRadius: "4px" }}
            {...register("name", { required: "Name is required." })} aria-invalid={errors.name ? "true" : "false"} />
          {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="g-email" className={labelClass}>Email Address <span className="text-red-400">*</span></label>
          <input id="g-email" type="email" placeholder="your@email.com" className={inputClass} style={{ borderRadius: "4px" }}
            {...register("email", {
              required: "Email is required.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address." },
            })} aria-invalid={errors.email ? "true" : "false"} />
          {errors.email && <p className={errorClass} role="alert">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="g-phone" className={labelClass}>Phone Number <span className="text-gray-400 font-normal">(optional)</span></label>
        <input id="g-phone" type="tel" placeholder="+234 000 000 0000" className={inputClass} style={{ borderRadius: "4px" }}
          {...register("phone")} />
      </div>
      <div>
        <label htmlFor="g-message" className={labelClass}>Message <span className="text-red-400">*</span></label>
        <textarea id="g-message" rows={5} placeholder="How can we help you?" className={`${inputClass} resize-none`} style={{ borderRadius: "4px" }}
          {...register("message", { required: "Message is required.", minLength: { value: 10, message: "Please provide a little more detail." } })}
          aria-invalid={errors.message ? "true" : "false"} />
        {errors.message && <p className={errorClass} role="alert">{errors.message.message}</p>}
      </div>
      {serverError && <p className="text-sm text-red-500" role="alert">{serverError}</p>}
      <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-semibold text-sm h-12 transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed" style={{ borderRadius: "4px" }}>
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

export default function ContactFormsSection() {
  return (
    <section className="bg-neutral py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Send a Message
        </motion.p>

        <div className="max-w-2xl">
          <GeneralForm />
        </div>
      </div>
    </section>
  );
}
