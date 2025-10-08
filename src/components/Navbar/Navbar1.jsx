import React, { useEffect, useState } from 'react'
import './navbar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar1 = () => {

  const [isScrolled, setIsScrolled] =useState(false)

  useEffect(()=> {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1)
    }

    window.addEventListener('scroll',handleScroll)
    return ()=>window.removeEventListener('scroll',handleScroll)
  },[])

  return (
    <header className='bg-white z-2' style={{boxShadow:`${isScrolled?'0 2px 8px rgba(0, 0, 0, 0.1)':'none'}`}}>
      <nav className='d-flex justify-content-between align-items-center px-5 m-auto'>
        {/* logo */}
        <a href="#" className='logo text-black'>Gr<span>o</span>cify</a>

        {/* nav links */}
        <ul className='d-flex align-items-center m-auto'>
          <li>
            <a href="#" className='home'>Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Process</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        {/* nav actions */}
        <div className='d-flex justify-content-ccenter align-items-center'>
          {/* search input */}
          <div className='search-div d-flex border border-2 rounded-pill'>
            <input type="text" name="text" id="text" placeholder='Search...' className='border-0 px-3'/>
            <button className='border-0 text-white m-1 rounded-circle' style={{backgroundColor:'orange', height:'35px'}}>
              <SearchIcon/>
            </button>
          </div>

          <a href="">
            <FavoriteIcon/>
          </a>
          <a href="">
            <LocalMallIcon/>
          </a>

          {/* hamburger icon */}
          <a href="" className='hamburger-menu'>
          {/* <button className='hamburger-menu'> */}
            <MenuIcon/>
          {/* </button> */}
          </a>
        </div>
      </nav>
    </header>

  )
}

export default Navbar1