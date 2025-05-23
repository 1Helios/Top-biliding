"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // You can add form submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8 text-2xl">
          We&apos;d love to hear from you! Please fill out the form below and
          We&apos;ll get in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 text-2xl" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 mb-2 text-2xl"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 mb-2 text-2xl"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-600 transition"
          >
            <h3 className="text-2xl font-bold">Send Message</h3>
          </button>
        </form>

        {/* Optional Contact Info */}
        <div className="mt-10 text-center text-gray-800">
          <p className="text-base sm:text-lg md:text-2xl font-bold italic break-words">
            abatemesfin@gmail.com
          </p>

          <p className="text-base sm:text-lg md:text-2xl font-bold italic break-words">
            Phone: 0911-15-12-01
          </p>
        </div>
      </div>
    </div>
  );
}
