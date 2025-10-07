import Nav from "./Nav";
import { useContext } from "react";
import { ThemeContext } from "./Theme";
import Footer from "./Footer";
import Feedback from "./feedback";

export default function Contact() {
    const { theme } = useContext(ThemeContext);

  return (
    <div
  className={` ${
    theme === "dark"
      ? "bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100"
      : "bg-[var(--background-color)] text-[var(--text-color)]"
  }`}
>
  <Nav />
  <div
    className={`py-20 text-center rounded-b-lg pt-[100px] ${
      theme === "dark"
        ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100"
        : "bg-gradient-to-r from-pink-500 to-blue-600 text-white"
    }`}
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
    <p className="max-w-2xl mx-auto text-lg">
      We’d love to hear from you! Whether you have questions, feedback, or need support,
      we’re here to help.
    </p>
  </div>
  <div className="py-16 px-4 md:px-16 max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-center">
  <div
    className={`p-6 border rounded-lg shadow hover:shadow-lg transition ${
      theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
    }`}
  >
    <h2 className="text-xl font-bold mb-2">Email</h2>
    <p className={theme === "dark" ? "text-gray-300" : "text-[var(--text-muted)]"}>
      support@shopease.com
    </p>
  </div>
  <div
    className={`p-6 border rounded-lg shadow hover:shadow-lg transition ${
      theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
    }`}
  >
    <h2 className="text-xl font-bold mb-2">Phone</h2>
    <p className={theme === "dark" ? "text-gray-300" : "text-[var(--text-muted)]"}>
      +1 (111) 111 111
    </p>
  </div>
  <div
    className={`p-6 border rounded-lg shadow hover:shadow-lg transition ${
      theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
    }`}
  >
    <h2 className="text-xl font-bold mb-2">Address</h2>
    <p className={theme === "dark" ? "text-gray-300" : "text-[var(--text-muted)]"}>
      123 undeva, nu stiu, Romania
    </p>
  </div>
</div>


  <div
    className={`py-16 px-4 md:px-16 max-w-2xl mx-auto p-6 border rounded-lg shadow hover:shadow-lg transition my-16 ${
      theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
    }`}
  >
    <div className="grid gap-6">
      {[
        { label: "Name", type: "text", placeholder: "Your Name" },
        { label: "Email", type: "email", placeholder: "Your Email" },
      ].map((field, i) => (
        <div key={i}>
          <label className="block mb-2 font-semibold">{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 text-gray-100"
                : "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-color)]"
            }`}
          />
        </div>
      ))}

      <div>
        <label className="block mb-2 font-semibold">Message</label>
        <textarea
          placeholder="Your Message"
          className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] ${
            theme === "dark"
              ? "bg-gray-700 border-gray-600 text-gray-100"
              : "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-color)]"
          }`}
        ></textarea>
      </div>

      <button
        type="submit"
        className={`px-6 py-3 rounded shadow cursor-pointer transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-gray-100 hover:bg-gray-700 hover:bg-gradient-to-l"
            : "bg-gradient-to-r from-pink-500 to-blue-600 text-[var(--button-text)] hover:bg-gradient-to-l hover:bg-[var(--button-hover)]"
        }`}
      >
        Send Message
      </button>
    </div>
  </div>
    <Feedback />
    <Footer />
</div>

  );
}
