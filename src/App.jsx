import React from "react";
import logo from "../src/assets/albion_mapper_icon.svg";
import AvailableZones from "./components/AvailableZones";

const AlbionMapper = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      {/* Header */}
      <header className="border-b-2 h-auto md:h-24 flex items-center px-6">
        <div className="flex items-center gap-4">
          <img
            className="w-10 md:w-12"
            src={logo}
            alt="Albion Mapper"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-mono">
              AvaIntel
            </h1>
            <p className="text-sm md:text-base font-mono text-gray-300">
              Your Avalonian Roads Intel
            </p>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex flex-col md:flex-row h-[calc(100vh-6rem)]">
        {/* Left Sidebar */}
        <aside className="w-full md:w-[30rem] border-r-0 md:border-r-2 border-gray-700">
          <AvailableZones />
        </aside>

        {/* Right Map Area */}
        <section className="flex-1 hidden md:block">
          {/* Map renders inside AvailableZones */}
        </section>
      </main>
    </div>
  );
};

export default AlbionMapper;
