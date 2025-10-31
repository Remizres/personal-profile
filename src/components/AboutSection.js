import React from "react";

function Navbar() {
  return (
    <div class="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-6">
      <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
        <img
          src="https://via.placeholder.com/250"
          alt="Profile"
          class="w-64 h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div class="max-w-md text-center md:text-left">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p class="text-gray-600 mb-6">
          Hi! I'm Rama, a passionate designer and frontend developer based in
          Jakarta. With a background in visual design and a love for coding, I
          specialize in building websites and apps that are not only stunning
          but also user-friendly.
        </p>

        <div class="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
          <span class="px-4 py-2 bg-purple-100 text-purple-600 font-medium rounded-lg text-sm flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            UI/UX Design
          </span>

          <span class="px-4 py-2 bg-purple-100 text-purple-600 font-medium rounded-lg text-sm flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Web Development
          </span>

          <span class="px-4 py-2 bg-purple-100 text-purple-600 font-medium rounded-lg text-sm flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Branding
          </span>

          <span class="px-4 py-2 bg-purple-100 text-purple-600 font-medium rounded-lg text-sm flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Motion Graphics
          </span>
        </div>

        <a
          href="#"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
          Let's Connect
        </a>
      </div>
    </div>
  );
}

export default Navbar;
