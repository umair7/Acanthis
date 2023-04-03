  import React from 'react'
  
  const Navbar = () => {
    return (
 
      <>
     
       
      <nav className="flex items-center justify-between px-4 py-3 bg-[#f5fbff]">
        
      <div className='flex items-center justify-start cursor-pointer'>
      <img class='pl-10 'src="/images/Vector.png" alt="logo" /> 
      <span class="ml-2 text-sm hover:text-red-400">acanthis</span>
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