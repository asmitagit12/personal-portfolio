import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div className="h-14">
          <Header />
        </div>
        <main className="flex-grow w-full">
          <Outlet />
        </main>
        <div>
          <Footer />
        </div>
        {/* Scroll-to-top button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full p-2 shadow-xl hover:scale-110 transition-transform duration-300"
            title="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )}

      </div>
    </>
  );
};

export default Layout;
