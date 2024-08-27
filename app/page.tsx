"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Comparison from "@/components/Comparison";

const Home = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        <Comparison />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
