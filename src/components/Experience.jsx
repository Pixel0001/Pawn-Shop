import { useContext, useState } from "react";
import { ExperienceContext } from "./ExperienceContext";
import CloseIcon from "@mui/icons-material/Close";
import { createPortal } from "react-dom";

export default function Experience() {
  const { setExperience, experience } = useContext(ExperienceContext);
  const mountNode = document.getElementById("portal2");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    rating: 5,
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback:", form);
    setSent(true);
    setForm({ name: "", email: "", subject: "", rating: 5, message: "" });
  };

  // Dacă modalul e închis SAU nu există containerul pentru portal -> nu randa nimic
  if (!experience || !mountNode) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-title"
    >
      <div className="p-4 md:w-[70%] w-[90%] sm:h-auto h-[80%] bg-[var(--primary-color)] overflow-y-scroll md:overflow-visible rounded-lg shadow-lg">
        <div className="flex justify-end !top-0 sticky md:static">
          <CloseIcon
            className="md:translate-x-[50px] md:translate-y-[-50px] !cursor-pointer !text-red-500 static md:absolute md:!text-red-500 !text-3xl hover:!text-red-900"
            onClick={() => setExperience(false)}
            aria-label="Close"
          />
        </div>

        <div className="flex flex-col gap-2 text-[var(--text-color)]">
          <h1 id="feedback-title" className="font-bold text-lg text-[var(--text-color)] mb-2 !text-3xl">
            Feedback
          </h1>
          <p className="text-[var(--text-muted)]">
            Spune-ne cum ți s-a părut experiența. Ne ajuți să îmbunătățim produsul.
          </p>
        </div>

        {sent && (
          <div className="mt-4 mb-2 rounded-md border border-green-500 bg-green-500/10 px-3 py-2 text-green-600">
            Mulțumim! Feedback-ul tău a fost trimis.
          </div>
        )}

        <form onSubmit={handleSubmit} className="text-[var(--text-color)]">
          <div className="flex flex-col gap-4 mt-4">
            <input
              required
              name="name"
              value={form.name}
              onChange={onChange}
              className="p-2 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Nume complet"
            />
            <input
              required
              name="email"
              value={form.email}
              onChange={onChange}
              className="p-2 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="email"
              placeholder="Email"
            />
            <input
              name="subject"
              value={form.subject}
              onChange={onChange}
              className="p-2 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Subiect (opțional)"
            />

            <div>
              <h2 className="font-semibold">Rating</h2>
              <div className="flex items-center gap-4 mt-2">
                {[1, 2, 3, 4, 5].map((r) => (
                  <label key={r} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={r}
                      checked={Number(form.rating) === r}
                      onChange={onChange}
                      className="cursor-pointer appearance-none w-5 h-5 border border-gray-400 rounded-full checked:bg-blue-500 checked:border-blue-500"
                    />
                    <span className="text-sm">{r}</span>
                  </label>
                ))}
              </div>
            </div>

            <textarea
              required
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              className="p-2 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Mesajul tău"
            />

            <button
              type="submit"
              className="py-[0.5em] border bg-[var(--button-bg)] text-[var(--button-text)] cursor-pointer text-2xl hover:bg-[var(--button-hover)] active:bg-[var(--button-active)]"
            >
              Trimite feedback
            </button>
          </div>
        </form>
      </div>
    </div>,
    mountNode
  );
}
