import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Replace with your API/EmailJS
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const openWhatsApp = () => {
    const phone = "7264892422"; // Replace with your number
    const text = encodeURIComponent(
      "Hi! I am interested in your Multani Mitti products.",
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      details: ["Multan, Punjab, Pakistan", "Near Ghanta Ghar Chowk"],
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      details: ["+92 300 123 4567", "+92 321 987 6543"],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: ["hello@clayofmultan.com", "orders@clayofmultan.com"],
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      details: ["Mon - Sat: 9AM - 7PM", "Sunday: 10AM - 4PM"],
    },
  ];

  return (
    <section id="contact" className="relative bg-[#F5F1E8] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4956A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#4A3728]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#4A3728]/10 text-[#4A3728] text-xs font-medium tracking-widest uppercase rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-[#4A3728] leading-tight mb-4">
            Let's Connect
          </h2>
          <p className="font-body text-[#6B5B4F] text-base md:text-lg leading-relaxed">
            Have questions about our 100% pure Multani Mitti? We're here to help
            you discover the ancient secret to radiant skin.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-[#E8E0D4] hover:border-[#C4956A]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#4A3728]/5"
                >
                  <div className="w-12 h-12 bg-[#4A3728] rounded-xl flex items-center justify-center text-[#C4956A] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-medium text-[#4A3728] mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, i) => (
                    <p
                      key={i}
                      className="font-body text-sm text-[#6B5B4F] leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-2xl font-medium text-sm transition-all duration-300 hover:bg-[#128C7E] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8E0D4] shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-body text-xs font-medium text-[#4A3728] uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3.5 bg-[#F5F1E8] border border-[#E8E0D4] rounded-xl text-sm text-[#4A3728] placeholder-[#A89A8C] focus:outline-none focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/10 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-xs font-medium text-[#4A3728] uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3.5 bg-[#F5F1E8] border border-[#E8E0D4] rounded-xl text-sm text-[#4A3728] placeholder-[#A89A8C] focus:outline-none focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-body text-xs font-medium text-[#4A3728] uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 123 4567"
                        className="w-full px-4 py-3.5 bg-[#F5F1E8] border border-[#E8E0D4] rounded-xl text-sm text-[#4A3728] placeholder-[#A89A8C] focus:outline-none focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/10 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-xs font-medium text-[#4A3728] uppercase tracking-wider">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-[#F5F1E8] border border-[#E8E0D4] rounded-xl text-sm text-[#4A3728] focus:outline-none focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a subject</option>
                        <option value="order">Product Inquiry</option>
                        <option value="bulk">Bulk Order</option>
                        <option value="wholesale">Wholesale / Reseller</option>
                        <option value="support">Customer Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-body text-xs font-medium text-[#4A3728] uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your skin concerns or product requirements..."
                      className="w-full px-4 py-3.5 bg-[#F5F1E8] border border-[#E8E0D4] rounded-xl text-sm text-[#4A3728] placeholder-[#A89A8C] focus:outline-none focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/10 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#4A3728] text-white text-sm font-medium rounded-xl transition-all duration-300 hover:bg-[#C4956A] hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#4A3728]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#4A3728]" />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-[#4A3728] mb-2">
                    Message Received!
                  </h3>
                  <p className="font-body text-[#6B5B4F] mb-8">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 border-2 border-[#4A3728] text-[#4A3728] text-sm font-medium rounded-xl transition-all duration-300 hover:bg-[#4A3728] hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
