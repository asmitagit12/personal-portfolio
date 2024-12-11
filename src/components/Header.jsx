import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 250;

const Pages = [
  {
    id: 'home',
    name: 'Home',
    path: '/',
    submenu: []
  },
  {
    id: 'aboutus',
    name: 'About Me',
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

  useEffect(() => {
    setOpen(false); // Close drawer on route change
  }, [location.pathname]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Top Header */}
      <div className="fixed w-full bg-[#141414] z-30 h-14 flex items-center justify-between px-4 shadow-md">
        <div className='flex items-center space-x-2'>
          <h1 className="text-orange-500 font-extrabold text-2xl">|</h1>
          <h1 className="text-white font-bold text-xl">Asmita Patil</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-white focus:outline-none">
            {open ? <FontAwesomeIcon icon={faTimes} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {Pages.map((page) => (
            <Link
              key={page.id}
              to={page.path}
              className={`text-sm font-medium ${location.pathname === page.path ? 'text-white' : 'text-gray-400'} hover:text-orange-500 transition-colors`}
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleDrawer}></div>

          {/* Drawer */}
          <div
            className="fixed top-0 left-0 h-full w-[250px] bg-[#1f1f1f] text-white shadow-lg flex flex-col"
            style={{ transform: open ? 'translateX(0)' : `translateX(-${drawerWidth}px)` }}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={toggleDrawer} className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>

            <div className="flex flex-col py-4 flex-grow">
              {Pages.map((page) => (
                <Link
                  key={page.id}
                  to={page.path}
                  onClick={toggleDrawer}
                  className={`px-4 py-2 text-sm font-medium ${location.pathname === page.path ? 'text-orange-500' : 'text-gray-400'} hover:bg-gray-700 hover:text-white transition-colors`}
                >
                  {page.name}
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-auto px-4 py-6 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Contact Me</h3>
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>asmitapatil9904@gmail.com</span>
              </div>
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span>+91 9823400414</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <span>Kolhapur, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
