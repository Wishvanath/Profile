import React, { Fragment } from 'react'
import {NavBar, HeroSection, ProjectSection, ExperienceSection, ContactSection, FooterSection} from '../component'
export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </Fragment>
  )
}
