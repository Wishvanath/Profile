import React, {useEffect} from 'react';
import $ from 'jquery'

export default function NavBar() {

    const darkMode =() =>{
        $('.color-mode').click(function(){
            $('.color-mode-icon').toggleClass('active')
            $('body').toggleClass('dark-mode')
        })
    }

    const navScroll =() =>{
        $('#home').click(function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: ($('#home_section').offset().top)
            }, 1000)
        })
        $('#about').click(function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: ($('#about_section').offset().top)
            }, 1000)
        })
        $('#project').click(function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: ($('#project_section').offset().top)
            }, 1000)
        })
        $('#experience').click(function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: ($('#resume_section').offset().top)
            }, 1000)
        })
        $('#contact').click(function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: ($('#contact_section').offset().top)
            }, 1000)
        })
    }
    // use effect 
    useEffect(() => {
        darkMode();
        navScroll();
    }, [])
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
            <a className="navbar-brand" href="index.html">
                <img src="images/logo/logo2.png" alt="LOGO" className="navbar-brand-logo"/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href="#home" className="nav-link" id="home"><span data-hover="Home">Home</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" id="about"><span data-hover="About">About</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume" className="nav-link" id="experience"><span data-hover="Experience">Experience</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#project" className="nav-link" id="project"><span data-hover="Projects">Projects</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" id="contact"><span data-hover="Contact">Contact</span></a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-lg-auto">
                    <div className="ml-lg-4">
                      <div className="color-mode d-lg-flex justify-content-center align-items-center">
                        <i className="far fa fa-moon color-mode-icon"></i>
                      </div>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
  )
}
