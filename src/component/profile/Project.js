import React from 'react';
import 'element-theme-default';
import { Carousel } from 'element-react';
import image01 from '../../assets/project/project-image01.png';
import image02 from '../../assets/project/project-image02.png';
import image03 from '../../assets/project/project-image03.png';
import image04 from '../../assets/project/project-image04.png';
import image05 from '../../assets/project/project-image05.png';

export default function Project() {
  return (
    // <section className='project py-5' id='project_section'>
    //   <div className='container'>
    //     <div className='row'>
    //       <div className='col-lg-11 text-center mx-auto col-12'>
    //         <div className='col-lg-8 mx-auto'>
    //           <h2>Things I have designed for digital media agencies</h2>
    //         </div>

    //         <div className='owl-carousel owl-theme'>
    //           <div className='item'>
    //             <div className='project-info'>
    //               <img
    //                 src='images/project/project-image01.png'
    //                 className='img-fluid'
    //                 alt='project_image'
    //               />
    //             </div>
    //           </div>

    //           <div className='item'>
    //             <div className='project-info'>
    //               <img
    //                 src='images/project/project-image02.png'
    //                 className='img-fluid'
    //                 alt='project_image'
    //               />
    //             </div>
    //           </div>

    //           <div className='item'>
    //             <div className='project-info'>
    //               <img
    //                 src='images/project/project-image03.png'
    //                 className='img-fluid'
    //                 alt='project_image'
    //               />
    //             </div>
    //           </div>

    //           <div className='item'>
    //             <div className='project-info'>
    //               <img
    //                 src='images/project/project-image04.png'
    //                 className='img-fluid'
    //                 alt='project_image'
    //               />
    //             </div>
    //           </div>

    //           <div className='item'>
    //             <div className='project-info'>
    //               <img
    //                 src='images/project/project-image05.png'
    //                 className='img-fluid'
    //                 alt='project_image'
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

  <div className="demo-1 small">
        <Carousel interval="4000" height="400px" type="card">
          {
            [image01,image02,image03,image04,image05].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <img src={item} alt="SLider_Img" style={{"width":"100%"}}/>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
    </div>  
  );
}
