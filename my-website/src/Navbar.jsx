import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "./css/Navbar.css";
import Typewriter from "typewriter-effect/dist/core";
import { animateScroll as scroll } from "react-scroll";
import Pdf from "./images/CV_Jose_Manuel_Martinez.pdf";

function Navbar() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "I'm a Senior Software Engineer",
        "I like coding",
        "I play chess",
        "Keep scrolling!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <nav id="navbar">
      <div className="container">
        <a  className = "Resume" onClick={onResumeClick}>
          My Resume
        </a>
      </div>

      <a href="https://www.linkedin.com/in/jmmartinezlopez/" target="_blank" className="icons">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/jmanuelmartinez" target="_blank" className="icons">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <ul className="nav-links">
        <div className="name-box">
          <li className="Name">
            J<span className="period">.</span>
          </li>   
        </div>
        <Link to="About" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        {/* <Link to="Projects" smooth={true} duration={500}>
          <li>Projects</li>
        </Link> */}
        <Link to="Contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="Introduction">
        <h1>Hey, I'm Jose Manuel</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
        Senior Software Engineer and DevOps Specialist, continuously honing my skills through complex 
        problem-solving and leading various projects. With a strong focus on Microsoft 
        technologies and Agile methodologies, I strive to deliver robust, scalable solutions 
        that drive business success. Scroll down to learn more about me.
        </p>
        <Link to="Contact"  smooth={true} duration={900}>
          <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;