
import { useContext } from "react";
import Nav from "./Nav";
import { ThemeContext } from "./Theme";
import Footer from "./Footer";
import Feedback from "./feedback";
import Faq from "./Faq";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen pt-[70px] ${
        theme === "dark"
          ? "bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100"
          : "bg-[var(--background-color)] text-[var(--text-color)]"
      }`}
    >
      <Nav />
      <div
        className={`py-20 text-center rounded-b-lg ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100"
            : "bg-gradient-to-r from-pink-500 to-blue-600 text-white"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About ShopEase</h1>
        <p className="max-w-2xl mx-auto text-lg">
          ShopEase is committed to providing the best shopping experience possible.
          Our mission is to make online shopping seamless, safe, and enjoyable for everyone.
        </p>
      </div>
      <div className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className={theme === "dark" ? "text-gray-300" : "text-[var(--text-muted)]"}>
              We aim to provide a wide range of products at competitive prices while maintaining
              excellent customer service. Your satisfaction is our top priority.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mission"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div
        className={`py-16 px-4 md:px-16 ${
          theme === "dark" ? "bg-gray-900" : "bg-[var(--secondary-color)]"
        }`}
      >
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vision"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className={theme === "light" ? "text-gray-300" : "text-[var(--text-muted)]"}>
              To become the most trusted online shop where customers can find quality products
              effortlessly. We strive for innovation, convenience, and transparency in everything we do.
            </p>
          </div>
        </div>
      </div>
      <Faq />
        <Feedback />
        <Footer />
    </div>
  );
}
