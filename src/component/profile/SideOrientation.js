import React, { Fragment } from 'react'

export default function SideOrientation() {
  return (
    <Fragment>
      <div className="side-orientation">
        <div className="side-orientation-left">
          <ul className="social-nav">
            <li>
              <a href="#/github" target="blank" className="social-nav-link"><i class="fab fa-github"></i></a>
            </li>
            <li>
              <a href="#/github" className="social-nav-link"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#/github" className="social-nav-link">
              <i class="fab fa-codepen"></i>
              </a>
            </li>
            <li>
              <a href="#/github" className="social-nav-link">
              <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#/github" className="social-nav-link">
              <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="side-orientation-right">
          <div className="email-section">
            <a href="mailto:anandwishvanath@gmail.com">anandwishvanath@gmail.com</a>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
