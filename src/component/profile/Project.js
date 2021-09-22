import React from 'react';
import 'element-theme-default';
// import { Carousel } from 'element-react';
import image01 from '../../assets/project/agritrekk-website.png';
import image02 from '../../assets/project/arunachal-covid.png';
import image03 from '../../assets/project/crop-scout.png';
// import image04 from '../../assets/project/crop-scout-agrizone.png';
// import image05 from '../../assets/project/escorts-poc.png';
// import image06 from '../../assets/project/escorts-poc-route.png';
// import image07 from '../../assets/project/farm-vigil.png';
import image08 from '../../assets/project/farm-vigil-survey.png';
// import image09 from '../../assets/project/sahyog.png';
import milletImage from '../../assets/project/millet-market.png';
import sillfullyImage from '../../assets/project/skillfully_screenshot.png';


export default function Project() {
  return (
    <section className='project full-screen py-5 d-lg-flex justify-content-center align-items-center' id='project_section'>
      

      <div className="container in-down">
        <div className="project-header">
          <h3>Some Things I've Built</h3>
        </div>


        <div className="row first-project-row">
          <div className="col-lg-7 col-md-7 col-12 project-image-section">
            <div className="project-image-wrapper">
              <img src={image01} alt="Project One"/>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="project-content-section">
              <h5>Featured Project</h5>
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

      {/* Second row section */}
      <div className="row project-second-row">
        <div className="col-md-5 col-lg-5 col-12">
          <div className="project-content-section">
            <h5>Featured Project</h5>
            <h4>Arunachal Covid Monitoring</h4>
            <div className="project-content-descp-wrapper">
              <div className="project-content-descp">
                <p>
                  It's Web application for covid-19 patient management and displaying it's information [District -wise] on the web portal.
                  Sample is collected by Mobile app and Even Admin is able to update all the information through the Portal. We used state-shape file to display District wise information and patient analytics.
                </p>
              </div>
              <ul className="project-tech-spec">
                <li>React.js</li>
                <li>Node.js</li>
                <li>PostgreSql</li>
              </ul>
              <div className="external-link">
                <a href="https://www.apfightcovid19.org/#/" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-7 col-12 project-image-section">
            <div className="project-image-wrapper">
              <img src={image02} alt="Project Two"/>
            </div>
        </div>
      </div>



      {/* Third Row section */}
      <div className="row first-project-row">
          <div className="col-lg-7 col-md-7 col-12 project-image-section">
            <div className="project-image-wrapper">
              <img src={image03} alt="Project One"/>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="project-content-section">
              <h5>Featured Project</h5>
              <h4>Crop Scout</h4>
              <div className="project-content-descp-wrapper">
                <div className="project-content-descp">
                  <p>
                  User can evaluate crop performance with the help of geospatial technologies using AI and ML. It has Crop Mapping, Acreage Estimation with Chart, Damage Crop Assessment, Crop yield  modeling and production estimation Module.
                  </p>
                </div>
                <ul className="project-tech-spec">
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>PostgresSql</li>
                </ul>
                <div className="external-link">
                  <a href="https://agritrekktechnologies.com/products/" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
                </div>
              </div>
              
            </div>
          </div>
        </div>


        {/* fourth row section */}
        <div className="row project-second-row">
        <div className="col-md-5 col-lg-5 col-12">
          <div className="project-content-section">
            <h5>Featured Project</h5>
            <h4>Farm Vigil</h4>
            <div className="project-content-descp-wrapper">
              <div className="project-content-descp">
                <p>
                Farm vigil is comprehensive information platform designed to collect details of farmers, plots, crops and its condition, automatic area measurement along with geotag field photographs. It is  associated with web dashboard which provides a synoptic view of all field data that helps in field staff management and monitoring and undertaking survey analytics.
                </p>
              </div>
              <ul className="project-tech-spec">
                <li>React.js</li>
                <li>Node.js</li>
                <li>PostgreSql</li>
              </ul>
              <div className="external-link">
                <a href="https://agritrekktechnologies.com/product-farm-vigil/" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-7 col-12 project-image-section">
            <div className="project-image-wrapper">
              <img src={image08} alt="Project Two"/>
            </div>
        </div>
      </div>



      {/* fifth row section */}
      <div className="row first-project-row">
          <div className="col-lg-7 col-md-7 col-12 project-image-section">
            <div className="project-image-wrapper">
              <img src={milletImage} alt="Project One"/>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="project-content-section">
              <h5>Featured Project</h5>
              <h4>Millet Market</h4>
              <div className="project-content-descp-wrapper">
                <div className="project-content-descp">
                  <p>
                  Product analysis web dashboard for the millet buyer and millet producer, Admin can perform the buyer and product analysis and customization, as well millet product inventory added by producers.
                  </p>
                </div>
                <ul className="project-tech-spec">
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>PostgresSql</li>
                </ul>
                <div className="external-link">
                  {/* <a href="https://agritrekktechnologies.com/products/" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a> */}
                </div>
              </div>
              
            </div>
          </div>
        </div>

      {/* end of fifth row section */}


      {/* Sixth row */}
      <div className="row project-second-row">
        <div className="col-md-5 col-lg-5 col-12">
          <div className="project-content-section">
            <h5>Featured Project</h5>
            <h4>Skillfully</h4>
            <div className="project-content-descp-wrapper">
              <div className="project-content-descp">
                <p>
                  It's an HR Dashoard application, help you develop the skills you need, then use those skills to land the perfect job for you.
                </p>
              </div>
              <ul className="project-tech-spec">
                <li>Angular</li>
                <li>Node.js</li>
                <li>PostgreSql</li>
                <li>AWS</li>
              </ul>
              <div className="external-link">
                <a href="https://www.skillful.ly/" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-7 col-12 project-image-section">
            <div className="project-image-wrapper">
              <img src={sillfullyImage } alt="Project Two"/>
            </div>
        </div>
      </div>
      {/* EOF sixth row */}
      <div className="row">
        <div className="view-more-section">
          <a href="#/" target="blank" className="btn custom-btn custom-btn-bg custom-btn-link">View More</a>
        </div>
      </div>

      {/* project slider show case */}
      {/* <div className="project-crousel">
      <Carousel interval="4000" height="400px" type="card">
        {
          [image01,image02,image03,image04,image05,image06,image07,image08,image09].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img src={item} alt="SLider_Img" style={{"width":"100%"}}/>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
      </div> */}


      </div>


      
    </section>
  );
}
