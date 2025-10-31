import {
  Mail,
  Phone,
  Instagram,
  Github,
  Dribbble,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-purple-50 py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-8">
          Interested working together? Let's talk about your project and make
          something amazing!
        </p>

        <div className="flex items-center gap-3 mb-3">
          <Mail className="text-purple-600 w-5 h-5" />
          <a
            href="mailto:hello@email.com"
            className="text-purple-700 font-medium"
          >
            hello@email.com
          </a>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <Phone className="text-purple-600 w-5 h-5" />
          <a href="tel:+6281234567890" className="text-purple-700 font-medium">
            +62 812-3456-7890
          </a>
        </div>

        <div className="flex gap-4 text-purple-600">
          <a href="#" className="hover:text-pink-500 transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-gray-800 transition">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-purple-500 transition">
            <Dribbble size={20} />
          </a>
          <a href="#" className="hover:text-sky-600 transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <form className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="you@email.com"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            placeholder="Type your message..."
            rows="4"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
