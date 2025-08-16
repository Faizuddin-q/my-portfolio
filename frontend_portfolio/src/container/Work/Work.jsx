import { useState, useEffect, useRef } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

// const paragraphStyles = {
//   WebkitLineClamp: 2,
//   WebkitBoxOrient: 'vertical',
//   overflow: 'hidden',
//   display: '-webkit-box',
//   marginTop: 10
//   };


  

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  // const [isOpen, setIsOpen] = useState(false);
  // const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  // const ref = useRef(null);

  //   useEffect(() => {
  //     if (ref.current) {
  //         console.log(ref.current.scrollHeight, ref.current.clientHeight)
  //         setShowReadMoreButton(ref.current.scrollHeight !== ref.current.clientHeight)
  //     }}, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: -100, opacity: 0, scale: 0.5 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1, scale: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id='projects'>
      <h2 className="head-text">My <span className="text-gradient-2">Projects</span> Section</h2>

      <div className="app__work-filter">
        {['All', 'React JS', 'UI/UX', 'API', 'Vanilla JS'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
        
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} loading='lazy'/>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
                
                <div className='links-btn'>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                <AwesomeButton type="primary">
                  <AiFillEye/>
                </AwesomeButton>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                <AwesomeButton type="primary">
                   <AiFillGithub/>
                  </AwesomeButton>
                </a>
                </div>
                <p className="tech-text p-text" style={{ marginTop: 10 }}>
                  Tech Stack: <span className='bold-text'>{work.techstack}</span></p>
              <ul>
                <li>
                    <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
                </li>
                <li>
                    <p className="p-text" 
                    style={{ marginTop: 10 }} >
                        {work.description_2}
                    </p>
                </li>
                {/* <li>
                    <p className="p-text" style={{ marginTop: 10 }}>{work.description_3}</p>
                </li> */}
              </ul>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p> 
                
              </div>
              
            </div>
          </div>
          
        ))}
        
      </motion.div>
      
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);

