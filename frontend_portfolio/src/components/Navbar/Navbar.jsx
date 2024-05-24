import  { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'

const Navbar = ({active}) => {

  const navList=['home', 'about', 'projects', 'skills' , 'contact'];
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="app__navbar__main">
    <nav className=' app__navbar'>
      <div className=' app__navbar-logo'>
         <a href="/"
          
         >
          <motion.div
          whileInView={{ x: [100, 0], opacity: [0.2, 1] }}
          transition={{ duration: 0.5 }}>
         <span className="text-gradient">FAIZUDDIN</span>{" "}
          </motion.div>
         </a>
      </div>
        <ul className=' app__navbar-links'>
        {navList.map((item)=>(
          <li key={`link-${item}`}
          className=' app__flex p-text'
          
          >
            <div/>
            <a className='section-links' href={`#${item}`}
            
            >{item}</a>
          </li>
        ))}
        </ul>
        <div className='app__navbar-menu'>
          <HiMenuAlt4
          onClick={()=>setToggle(true)}
          />
          {toggle && (
              <motion.div
              // whileInView={{ x:[-300, 0]}}
              // transition={{duration: 0.85, ease:'easeOut' }}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <HiX onClick={()=>setToggle(false)}/>
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
    </div>
  )
}

export default Navbar