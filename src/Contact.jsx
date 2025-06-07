import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    // Here you can add your API call to send the form data

    setStatus({ type: "success", message: "Message sent successfully!" });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full grid md:grid-cols-2 gap-8 p-8">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>
          <p className="text-gray-600">
            We’d love to hear from you! Whether you have a question, feedback or
            want to request our services, just fill out the form.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18"
                />
              </svg>
              <span>contact@coolghar.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l9-4 9 4-9 4-9-4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 14a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
                />
              </svg>
              <span>+92 3320211826</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0-1.657-3-3-3-3s-3 1.343-3 3 3 7 3 7 3-5.343 3-7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11v2"
                />
              </svg>
              <span>Near Karachi Board Office, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6"
          noValidate
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold rounded-md py-3 hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {/* Status message */}
          {status && (
            <p
              className={`text-center ${
                status.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              } font-medium`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
