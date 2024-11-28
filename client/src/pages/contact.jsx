import Navbar from "@/components/navbar";
import React ,{useState} from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [status, setStatus] = useState("");
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");
    
        emailjs
          .send(
            "service_oa6ftag", // Replace with your EmailJS service ID
            "template_p5toue8", // Replace with your EmailJS template ID
            formData,
            "3lU1ACAq_SsJP3tLZ" // Replace with your EmailJS user ID
          )
          .then(
            () => {
              setStatus("Message sent successfully!");
              setFormData({ name: "", email: "", message: "" }); // Clear form
            },
            () => {
              setStatus("Failed to send message. Please try again.");
            }
          );
      };
  return (
    <>
    <Navbar />
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      {/* Header Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions? We're here to help! Reach out to us via the form below or contact us directly.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
              >
                Send Message
              </button>
            </form>
            <p className="mt-4 text-center">{status}</p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white">Address</h3>
                  <p>1234 Street Name, City, State</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p>info@example.com</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                    aria-label="Facebook"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                    aria-label="Twitter"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
    </>
  );
}
