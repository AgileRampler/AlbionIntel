import React from 'react'
import logo from '../assets/albion_mapper_icon.svg'
import AvailableZones from './AvailableZones.jsx'

const AlbionMapper = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Header */}
      <div className="relative flex items-center border-b-2 h-24 px-6">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12"
        />

        <div className="ml-4">
          <h1 className="text-white text-2xl font-mono">
            AvaIntel
          </h1>
          <p className="text-white text-sm font-mono">
            Your Avalonian Roads Intel
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-6rem)]">
        
        {/* Left Sidebar */}
        <div className="
          w-full 
          md:w-96 
          border-r-2 
          border-white 
          overflow-hidden
         
        ">
          <AvailableZones />
        </div>

      

      </div>
    </div>
  )
}

export default AlbionMapper
