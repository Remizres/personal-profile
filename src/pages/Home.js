import React from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />
      <main className="px-6 py-10">
        <ProfileCard />
        <AboutSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
