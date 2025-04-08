"use client"

import { useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      if (!recaptchaReady) {
        throw new Error("reCAPTCHA not ready");
      }

      const token = await grecaptcha.execute(siteKey, { action: "submit" });

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResult({ type: "success", message: data.message });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      setResult({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="afterInteractive"
        onLoad={() => setRecaptchaReady(true)}
      />

      <motion.div
        className="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl text-center font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contact Me
        </motion.h1>

        <motion.p
          className="text-center text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Let&apos;s connect and explore how we can work together.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {["name", "email", "message"].map((field, i) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.2 }}
            >
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={`Your ${field}`}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-600 p-2 rounded"
                />
              ) : (
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-600 p-2 rounded"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-4 px-6 py-2 
              text-white border-2 border-pink-600 rounded-full 
              bg-transparent hover:bg-pink-500 hover:border-pink-500 
              transition duration-300 w-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        <motion.p
          className="text-xs text-gray-500 mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" className="underline ml-1 text-pink-500" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and
          <a href="https://policies.google.com/terms" className="underline ml-1 text-pink-500" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
        </motion.p>

        {result && (
          <motion.p
            className={`mt-4 text-center ${result.type === "success" ? "text-green-600" : "text-red-600"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            {result.message}
          </motion.p>
        )}
      </motion.div>
    </>
  );
}