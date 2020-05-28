import React from 'react';
import 'element-theme-default';
import { Carousel } from 'element-react';
// import image01 from 'images/project/project-image01.png';
// import img2 from './images/project/project-image02.png';
// import img1 from "./../../project-image01.png";
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
    {/* <img src={img1} alt=""/> */}
      <div className="block">
        <span className="demonstration">Switch when indicator is hovered (default)</span>
        <Carousel height="150px">
          {
            [1,2,3,4,5].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <h3>{item}</h3>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </div>
    </div>  
  );
}
