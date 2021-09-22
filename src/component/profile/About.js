import React from 'react';
import ProfileImage from '../../assets/profile/dev.png';


export default function About() {
  return (
      <section className="about-section py-5 d-lg-flex justify-content-center align-items-center" id="about_section">
          <div className="container in-down">
              <div className="about-header">
                  <h3>About me</h3>
              </div>
              <div className="row">
                  <div className="col-sm-6">
                      <div className="about-content-left">
                      <p>
                      Hello! I'm Wishvanath Sah, a software engineer based in India.
                      </p>
                      <p>
                      I enjoy creating things that live on the internet,It can be websites, applications, or anything in between. My goal is to always build products/application that provide pixel-perfect, performance experiences.
                      </p>
                      <p>
                      Shortly after post graduating from <a href="http://www.pondiuni.edu.in/" target="_blank" rel="noopener noreferrer">Pondicherry University</a>, I joined the Engineering Software-dev team at <a href="https://skymapglobal.com/" target="_blank" rel="noopener noreferrer">SkyMap Global</a> where I work on a wide variety of interesting and meaningful projects with team and techleads.
                      </p>
                      <p>
                      Here are a few technologies I've been working with recently:
                      </p>
                        <ul className="skill-section">
                            <li className="skill-section-item">React</li>
                            <li className="skill-section-item">Angular</li>
                            <li className="skill-section-item">Node.js</li>
                            <li className="skill-section-item">JavaScript (ES6+)</li>
                            <li className="skill-section-item">Express.js</li>
                            <li className="skill-section-item">HTML & SASS</li>
                            <li className="skill-section-item">PostgreSql</li>
                        </ul>
                        {/* href="/resume/resume.pdf" */}
                        <a href="/resume/wish_resume_sep.pdf" target="_blank" className="btn mr-lg-2 mt-5 custom-btn custom-btn-no-bg" rel="nofollow noopener noreferrer"><i className='uil uil-file-alt'></i> Download Resume</a>

                      </div>  

                  </div>
                  <div className="col-sm-6">
                      <div className="about-content-right">
                      <img src={ProfileImage} alt="Profile" className="profile-image"/>
                      </div>
                  </div>
              </div>
          </div>
       </section>   
  )
}
