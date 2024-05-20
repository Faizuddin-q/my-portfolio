import { useState, useEffect} from 'react';
import {  BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { LiaFileDownloadSolid } from "react-icons/lia";

import { client } from "../client";


const SocialMedia = () =>{ 
  const [aboutMe, setAboutMe] = useState({});

  useEffect(() => {
    
    const aboutMeQuery = `*[_type == "aboutme"][0]{
     "resumeUrl": resume.asset -> url 
    }`;
    
    client.fetch(aboutMeQuery).then((data) => {
      setAboutMe(data);
    });
  }, []);

  const viewResumeHandler = () => {
    window.open(aboutMe.resumeUrl, "_blank");
  };
  return(
  <div className="app__social">
    <ul className="example-2">
      <li className="icon-content">
        <a
          aria-label="Resume"
          data-social="resume"
          target='_blank'
          rel=' norefferer'
          onClick={viewResumeHandler}>
          <div className="filled"></div>
          <LiaFileDownloadSolid/>
        </a>
      <div className="tooltip">Resume</div>
      </li>
      <li className="icon-content">
        <a
          href="https://www.linkedin.com/in/faizuddin2026q"
          aria-label="Linkedin"
          data-social="linkedin"
          target='_blank'
          rel=' norefferer'>
          <div className="filled"></div>
          <BsLinkedin/>
        </a>
      <div className="tooltip">LinkedIn</div>
      </li>
      <li className="icon-content">
        <a
          href="https://github.com/Faizuddinq"
          aria-label="Github"
          data-social="github"
          target='_blank'
          rel=' norefferer'>
          <div className="filled"></div>
          <BsGithub/>
        </a>
      <div className="tooltip">Github</div>
      </li>
      <li className="icon-content">
        <a
          href="https://www.instagram.com/faizuddin_q?igsh=MXgxNGk5ZDhzbWhnNg=="
          aria-label="Instagram"
          data-social="instagram"
          target='_blank'
          rel=' norefferer'>
          <div className="filled"></div>
          <BsInstagram/>
        </a>
      <div className="tooltip">Instagram</div>
      </li>
    </ul>
  </div>
)};

export default SocialMedia;