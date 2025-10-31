import React from "react";
import profile from "../assets/images/profile.jpg";

function ProfileCard() {
  return (
    <section class="flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl shadow-sm">
      <div class="max-w-xl space-y-6">
        <p class="text-sm font-semibold text-purple-600">Hello, I'm</p>

        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Creative Designer & Frontend Developer
          <br />
        </h1>

        <p class="text-gray-600">
          Passionate in creating beautiful and functional digital experiences. I
          love blending creativity with technology to make impactful solutions
          for users and brands.
        </p>

        <div class="flex gap-4 pt-4">
          <button class="px-6 py-3 rounded-lg text-white font-medium shadow-md bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
            See My Work
          </button>
          <button class="px-6 py-3 rounded-lg border border-purple-500 text-purple-600 font-medium hover:bg-purple-50 transition">
            Contact Me
          </button>
        </div>

        <div class="flex items-center gap-4 pt-4 text-2xl text-gray-700">
          <a href="#" class="hover:text-pink-500">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" class="hover:text-gray-900">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#" class="hover:text-purple-500">
            <i class="fa-brands fa-dribbble"></i>
          </a>
          <a href="#" class="hover:text-blue-600">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div class="relative mt-10 md:mt-0">
        <div class="absolute -top-6 -left-6 w-44 h-44 bg-gradient-to-r from-pink-200 to-purple-300 rounded-full blur-xl opacity-60"></div>

        <div class="relative z-10 w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <img src="" alt="Profile" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
