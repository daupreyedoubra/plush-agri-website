"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

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

// ─── 1. General Inquiry Form ──────────────────────────────────────────────────
type GeneralData = { name: string; email: string; phone?: string; message: string };

function GeneralForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<GeneralData>();

  const onSubmit = async (data: GeneralData) => {
    setServerError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
      else setServerError(true);
    } catch { setServerError(true); }
  };

  if (submitted) return <SuccessCard message="A member of the PAS team will respond to your message within 48 hours." />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-accent p-8 lg:p-12 space-y-6" noValidate>
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
      {serverError && <p className="text-sm text-red-500" role="alert">Something went wrong. Please email us directly at plushagrisolutions@gmail.com.</p>}
      <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-semibold text-sm h-12 transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed" style={{ borderRadius: "4px" }}>
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

// ─── 2. Partnership Inquiry Form ──────────────────────────────────────────────
const partnershipTypes = ["Government", "NGO", "Development Partner", "Investor", "Research Institution", "Other"];
type PartnershipData = { name: string; organisation: string; partnershipType: string; message: string };

function PartnershipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PartnershipData>();

  const onSubmit = async (data: PartnershipData) => {
    setServerError(false);
    try {
      const res = await fetch("/api/partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
      else setServerError(true);
    } catch { setServerError(true); }
  };

  if (submitted) return <SuccessCard message="Thank you for your partnership inquiry. We will respond within 48 hours to discuss next steps." />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-accent p-8 lg:p-12 space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="p-name" className={labelClass}>Full Name <span className="text-red-400">*</span></label>
          <input id="p-name" type="text" placeholder="Your full name" className={inputClass} style={{ borderRadius: "4px" }}
            {...register("name", { required: "Name is required." })} aria-invalid={errors.name ? "true" : "false"} />
          {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="p-org" className={labelClass}>Organisation <span className="text-red-400">*</span></label>
          <input id="p-org" type="text" placeholder="Organisation name" className={inputClass} style={{ borderRadius: "4px" }}
            {...register("organisation", { required: "Organisation is required." })} aria-invalid={errors.organisation ? "true" : "false"} />
          {errors.organisation && <p className={errorClass} role="alert">{errors.organisation.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="p-type" className={labelClass}>Partnership Type <span className="text-red-400">*</span></label>
        <select id="p-type" className={`${inputClass} cursor-pointer`} style={{ borderRadius: "4px" }} defaultValue=""
          {...register("partnershipType", { required: "Please select a partnership type." })} aria-invalid={errors.partnershipType ? "true" : "false"}>
          <option value="" disabled>Select partnership type</option>
          {partnershipTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.partnershipType && <p className={errorClass} role="alert">{errors.partnershipType.message}</p>}
      </div>
      <div>
        <label htmlFor="p-message" className={labelClass}>Message <span className="text-red-400">*</span></label>
        <textarea id="p-message" rows={5} placeholder="Describe your organisation and the kind of partnership you have in mind." className={`${inputClass} resize-none`} style={{ borderRadius: "4px" }}
          {...register("message", { required: "Message is required.", minLength: { value: 20, message: "Please provide a little more detail (20+ characters)." } })}
          aria-invalid={errors.message ? "true" : "false"} />
        {errors.message && <p className={errorClass} role="alert">{errors.message.message}</p>}
      </div>
      {serverError && <p className="text-sm text-red-500" role="alert">Something went wrong. Please email us at plushagrisolutions@gmail.com.</p>}
      <button type="submit" disabled={isSubmitting} className="w-full bg-trust text-white font-semibold text-sm h-12 transition-colors hover:bg-trust/90 disabled:opacity-60 disabled:cursor-not-allowed" style={{ borderRadius: "4px" }}>
        {isSubmitting ? "Sending…" : "Send Partnership Inquiry"}
      </button>
    </form>
  );
}

// ─── 3. Emergency Veterinary Form ─────────────────────────────────────────────
type EmergencyData = { name: string; phone: string; farmLocation: string; animalType: string; description: string };

function EmergencyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<EmergencyData>();

  const onSubmit = async (data: EmergencyData) => {
    setServerError(false);
    try {
      const res = await fetch("/api/emergency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
      else setServerError(true);
    } catch { setServerError(true); }
  };

  if (submitted) return <SuccessCard message="Emergency inquiry received. We will contact you immediately on the phone number provided. If urgent, please also call +234 803 367 0509 directly." />;

  return (
    <div className="space-y-6">
      {/* Direct call banner */}
      <div className="bg-primary p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderRadius: "4px" }}>
        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-white/60 mb-1">For immediate assistance</p>
          <p className="text-white font-bold text-base">Call us directly, right now.</p>
        </div>
        <a href="tel:+2348033670509" className="inline-flex items-center justify-center bg-white text-primary font-bold text-sm px-6 h-11 hover:bg-white/90 transition-colors flex-shrink-0" style={{ borderRadius: "4px" }}>
          +234 803 367 0509
        </a>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-accent p-8 lg:p-12 space-y-6" noValidate>
        <p className="text-xs text-gray-400 italic">Complete this form to receive a callback. For life-threatening emergencies, please call the number above first.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="e-name" className={labelClass}>Your Name <span className="text-red-400">*</span></label>
            <input id="e-name" type="text" placeholder="Your full name" className={inputClass} style={{ borderRadius: "4px" }}
              {...register("name", { required: "Name is required." })} aria-invalid={errors.name ? "true" : "false"} />
            {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="e-phone" className={labelClass}>Phone Number <span className="text-red-400">*</span></label>
            <input id="e-phone" type="tel" placeholder="+234 000 000 0000" className={inputClass} style={{ borderRadius: "4px" }}
              {...register("phone", { required: "Phone number is required for emergency callbacks." })} aria-invalid={errors.phone ? "true" : "false"} />
            {errors.phone && <p className={errorClass} role="alert">{errors.phone.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="e-location" className={labelClass}>Farm Location <span className="text-red-400">*</span></label>
          <input id="e-location" type="text" placeholder="Village, LGA, or landmark near your farm" className={inputClass} style={{ borderRadius: "4px" }}
            {...register("farmLocation", { required: "Farm location is required." })} aria-invalid={errors.farmLocation ? "true" : "false"} />
          {errors.farmLocation && <p className={errorClass} role="alert">{errors.farmLocation.message}</p>}
        </div>
        <div>
          <label htmlFor="e-animal" className={labelClass}>Animal Type &amp; Number Affected <span className="text-red-400">*</span></label>
          <input id="e-animal" type="text" placeholder="e.g. Cattle: 12 animals, Goats: 5 animals" className={inputClass} style={{ borderRadius: "4px" }}
            {...register("animalType", { required: "Please describe the animals affected." })} aria-invalid={errors.animalType ? "true" : "false"} />
          {errors.animalType && <p className={errorClass} role="alert">{errors.animalType.message}</p>}
        </div>
        <div>
          <label htmlFor="e-desc" className={labelClass}>Description of Emergency <span className="text-red-400">*</span></label>
          <textarea id="e-desc" rows={5} placeholder="Describe the symptoms, how long they have been present, and any steps you have already taken." className={`${inputClass} resize-none`} style={{ borderRadius: "4px" }}
            {...register("description", { required: "Please describe the emergency.", minLength: { value: 20, message: "Please provide more detail (20+ characters)." } })}
            aria-invalid={errors.description ? "true" : "false"} />
          {errors.description && <p className={errorClass} role="alert">{errors.description.message}</p>}
        </div>
        {serverError && <p className="text-sm text-red-500" role="alert">Submission failed. Please call +234 803 367 0509 directly.</p>}
        <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-semibold text-sm h-12 transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed" style={{ borderRadius: "4px" }}>
          {isSubmitting ? "Sending…" : "Send Emergency Request"}
        </button>
      </form>
    </div>
  );
}

// ─── Tab wrapper ──────────────────────────────────────────────────────────────
const tabs = [
  { id: "general", label: "General Inquiry" },
  { id: "partnership", label: "Partnership Inquiry" },
  { id: "emergency", label: "Emergency Vet" },
] as const;

type TabId = typeof tabs[number]["id"];

export default function ContactFormsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("general");

  // Allow ?tab=partnership or ?tab=emergency to pre-select on mount
  useEffect(() => {
    const tab = new URLSearchParams(window.location.search).get("tab");
    if (tab === "partnership" || tab === "emergency") {
      setActiveTab(tab as TabId);
    }
  }, []);

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

        {/* Tab nav */}
        <div
          className="flex border-b border-accent mb-10 overflow-x-auto"
          role="tablist"
          aria-label="Contact form type"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              } ${tab.id === "emergency" ? "text-trust" : ""}`}
            >
              {tab.id === "emergency" && (
                <span className="mr-2 text-xs" aria-hidden="true">⚠</span>
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form panels */}
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-label={tabs.find((t) => t.id === activeTab)?.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              {activeTab === "general" && <GeneralForm />}
              {activeTab === "partnership" && <PartnershipForm />}
              {activeTab === "emergency" && <EmergencyForm />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
