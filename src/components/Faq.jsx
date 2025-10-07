import { useState } from "react";

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on most items. Please ensure that the items are in their original condition and packaging. For more details, visit our Return Policy page.",
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer:
        "Shipping times vary based on your location and the shipping method selected at checkout. Standard shipping typically takes 5-7 business days, while expedited options are available for faster delivery.",
    },
    {
      id: 3,
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to many countries worldwide. Shipping fees and delivery times may vary based on the destination. Please check our Shipping Information page for more details.",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive a confirmation email with a tracking number and a link to track your package online.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards (Visa, MasterCard, American Express), PayPal, and other secure payment options available at checkout.",
    },
    {
      id: 6,
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via the Contact Us page on our website. We are available to assist you with any questions or concerns you may have.",
    },
  ];

  return (
    <div className="py-8 px-20 text-[var(--text-color)]">
      <h1 className="text-4xl font-bold mb-6">
        Frequently Asked Questions (FAQ)
      </h1>
      {faqs.map((faq) => (
        <div key={faq.id} className="mb-4 border-b border-gray-300 pb-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold">{faq.id}. {faq.question}</h2>
            <button
              className={`text-3xl select-none font-bold ${
               openId === faq.id ? "hover:text-red-500":"hover:text-green-500"
              } `}
              onClick={() => toggle(faq.id)}
            >
              {openId === faq.id ? "−" : "+"}
            </button>
          </div>
          {openId === faq.id && (
            <p className="text-[var(--text-muted)] text-lg transition-all duration-300 py-4">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
