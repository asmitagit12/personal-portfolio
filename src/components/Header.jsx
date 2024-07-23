import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const drawerWidth = 190

const Pages = [
  {
    id: 'home',
    name: 'Home',
    path: '/',
    submenu: []
  },
  {
    id: 'aboutus',
    name: 'About us',
    path: '/aboutUs',
    submenu: []
  },
  {
    id: 'services',
    name: 'Services',
    path: '/services',
    submenu: [
      {
        name: 'Web Development',
        path: ''
      },
      {
        name: 'Web Application Development',
        path: 'web-app-dev'
      },
      {
        name: 'ERP Solutions',
        path: 'erp-solution'
      },
      {
        name: 'E-Commerce Solutions',
        path: 'e-commerce'
      },
      {
        name: 'Algo Trading Solutions',
        path: 'algo-trade'
      },
      {
        name: 'Mobile App Development',
        path: 'mobile-app'
      }
    ]
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    path: '/portfolio',
    submenu: []
  },
  {
    id: 'technologies',
    name: 'Technologies',
    path: '/technologies',
    submenu: []
  },
  {
    id: 'contactUs',
    name: 'Contact us',
    path: '/contactus',
    submenu: []
  }
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [highlightedItem, setHighlightedItem] = useState(null)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState(Pages.map(() => false))

  const handleExpandClick = () => {
    setExpanded(prev => !prev)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            setHighlightedItem(id)
          }
        })
      },
      { rootMargin: '-100px 0px -50% 0px' }
    )

    Pages.forEach(page => {
      const section = document.getElementById(page.id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleDrawerClose = () => {
    setOpen(prev => !prev)
  }

  const handleSubMenuOpen = event => {
    setAnchorEl(event.currentTarget)
    setIsSubMenuOpen(true)
  }

  const handleSubMenuClose = () => {
    setIsSubMenuOpen(false)
  }

  const handleToggleSubmenu = index => {
    const newSubmeuOpen = subMenuOpen.map((isOpen, i) => {
      if (i === index) {
        return !isOpen
      }
      return false
    })
    setSubMenuOpen(newSubmeuOpen)
  }

  useEffect(() => {
    setIsSubMenuOpen(false)
    setAnchorEl(null)
  }, [location.pathname])

  return (
    <>
      <div className="fixed w-full bg-[#141414] z-20 h-14 flex items-center justify-between px-4">
        <h1 className="text-white font-bold text-2xl">AP</h1>
        <div className="md:hidden">
          <button onClick={handleDrawerClose} className="text-white">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          {Pages.map((data, index) => (
            <div key={index} className="relative group">
              <Link
                to={data.path}
                className={`text-lg font-medium ${
                  highlightedItem === data.id ? 'text-white' : 'text-gray-400'
                }`}
                onMouseEnter={data.id === 'services' ? handleSubMenuOpen : null}
              >
                {data.name}
              </Link>
              {/* {data.submenu.length > 0 && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg hidden group-hover:block">
                  {data.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={`${data.path}/${subItem.path}`}
                      className="block px-4 py-2 text-white-700 hover:bg-gray-200"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 z-30 bg-gray-800 bg-opacity-75">
          <div
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg"
            style={{ width: drawerWidth }}
          >
            <div className="flex items-center justify-between px-4 py-2">
              <h2 className="text-lg font-bold text-navy">Suyotech</h2>
              <button onClick={handleDrawerClose}>Close</button>
            </div>
            <div className="flex flex-col">
              {Pages.map((data, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleToggleSubmenu(index)}
                    className="flex justify-between w-full px-4 py-2 text-left"
                  >
                    <Link to={data.path} onClick={handleDrawerClose}>
                      {data.name}
                    </Link>
                    {data.submenu.length > 0 && (
                      <span>{subMenuOpen[index] ? '-' : '+'}</span>
                    )}
                  </button>
                  {subMenuOpen[index] && (
                    <div className="pl-4">
                      {data.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={`${data.path}/${subItem.path}`}
                          className="block px-4 py-2 text-gray-700"
                          onClick={handleDrawerClose}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
