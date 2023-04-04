  import React, { useState } from 'react'
  
  const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
      // Perform some other action when the icon is clicked
    };



    return (
 
      <>
     
       
      <nav className="flex items-center justify-between px-4 py-3 bg-[#f5fbff]">
        
      <div className='flex items-center justify-start cursor-pointer'>
      <img class='pl-10 'src="/images/Vector.png" alt="logo" /> 
      <span class="ml-2 text-sm hover:text-red-400">acanthis</span>
      </div>
     
      <div className='md:hidden lg:hidden xl:hidden'>
  <button
    type="button"
    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
    onClick={handleClick}
  >
    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
      />
    </svg>
  </button>
  {isOpen && (
    <div className="absolute top-0 left-0 w-full bg-white z-10">
      <ul className="flex flex-col items-center justify-center space-y-4 px-10 text-black font-thin py-7">
        <li className="hover:text-red-400">
          <a href="/NavbarItems/Features">Features</a>
        </li>
        <li className="hover:text-red-400">
          <a href="/NavbarItems/Pricing">Pricing</a>
        </li>
        <li className="hover:text-red-400">
          <a href="/NavbarItems/About">About</a>
        </li>
        <li className="hover:text-red-400">
          <a href="/NavbarItems/Partners">Partners</a>
        </li>
      </ul>
      <button
        type="button"
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        onClick={handleClick}
      >
        Close
      </button>
    </div>
  )}
</div>

    

 

 

       
      <div className="hidden md:flex items-center justify-center flex-1">
            <ul className='flex items-center justify-center space-x-8 px-10 text-black font-thin  py-7 '>
            
            <li className='hover:text-red-400'> <a href="/NavbarItems/Features">Features</a></li>
            <li className='hover:text-red-400'> <a href="/NavbarItems/Pricing">Pricing</a></li>
            <li className='hover:text-red-400'> <a href="/NavbarItems/About">About</a></li>
            <li className='hover:text-red-400'> <a href="/NavbarItems/Partners">Partners</a></li>

          </ul> 
          </div>

          <div className="hidden md:flex items-center justify-end">
          <button class="bg-transparent hover:bg-[#FD4C00] text-[#FD4C00] font-thin hover:text-white py-2 px-4 border border-[#FD4C00] hover:border-transparent rounded mx-4">Login</button>
          <button class="bg-[#FD4C00] hover:bg-[#ac2020e0] text-white font-thin  py-2 px-4 border border-[#FD4C00] hover:border-transparent rounded">Get Started</button>

          </div>
        </nav>  
        
        
        </>
    )
  }

  export default Navbar