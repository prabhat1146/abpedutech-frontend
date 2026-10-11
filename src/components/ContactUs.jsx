
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Globe,
} from "lucide-react";

const ContactUs = () => {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our support team",
      value: "+91 7991156062",
      href: "tel:+917991156062",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your questions",
      value: "support@abpedutech.in",
      href: "mailto:support@abpedutech.in",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: MapPin,
      title: "Our Location",
      description: "Based in",
      value: "Saharsa, Bihar, India",
      href: null,
      color: "bg-orange-100 text-orange-700",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      // Connect your backend API here before using this form in production.
      // Example:
      // await CRUD.create("/contact", formData);

      setStatus({
        type: "success",
        message:
          "The form is ready, but message delivery has not been configured yet. Please email support@abpedutech.in.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "We could not send your message. Please try again or email our support team.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
            <MessageCircle size={16} />
            We'd Love to Hear From You
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Contact <span className="text-cyan-300">ABP EduTech</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            Have a question, suggestion, or need help with your learning
            journey? Our team is here to help. Get in touch with us.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            const content = (
              <div className="flex h-full items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={23} />
                </div>

                <div className="min-w-0">
                  <h2 className="font-bold text-gray-900">{item.title}</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>
                  <p className="mt-2 break-words font-semibold text-blue-700">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return (
              <div key={item.title}>
                {item.href ? (
                  <a href={item.href}>{content}</a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Form and Information */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Get In Touch
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Let's Start a Conversation
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We value your feedback and want to make your experience with
              ABP EduTech better. Contact us for questions about our learning
              resources, practice materials, or platform.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Headphones size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Student Support</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Need assistance? Reach out with your questions and
                    feedback.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <Globe size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Learning Together</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Your suggestions help us improve our educational
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Support Hours</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Contact us by phone or email for assistance. Response
                    times may vary.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-blue-50 p-5">
              <p className="font-semibold text-gray-900">
                Prefer email?
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Send your query directly to our support inbox.
              </p>
              <a
                href="mailto:support@abpedutech.in"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900"
              >
                <Mail size={17} />
                Email Support
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Fill in the details below and tell us how we can help.
            </p>

            {status.message && (
              <div
                role="status"
                className={`mt-6 rounded-xl p-4 text-sm leading-6 ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    maxLength={20}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="learning">Learning Resources</option>
                    <option value="feedback">Feedback or Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  minLength={10}
                  maxLength={3000}
                  className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
                <p className="mt-2 text-right text-xs text-gray-400">
                  {formData.message.length}/3000 characters
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Please wait..." : "Send Message"}
                <Send size={18} />
              </button>

              <p className="text-xs leading-5 text-gray-500">
                By submitting this form, you agree that ABP EduTech may use
                your details to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-200 bg-white px-5 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          We're Here to Help You Learn
        </h2>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
          Thank you for being part of the ABP EduTech learning community.
          We look forward to hearing from you.
        </p>
      </section>
    </main>
  );
};

export default ContactUs;
