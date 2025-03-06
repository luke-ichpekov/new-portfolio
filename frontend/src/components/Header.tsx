import React, { useEffect, useState } from 'react';
import ModeSwitcher from './ModeSwitcher';
import "../App.css";

interface HeaderProps {
  mode: string;
  onModeChange: (mode: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ mode, onModeChange }) => {
  const [iconSrc, setIconSrc] = useState('/favicon.svg');
  const [avatarSrc, setAvatarSrc] = useState('/images/avatar.svg');

  useEffect(() => {
    setIconSrc(mode === 'light' ? '/favicon-light.svg' : '/favicon.svg');
    setAvatarSrc(mode === 'light' ? '/images/avatar-light.svg' : '/images/avatar.svg');
  }, [mode]);

  return (
    <div className="mainContainer">
      <header className="header">
        <div className="header-content">
          <div className="header-top">
            <img src={iconSrc} alt="Site Icon" className="site-icon" />
            <div className="header-main">
              <div className="avatar-and-text">
                <div className="avatar-container">
                  <img src={avatarSrc} alt="Avatar" className="avatar" />
                </div>
                <div className="header-text">
                  <h1 className="title">Luke Iverson</h1>
                  <p className="subtitle">Designer & Developer</p>
                </div>
              </div>
            </div>
            <ModeSwitcher mode={mode} onModeChange={onModeChange} />
          </div>
        </div>
      </header>
    </div>

    //      <main>
    //       <section className="section">
    //         <h2 className="section-title">About</h2>
    //         <p className="about-text">
    //           I'm a designer and developer focused on creating clean, functional digital experiences.
    //           My work combines minimalist aesthetics with thoughtful interactions to build products
    //           that are both beautiful and usable.
    //         </p>
    //       </section>

    //     <section className="section">
    //       <h2 className="section-title">Experience</h2>
    //       <div className="experience-list">
    //         <div className="experience-item">
    //           <div className="experience-header">
    //             <div className="experience-title">Senior Frontend Developer</div>
    //             <div className="experience-date">2021 - Present</div>
    //           </div>
    //           <a href="#" className="experience-company">Digital Agency</a>
    //           <p className="experience-description">
    //             Leading frontend development for client projects, focusing on performance
    //             optimization and responsive design. Implementing modern web technologies
    //             and mentoring junior developers.
    //           </p>
    //           <p className="experience-tech">
    //             React, TypeScript, Three.js, GSAP, Tailwind CSS
    //           </p>
    //         </div>

    //         <div className="experience-item">
    //           <div className="experience-header">
    //             <div className="experience-title">UI/UX Designer</div>
    //             <div className="experience-date">2019 - 2021</div>
    //           </div>
    //           <a href="#" className="experience-company">Design Studio</a>
    //           <p className="experience-description">
    //             Created user interfaces and experiences for web and mobile applications.
    //             Collaborated with developers to ensure design implementation accuracy.
    //           </p>
    //           <p className="experience-tech">
    //             Figma, Adobe XD, Sketch, Principle
    //           </p>
    //         </div>

    //         <div className="experience-item">
    //           <div className="experience-header">
    //             <div className="experience-title">Web Developer</div>
    //             <div className="experience-date">2017 - 2019</div>
    //           </div>
    //           <a href="#" className="experience-company">Tech Startup</a>
    //           <p className="experience-description">
    //             Built responsive websites and web applications. Worked on both frontend
    //             and backend development for various client projects.
    //           </p>
    //           <p className="experience-tech">
    //             JavaScript, HTML, CSS, Node.js, Express
    //           </p>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="section">
    //       <h2 className="section-title">Projects</h2>
    //       <div className="project-list">
    //         <div className="project-item">
    //           <div className="project-date">2023</div>
    //           <div className="project-title">
    //             <a href="#">Portfolio Website</a>
    //           </div>
    //           <p className="project-description">
    //             Personal portfolio website showcasing my work and experience.
    //             Features a custom Three.js background and responsive design.
    //           </p>
    //           <p className="project-tech">
    //             React, TypeScript, Three.js, GLSL
    //           </p>
    //         </div>

    //         <div className="project-item">
    //           <div className="project-date">2022</div>
    //           <div className="project-title">
    //             <a href="#">E-commerce Platform</a>
    //           </div>
    //           <p className="project-description">
    //             A modern e-commerce platform with product filtering, cart functionality,
    //             and secure checkout process.
    //           </p>
    //           <p className="project-tech">
    //             React, Redux, Node.js, MongoDB
    //           </p>
    //         </div>

    //           <div className="project-item">
    //             <div className="project-date">2021</div>
    //             <div className="project-title">
    //               <a href="#">Interactive Data Visualization</a>
    //             </div>
    //             <p className="project-description">
    //               Interactive visualization of complex datasets using D3.js.
    //               Includes filtering, zooming, and responsive design.
    //             </p>
    //             <p className="project-tech">
    //               D3.js, JavaScript, SVG, CSS
    //             </p>
    //           </div>
    //         </div>
    //       </section>

    //     <section className="section">
    //       <h2 className="section-title">Links</h2>
    //       <div className="links-list">
    //         <div className="link-item">
    //           <span className="link-title">GitHub</span>
    //           <a href="https://github.com/username" className="link-url">github.com/username</a>
    //         </div>
    //         <div className="link-item">
    //           <span className="link-title">Twitter</span>
    //           <a href="https://twitter.com/username" className="link-url">twitter.com/username</a>
    //         </div>
    //         <div className="link-item">
    //           <span className="link-title">LinkedIn</span>
    //           <a href="https://linkedin.com/in/username" className="link-url">linkedin.com/in/username</a>
    //         </div>
    //         <div className="link-item">
    //           <span className="link-title">Email</span>
    //           <a href="mailto:email@example.com" className="link-url">email@example.com</a>
    //         </div>
    //       </div>
    //     </section>
    //   </main>

    //   <footer className="footer">
    //     © {new Date().getFullYear()} Luke Ichpekov
    //   </footer>
    // </div>
  );
};

export default Header;
