import React, { Fragment } from 'react'
import {NavBar, HeroSection, ProjectSection, ExperienceSection, ContactSection, FooterSection, SideOrientation, AboutSection} from '../component'
export default function Home() {
  return (
    <Fragment>
      <SideOrientation />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </Fragment>
  )
}
