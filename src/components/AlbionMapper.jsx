import React from 'react'
import logo from '../assets/albion_mapper_icon.svg'
import light from '../assets/brightness-and-contrast.png'

import AvailableZones from './AvailableZones.jsx'
import setting  from '../assets/setting.png'
const AlbionMapper = () => {
  return (
<div>

           
        <div className=' border-b-2  border-h-24   h-24 '>
          
               <img className='ms-8 mt-6 w-12 absolute' src={logo} alt="" />
   
            <h1 className='text-white text-2xl ms-24 font-mono pt-5' >   AvaIntel  </h1>
            <p className='text-white ms-24 font-mono '>Your Avalonian Roads Intel</p>
           
            


        </div>

        {/* Main Body  */}
      <div className="flex h-[calc(100vh-6rem]" >
        {/* Left side */}
          <div className='bg w-[20rem]   min-h-screen border-r-2 border-x-white'>

                    
            
            {/* Available Zones components */}
          
              <AvailableZones/>
          </div>

          {/* Right Side Map area */}
         
      </div>
        <div>
        
       
          </div>
        
        
</div>
  )
}

export default AlbionMapper