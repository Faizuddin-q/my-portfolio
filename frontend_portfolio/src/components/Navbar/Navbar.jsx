import { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = ({ active }) => {
  const navList = ['home', 'about', 'projects', 'skills', 'resume','contact', ];
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  

  useEffect(() => {
    // Handle scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // User is scrolling down, hide the navbar
      setShowNavbar(false);
    } else {
      // User is scrolling up, show the navbar
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      className="app__navbar__main"
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -200 }}  // Animate the navbar up and down
      transition={{ type: 'tween', duration: 0.2, }} // Smooth transition
    >
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <a href="/">
            <div
              // whileInView={{ x: [100, 0], opacity: [0.2, 1] }}
              // transition={{ duration: 0.5 }}
            >
              <span className="text-gradient">FAIZUDDIN</span>{" "}
            </div>
          </a>
        </div>
        <ul className='app__navbar-links'>
          {navList.map((item) => (
            <li key={`link-${item}`} className='app__flex p-text'>
              <div />
              <a className='section-links' href={`#${item}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {navList.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
