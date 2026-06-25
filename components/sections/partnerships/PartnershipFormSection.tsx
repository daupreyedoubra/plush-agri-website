"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const partnershipTypes = [
  "Government",
  "NGO",
  "Development Partner",
  "Investor",
  "Research Institution",
  "Other",
];

type FormData = {
  name: string;
  organisation: string;
  partnershipType: string;
  message: string;
};

const inputClass =
  "w-full px-4 py-3 border border-accent bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors";

const errorClass = "mt-1.5 text-xs text-red-500";

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function PartnershipFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setServerError(false);
    try {
      const res = await fetch("/api/partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setServerError(true);
      }
    } catch {
      setServerError(true);
    }
  };

  return (
    <section className="bg-neutral py-24 lg:py-32" id="partnership-inquiry">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20">
          {/* Left: intro */}
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
              {...inView}
              transition={{ duration: 0.5, ease: EASE }}
            >
              Get in Touch
            </motion.p>
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-primary leading-[1.2] mb-6"
              {...inView}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              Start a partnership conversation.
            </motion.h2>
            <motion.p
              className="text-base text-gray-600 leading-relaxed mb-8"
              {...inView}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            >
              Tell us about your organisation and the kind of partnership you
              have in mind. We will respond within 48 hours.
            </motion.p>

            <motion.div
              className="space-y-4 text-sm text-gray-500"
              {...inView}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              <p>
                <span className="font-semibold text-primary block mb-0.5">
                  Email
                </span>
                <a
                  href="mailto:plushagrisolutions@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  plushagrisolutions@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-primary block mb-0.5">
                  Phone
                </span>
                <a
                  href="tel:+2348033670509"
                  className="hover:text-primary transition-colors"
                >
                  +234 803 367 0509
                </a>
              </p>
              <p>
                <span className="font-semibold text-primary block mb-0.5">
                  Location
                </span>
                Kaduna State, Northern Nigeria
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-7"
            {...inView}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            {submitted ? (
              <div className="bg-white border border-accent p-10 lg:p-14 text-center">
                <span
                  className="block w-8 h-0.5 bg-secondary mx-auto mb-6"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-primary mb-3">
                  Inquiry received.
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Thank you for reaching out. A member of the PAS team will
                  respond to your enquiry within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white border border-accent p-8 lg:p-12 space-y-6"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-primary mb-2 tracking-wide"
                  >
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className={inputClass}
                    style={{ borderRadius: "4px" }}
                    {...register("name", { required: "Name is required." })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                    <p className={errorClass} role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Organisation */}
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-xs font-semibold text-primary mb-2 tracking-wide"
                  >
                    Organisation <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="organisation"
                    type="text"
                    placeholder="Organisation name"
                    className={inputClass}
                    style={{ borderRadius: "4px" }}
                    {...register("organisation", {
                      required: "Organisation is required.",
                    })}
                    aria-invalid={errors.organisation ? "true" : "false"}
                  />
                  {errors.organisation && (
                    <p className={errorClass} role="alert">
                      {errors.organisation.message}
                    </p>
                  )}
                </div>

                {/* Partnership Type */}
                <div>
                  <label
                    htmlFor="partnershipType"
                    className="block text-xs font-semibold text-primary mb-2 tracking-wide"
                  >
                    Partnership Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="partnershipType"
                    className={`${inputClass} cursor-pointer`}
                    style={{ borderRadius: "4px" }}
                    {...register("partnershipType", {
                      required: "Please select a partnership type.",
                    })}
                    aria-invalid={errors.partnershipType ? "true" : "false"}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select partnership type
                    </option>
                    {partnershipTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.partnershipType && (
                    <p className={errorClass} role="alert">
                      {errors.partnershipType.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-primary mb-2 tracking-wide"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your organisation and the partnership you have in mind."
                    className={`${inputClass} resize-none`}
                    style={{ borderRadius: "4px" }}
                    {...register("message", {
                      required: "Please include a message.",
                      minLength: {
                        value: 20,
                        message: "Please provide a little more detail (20 characters minimum).",
                      },
                    })}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && (
                    <p className={errorClass} role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p className="text-sm text-red-500" role="alert">
                    Something went wrong. Please try again or email us directly
                    at plushagrisolutions@gmail.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold text-sm h-12 transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ borderRadius: "4px" }}
                >
                  {isSubmitting ? "Sending…" : "Send Partnership Inquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
