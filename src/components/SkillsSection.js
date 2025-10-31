import React from "react";

function SkillSection() {
  return (
    <section class="py-20 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">My Skills</h2>
      </div>

      <div class="flex flex-wrap justify-center gap-6 px-6">
        <div class="w-64 bg-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div class="text-4xl mb-4 text-pink-500">🎨</div>
          <h3 class="font-semibold text-gray-800">UI/UX Design</h3>
          <p class="text-gray-500 text-sm mt-2">Figma, Adobe XD, Sketch</p>
        </div>

        <div class="w-64 bg-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div class="text-4xl mb-4 text-indigo-500">💻</div>
          <h3 class="font-semibold text-gray-800">Frontend Dev</h3>
          <p class="text-gray-500 text-sm mt-2">React, Vue, Tailwind</p>
        </div>

        <div class="w-64 bg-yellow-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div class="text-4xl mb-4 text-yellow-600">✏️</div>
          <h3 class="font-semibold text-gray-800">Branding</h3>
          <p class="text-gray-600 text-sm mt-2">Logo, Identity, Print</p>
        </div>

        <div class="w-64 bg-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <div class="text-4xl mb-4 text-blue-500">⚡</div>
          <h3 class="font-semibold text-gray-800">Motion Graphic</h3>
          <p class="text-gray-500 text-sm mt-2">After Effects, Lottie</p>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
