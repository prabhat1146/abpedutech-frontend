
import React from "react";
import { Link } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Video,
  FileText,
  GraduationCap,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    // { name: "Courses", path: "/courses" },
    // { name: "Notes & PDFs", path: "/notes" },
    { name: "Contact", path: "/contact-us" },
  ];

  const services = [
    {
      name: "Study Notes",
      icon: BookOpen,
      path: "/notes",
    },
    // {
    //   name: "Video Tutorials",
    //   icon: Video,
    //   path: "/videos",
    // },
    {
      name: "Question Banks",
      icon: FileText,
      path: "/question-banks",
    },
    {
      name: "Online Exams",
      icon: GraduationCap,
      path: "/exams",
    },
  ];

  const socialLinks = [
    // {
    //   name: "Instagram",
    //   url: "https://instagram.com",
    //   icon: FaInstagram,
    //   color: "bg-pink-600",
    // },
    {
      name: "Facebook",
      url: "https://www.facebook.com/abpedutech",
      icon: FaFacebookF,
      color: "bg-blue-600",
    },
    // {
    //   name: "YouTube",
    //   url: "https://youtube.com",
    //   icon: FaYoutube,
    //   color: "bg-red-600",
    // },
    // {
    //   name: "Telegram",
    //   url: "https://telegram.org",
    //   icon: FaTelegramPlane,
    //   color: "bg-sky-500",
    // },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/107646199/admin/dashboard/",
      icon: FaLinkedinIn,
      color: "bg-blue-700",
    },
  ];

  return (
    <footer className="bg-gray-950 px-6 pt-14 pb-6 text-white md:px-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo & About */}
        <div>
          <Link
            to="/"
            className="mb-4 inline-block text-3xl font-bold text-blue-400"
          >
            ABPEduTech
          </Link>

          <p className="leading-7 text-gray-400">
            Your complete learning platform for notes, PDFs, video tutorials,
            exams, question banks, and study materials for all subjects.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`${social.color} rounded-full p-3 transition duration-300 hover:scale-110`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-blue-400">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-blue-400">
            Our Services
          </h3>

          <ul className="space-y-4 text-gray-400">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center gap-3 transition-colors duration-200 hover:text-white"
                  >
                    <Icon size={18} />
                    <span>{service.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-blue-400">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 shrink-0" />
              <p>Saharsa, Bihar, India</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="shrink-0" />
              <a
                href="tel:+917991156062"
                className="transition-colors hover:text-white"
              >
                +91 7991156062
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} className="shrink-0" />
              <a
                href="mailto:support@abpedutech.in"
                className="break-all transition-colors hover:text-white"
              >
                support@abpedutech.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ABP EduTech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
