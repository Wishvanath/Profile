import React from 'react'

export default function ContactSection() {
  return (
      <section className="contact py-5" id="contact_section">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-5 mr-lg-5 col-12">
          <div className="google-map w-100">
           <iframe title="map" width="100%" height="400" src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;coord=17.4618242, 78.5004605&amp;q=103%2FC%20%2C%20Secunderabad%2C%20Karkhana+(Software%20Developer)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/draw-radius-circle-map/">Radius map tool</a></iframe></div><br />
          
            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div className="contact-info-item">
                  <h3 className="mb-3 text-white">Say hello</h3>
                  <p className="footer-text mb-0">010 020 0960</p>
                  <p><a href="mailto:hello@company.co">hello@company.co</a></p>
                </div>

                <ul className="social-links">
                    <li>
                        <a href="#/" className="uil uil-dribbble" data-toggle="tooltip" data-placement="left" title="Dribbble">Dribble</a>
                    </li>
                    <li>
                        <a href="#/" className="uil uil-instagram" data-toggle="tooltip" data-placement="left" title="Instagram">Instagram</a>
                    </li>
                    <li>
                        <a href="#/" className="uil uil-youtube" data-toggle="tooltip" data-placement="left" title="Youtube">Youtube</a>
                    </li>
                </ul>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">Interested to work together? Let's talk</h2>

              <form action="">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input type="text" className="form-control" name="name" placeholder="Your Name" id="name" />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input type="email" className="form-control" name="email" placeholder="Email" id="email" />
                  </div>

                  <div className="col-12">
                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message"></textarea>
                  </div>

                  <div className="ml-lg-auto col-lg-5 col-12">
                    <input type="submit" className="form-control submit-btn" value="Send Button" />
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
