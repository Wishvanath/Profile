import React,{useEffect} from 'react'
import $ from 'jquery'

export default function HeroSection() {
  const getInTouch =() =>{
    $('#getintouch').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: ($('#contact_section').offset().top)
        }, 1000)
    })
  }  
  useEffect(() =>{
    getInTouch()
  },[])  
  return (
    <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="home_section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center">
                    <div className="about-text">
                        <small className="small-text">Welcome to <span className="mobile-block">my portfolio!</span></small>
                        <h1 className="animated animated-text">
                            <span className="mr-3">Hey folks, I'm</span>
                                <div className="animated-info">
                                    <span className="animated-item">Web Developer</span>
                                    <span className="animated-item">React.js Developer</span>
                                    <span className="animated-item">Node.js Developer</span>
                                </div>
                        </h1>

                        <p>
                        I'm a software engineer based in Hyderabad, [MCA] specialized in building and development(occasionally designing) exceptional websites, applications and product for the Web.
                        </p>
                        
                        <div className="custom-btn-group mt-4">
                          {/* <a href="/resume/resume.pdf" target="_blank" className="btn mr-lg-2 custom-btn custom-btn-no-bg" rel="nofollow noopener noreferrer"><i className='uil uil-file-alt'></i> Download Resume</a> */}
                          <a href="#/" id="getintouch" className="btn custom-btn custom-btn-bg custom-btn-link">Get in Touch</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-12">
                    <div className="about-image svg">
                        <img src="images/undraw/hero-back.svg" className="img-fluid" alt="svg background" />
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
