"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CyberGlitch } from "./ui/CyberGlitch";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_USER_ID"); // You'll need to add your EmailJS user ID here
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId = "service_7sh5m1m"; // Your service ID
      const templateId = "template_contact"; // You'll need to create this template
      const userId = "YOUR_USER_ID"; // You'll need to add your EmailJS user ID

      const templateParams = {
        from_email: formData.email,
        message: formData.message,
        to_email: "marwenrabai6@gmail.com", // Your new email
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, userId);

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 px-4 md:px-6" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cyber-magenta/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-cyber-teal/10 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 bg-grid-small-white/5 mix-blend-overlay"></div>
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16 text-center relative z-10 reveal-on-scroll">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-magenta/20 via-transparent to-cyber-teal/20 rounded-sm blur-sm"></div>
          <CyberGlitch
            text="CONTACT"
            className="text-sm font-mono text-white/80 uppercase tracking-widest"
            glitchIntensity="medium"
            color="primary"
          />
        </div>

        <h2 className="text-4xl md:text-5xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-magenta via-white/90 to-cyber-teal pb-2">
          Get In Touch
        </h2>

        <div className="w-32 h-1 mx-auto mt-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-magenta via-white/50 to-cyber-teal"></div>
          <div
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-white/80 to-transparent animate-pulse"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
      </div>

      {/* Contact content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* Social icons */}
          <div
            className="w-full md:w-1/2 reveal-on-scroll"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="text-center md:text-left mb-8">
              <CyberGlitch
                text="CONNECT WITH ME"
                className="text-xl font-bold text-white mb-3"
                glitchIntensity="low"
              />
              <p className="text-cyber-teal/70 font-mono text-sm mb-4">
                Ready to elevate your brand with innovative digital marketing or unforgettable events? Connect with me at
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {socialMedia.map((social, index) => (
                <Link
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    className="w-12 h-12 rounded-sm flex items-center justify-center bg-black/50 backdrop-blur-sm border border-cyber-teal/30 hover:border-cyber-teal/80 transition-colors relative overflow-hidden group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Cyberpunk hover effect */}
                    <div className="absolute inset-0 bg-cyber-teal/0 group-hover:bg-cyber-teal/10 transition-colors"></div>
                    <div className="absolute w-full h-[1px] -top-1 left-0 bg-cyber-teal/50 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all"></div>
                    <div className="absolute w-[1px] h-full -left-1 top-0 bg-cyber-teal/50 opacity-0 group-hover:opacity-100 group-hover:left-0 transition-all"></div>

                    <Image
                      src={social.Image}
                      alt="Social Media"
                      width={24}
                      height={24}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div
            className="w-full md:w-1/2 reveal-on-scroll"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-black/40 backdrop-blur-md border border-cyber-teal/20 rounded-sm p-6 relative overflow-hidden">
              {/* Decorative corner highlights */}
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 h-[1px] w-32 bg-gradient-to-l from-cyber-magenta/50 to-transparent transform"></div>
                <div className="absolute top-0 right-0 w-[1px] h-32 bg-gradient-to-b from-cyber-magenta/50 to-transparent transform"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 h-[1px] w-32 bg-gradient-to-r from-cyber-teal/50 to-transparent transform"></div>
                <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-gradient-to-t from-cyber-teal/50 to-transparent transform"></div>
              </div>

              {/* Digital circuit board pattern */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%2300FFFF' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: "80px 80px",
                }}
              ></div>

              <CyberGlitch
                text="MESSAGE_ME"
                className="text-xl font-bold text-white mb-4"
                glitchIntensity="low"
              />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-cyber-teal/70 mb-1 ml-1"
                  >
                    EMAIL@ADDRESS
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-cyber-teal/30 focus:border-cyber-teal/80 rounded-sm px-3 py-2 text-white/90 focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyber-teal/50 via-cyber-teal/10 to-transparent transform scale-x-0 group-focus-within:scale-x-100 transition-transform"></div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-cyber-teal/70 mb-1 ml-1"
                  >
                    MESSAGE
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-cyber-teal/30 focus:border-cyber-teal/80 rounded-sm px-3 py-2 text-white/90 focus:outline-none resize-none"
                      placeholder="// Write your message here..."
                      required
                    ></textarea>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyber-teal/50 via-cyber-teal/10 to-transparent"></div>
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="text-green-400 text-sm font-mono bg-green-900/20 border border-green-500/30 rounded-sm p-2">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="text-red-400 text-sm font-mono bg-red-900/20 border border-red-500/30 rounded-sm p-2">
                    ✗ Failed to send message. Please try again or contact me directly.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-cyber-teal/10 border border-cyber-teal/50 hover:border-cyber-teal/80 rounded-sm text-white font-mono transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyber-teal/20 to-transparent transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative z-10">
                    {isSubmitting ? "SENDING..." : "SEND_MESSAGE"}
                  </span>
                </motion.button>

                {/* Alternative contact method */}
                <div className="text-center">
                  <p className="text-cyber-teal/60 text-xs font-mono">
                    Or contact me directly at:{" "}
                    <a 
                      href="mailto:marwenrabai6@gmail.com" 
                      className="text-cyber-teal hover:text-cyber-teal/80 transition-colors"
                    >
                      marwenrabai6@gmail.com
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
