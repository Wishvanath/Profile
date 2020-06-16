import React from 'react'
export default function FooterSection() {
  let date = new Date().getFullYear();
  return (
    <footer className="footer py-5">
          <div className="container">
               <div className="row">
                    <div className="col-lg-12 col-12">                                
                        <p className="copyright-text text-center">Copyright &copy; {date} Wishvanath Anand . All rights reserved</p>
                    </div>
               </div>
          </div>
     </footer>
  )
}
