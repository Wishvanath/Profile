import React, { Fragment } from 'react'

export default function SideOrientation() {
  return (
    <Fragment>
      <div className="side-orientation">
        <div className="side-orientation-left">
          <ul className="social-nav">
            <li>
            {/* https://github.com/Wishvanath */}
              <a href="https://octoprofile.now.sh/user?id=Wishvanath" target="blank" className="social-nav-link"><i class="fab fa-github"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/wishvanath-sah-68725b124/" target="blank" className="social-nav-link"><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="https://codepen.io/Wishvanath" target="blank" className="social-nav-link">
              <i class="fab fa-codepen"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100009569210427" target="blank" className="social-nav-link">
              <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/WishvanathSah" target="blank" className="social-nav-link">
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
