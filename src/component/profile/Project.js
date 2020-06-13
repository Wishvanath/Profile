import React from 'react';
import 'element-theme-default';
import { Carousel } from 'element-react';
import image01 from '../../assets/project/agritrekk-website.png';
import image02 from '../../assets/project/arunachal-covid.png';
import image03 from '../../assets/project/crop-scout.png';
import image04 from '../../assets/project/crop-scout-agrizone.png';
import image05 from '../../assets/project/escorts-poc.png';
import image06 from '../../assets/project/escorts-poc-route.png';
import image07 from '../../assets/project/farm-vigil.png';
import image08 from '../../assets/project/farm-vigil-survey.png';
import image09 from '../../assets/project/sahyog.png';



export default function Project() {
  return (
    <section className='project py-5' id='project_section'>
      {/* <Carousel interval="4000" height="400px" type="card">
        {
          [image01,image02,image03,image04,image05,image06,image07,image08,image09].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img src={item} alt="SLider_Img" style={{"width":"100%"}}/>
              </Carousel.Item>
            )
          })
        }
      </Carousel> */}

      <div className="container">
        <div className="project-header">
          <h3>Some Things I've Built</h3>
        </div>
        <div className="row first-project-row">
          <div className="col-sm-7 project-image-section">
            <div className="project-image-wrapper">
              <img src={image01} alt="Project One"/>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="project-content-section">
              <h5>Feature Project</h5>
              <h4>Agritrekk Website</h4>
              <div className="project-content-descp-wrapper">
                <div className="project-content-descp">
                  <p>
                  Agritrekk company website and it's product information ,developed in WordPress (CMS), It has own blogging , Event Scheduling, Job Posting, Contact Us and More Pages with SEO.
                  </p>
                </div>
                <ul className="project-tech-spec">
                  <li>Wordpress</li>
                  <li>Php</li>
                  <li>MySql</li>
                </ul>
                <div className="external-link">
                  <a href="https://agritrekktechnologies.com/" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
