import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 190;

const Pages = [
  {
    id: 'home',
    name: 'Home',
    path: '/',
    submenu: []
  },
  {
    id: 'aboutus',
    name: 'About',
    path: '/about',
    submenu: []
  },
  {
    id: 'projects',
    name: 'Projects',
    path: '/projects',
    submenu: []
  },
  {
    id: 'experience',
    name: 'Experience',
    path: '/experience',
    submenu: []
  },
  {
    id: 'contact',
    name: 'Contact Me',
    path: '/contact',
    submenu: []
  }
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(Pages.map(() => false));

  const handleExpandClick = () => {
    setExpanded(prev => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            setHighlightedItem(id);
          }
        });
      },
      { rootMargin: '-100px 0px -50% 0px' }
    );

    Pages.forEach(page => {
      const section = document.getElementById(page.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleDrawerClose = () => {
    setOpen(prev => !prev);
  };

  const handleSubMenuOpen = event => {
    setAnchorEl(event.currentTarget);
    setIsSubMenuOpen(true);
  };

  const handleSubMenuClose = () => {
    setIsSubMenuOpen(false);
  };

  const handleToggleSubmenu = index => {
    const newSubmeuOpen = subMenuOpen.map((isOpen, i) => {
      if (i === index) {
        return !isOpen;
      }
      return false;
    });
    setSubMenuOpen(newSubmeuOpen);
  };

  useEffect(() => {
    setIsSubMenuOpen(false);
    setAnchorEl(null);
  }, [location.pathname]);

  return (
    <>
      <div className="fixed w-full bg-[#141414] z-30 h-14 flex items-center justify-between px-4">
        <div className='flex space-x-2'>
          <h1 className="text-orange-500 font-extrabold text-2xl">|</h1>
          <h1 className="text-white font-bold text-xl">Asmita Patil</h1>

        </div>
        <div className="md:hidden">
          <button onClick={handleDrawerClose} className="text-white">
            {open ? <FontAwesomeIcon icon={faTimes} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          {Pages.map((data, index) => (
            <div key={index} className="relative group space-x-4">
              <Link
                to={data.path}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  color: location.pathname === data.path ? 'white' : '#9CA3AF', // Adjust active/inactive colors
                  textDecoration: 'none', fontSize: 16, marginRight: 20
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  const underline = target.querySelector('.underline');
                  if (location.pathname !== data.path) {
                    underline.style.width = '100%';
                  }
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  const underline = target.querySelector('.underline');
                  if (location.pathname !== data.path) {
                    underline.style.width = '0';
                  }
                }}
              >
                {data.name}
                <span
                  className="underline"
                  style={{
                    content: "''",
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    // width: 0,
                    marginTop: 1,
                    width: location.pathname === data.path ? '100%' : '0', // Keep underline for active link
                    height: '3px', // Thickness of the underline
                    backgroundColor: 'orange', // Color of the underline
                    transition: 'width 0.3s ease-in-out', // Animation
                  }}
                ></span>
              </Link>

            </div>
          ))}
        </div>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 z-30 bg-gray-800 bg-opacity-75">
          <div
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg"
            style={{ width: drawerWidth }}
          >
            <div className="flex items-center justify-between px-4 py-2">
              <h2 className="text-lg font-bold text-navy">Asmita Patil</h2>
              <button onClick={handleDrawerClose}>
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>
            <div className="flex flex-col">
              {Pages.map((data, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleToggleSubmenu(index)}
                    className="flex justify-between w-full px-4 py-2 text-left"
                  >
                    <Link to={data.path} onClick={handleDrawerClose}>
                      <span className={`text-md font-medium ${location.pathname === data.path ? 'text-black' : 'text-gray-400'
                        }`}>
                        {data.name}
                      </span>
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
  );
};

export default Header;
