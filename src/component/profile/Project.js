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
    <section className='project py-5 container' id='project_section'>
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
    </section>
  );
}
