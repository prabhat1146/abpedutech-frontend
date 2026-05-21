// src/layout/Footer.jsx

import React from "react";
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
  return (
    <footer className="bg-gray-950 text-white pt-14 pb-6 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            ABP EduTech
          </h2>

          <p className="text-gray-400 leading-7">
            Your complete learning platform for Notes, PDFs, Video Tutorials,
            Exams, Question Banks, and Study Materials for all subjects.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-pink-600 hover:scale-110 transition p-3 rounded-full"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:scale-110 transition p-3 rounded-full"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:scale-110 transition p-3 rounded-full"
            >
              <FaYoutube size={18} />
            </a>

            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className="bg-sky-500 hover:scale-110 transition p-3 rounded-full"
            >
              <FaTelegramPlane size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-700 hover:scale-110 transition p-3 rounded-full"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-blue-400">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-white cursor-pointer transition">
              About Us
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Courses
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Notes & PDFs
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-blue-400">
            Our Services
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <BookOpen size={18} />
              Study Notes
            </li>

            <li className="flex items-center gap-3">
              <Video size={18} />
              Video Tutorials
            </li>

            <li className="flex items-center gap-3">
              <FileText size={18} />
              Question Banks
            </li>

            <li className="flex items-center gap-3">
              <GraduationCap size={18} />
              Online Exams
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-blue-400">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-1" />
              <p>Mithapur, Bihar, India</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} />
              <p>+91 9876543210</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} />
              <p>support@abpedutech.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} ABP EduTech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;