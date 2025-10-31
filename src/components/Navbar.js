import React from "react";

function Navbar() {
  return (
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-lg font-bold text-gray-800">MyProfile</h1>

        <nav class="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="#about" class="hover:text-purple-600 transition">
            About
          </a>
          <a href="#skills" class="hover:text-purple-600 transition">
            Skills
          </a>
          <a href="#portfolio" class="hover:text-purple-600 transition">
            Portfolio
          </a>
          <a href="#contact" class="hover:text-purple-600 transition">
            Contact
          </a>
        </nav>

        <button class="ml-4 px-4 py-2 text-white text-sm font-medium rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
          <i class="fa-solid fa-paper-plane mr-2">Hire Me</i>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
