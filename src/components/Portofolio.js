import React from "react";

function Portfolio() {
  return (
    <section class="py-20 bg-gray-50">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">Portfolio</h2>
      </div>

      <div class="flex flex-wrap justify-center gap-8 px-6">
        <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition w-80 overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250?text=Dashboard+Web+App"
            alt="Dashboard Web App"
            class="w-full h-48 object-cover"
          />
          <div class="p-5">
            <h3 class="font-semibold text-gray-800">Dashboard Web App</h3>
            <p class="text-gray-500 text-sm mt-2">UI/UX, Frontend</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition w-80 overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250?text=Mobile+App+Landing"
            alt="Mobile App Landing"
            class="w-full h-48 object-cover"
          />
          <div class="p-5">
            <h3 class="font-semibold text-gray-800">Mobile App Landing</h3>
            <p class="text-gray-500 text-sm mt-2">Design, Branding</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition w-80 overflow-hidden">
          <img
            src="https://via.placeholder.com/400x250?text=Motion+Graphic"
            alt="Motion Graphic"
            class="w-full h-48 object-cover"
          />
          <div class="p-5">
            <h3 class="font-semibold text-gray-800">Motion Graphic</h3>
            <p class="text-gray-500 text-sm mt-2">Animation, Branding</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
