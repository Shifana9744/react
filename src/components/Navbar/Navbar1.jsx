import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar1 = () => {

  const [isScrolled, setIsScrolled] =useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(()=> {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1)
    }

    window.addEventListener('scroll',handleScroll)
    return ()=>window.removeEventListener('scroll',handleScroll)
  },[])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (

    <header
        className={`bg-white fixed-top ${isScrolled ? 'shadow-sm' : ''}`}
        style={{
          zIndex: 1000
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light container-fluid px-4" style={{ maxWidth: '1400px', height: '12vh' }}>
          {/* Logo */}
          <Link
            to="/"
            className="logo text-black ms-0"
            style={{
              textDecoration: 'none',
              fontWeight: 'bolder',
              fontSize: '30px',
            }}
          >
            Gr<span style={{ color: 'orange', fontSize: '38px' }}>o</span>cify
          </Link>

          {/* Nav Actions (Search, Heart, Cart, Hamburger) */}
          <div className="d-flex align-items-center order-lg-2 ms-auto">
            {/* Search Input */}
            <div
              className="d-none d-lg-flex align-items-center rounded-pill border border-2 me-3"
              style={{ borderColor: 'rgb(210, 138, 31)' }}
            >
              <input
                type="text"
                placeholder="Search..."
                className="border-0"
                style={{
                  backgroundColor: 'transparent',
                  outline: 'none',
                  fontSize: '16px',
                  padding: '10px 15px',
                }}
              />
              <button
                className="btn rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: 'rgb(210, 138, 31)',
                  color: 'white',
                  width: '35px',
                  height: '35px',
                  margin: '4px',
                }}
              >
                <SearchIcon />
              </button>
            </div>

            <Link to= '/wish-list' className="text-decoration-none me-3" style={{ color: 'rgb(65, 65, 65)' }}>
              <FavoriteIcon />
            </Link>
            <Link to= '/cart-section' className="text-decoration-none me-3" style={{ color: 'rgb(65, 65, 65)' }}>
              <LocalMallIcon />
            </Link>

            {/* Hamburger Toggle Button */}
            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              style={{ color: 'rgb(65, 65, 65)', fontSize: '30px', padding: 0 }}
            >
              <MenuIcon />
            </button>
          </div>

          {/* Nav Links */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul
              className="navbar-nav mx-auto mb-2 mb-lg-0 text-center justify-content-center"
              style={{
                gap: '30px',
                fontSize: '20px',
                backgroundColor: isMenuOpen ? 'orange' : 'transparent', // Opaque white when open
                width: isMenuOpen ? '100%' : 'auto',
                position: isMenuOpen ? 'absolute' : 'static',
                top: isMenuOpen ? '12vh' : 'auto',
                // left:'0',
                right: isMenuOpen? '0': '',
                zIndex: 999, // Ensure menu is below navbar but above content
                padding: isMenuOpen ? '20px 100px' : 0,
                margin: isMenuOpen? 'auto 0':'',
                boxShadow: isMenuOpen ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
                opacity: '0.9',
                color: isMenuOpen? 'black':'',
              }}
            >
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link"
                  style={{
                    color: 'rgb(210, 138, 31)',
                    fontWeight: 600,
                    letterSpacing: '1px',
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#category-section"
                  className="nav-link"
                  style={{
                    color: 'rgb(65, 65, 65)',
                    fontWeight: 600,
                    letterSpacing: '1px',
                  }}
                  onMouseOver={(e) => (e.target.style.color = 'rgb(210, 138, 31)')}
                  onMouseOut={(e) => (e.target.style.color = 'rgb(65, 65, 65)')}
                >
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#process-section"
                  className="nav-link"
                  style={{
                    color: 'rgb(65, 65, 65)',
                    fontWeight: 600,
                    letterSpacing: '1px',
                  }}
                  onMouseOver={(e) => (e.target.style.color = 'rgb(210, 138, 31)')}
                  onMouseOut={(e) => (e.target.style.color = 'rgb(65, 65, 65)')}
                >
                  Process
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact-section"
                  className="nav-link"
                  style={{
                    color: 'rgb(65, 65, 65)',
                    fontWeight: 600,
                    letterSpacing: '1px',
                  }}
                  onMouseOver={(e) => (e.target.style.color = 'rgb(210, 138, 31)')}
                  onMouseOut={(e) => (e.target.style.color = 'rgb(65, 65, 65)')}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

  )
}

export default Navbar1
