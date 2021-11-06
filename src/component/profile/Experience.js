import React from 'react'

export default function Experience() {
  return (
    <section className="resume full-screen py-5 d-lg-flex justify-content-center align-items-center" id="resume_section">
        <div className="container in-down">
            <div className="row">

                <div className="col-lg-6 col-12">
                  <h3 className="experience-header mb-4">Experiences</h3>

                    <div className="timeline">
                        <div className="timeline-wrapper">
                             <div className="timeline-yr">
                                  <span>2021</span>
                             </div>
                             <div className="timeline-info">
                                  <h4><span>Software Engineer</span><small>AxiomIO</small></h4>
                                  <p>
                                      Write modern, performant, maintainable code for different client and internal projects.
                                  </p>
                                  <p>
                                  Work with a variety of different languages, platforms and frameworks, such as React, Node.js, Express.js and Angular
                                  </p>
                                  <p>
                                  Communicate and work with experience team members to meet clienct expectations and requirements.
                                  </p>
                             </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2019</span>
                            </div>
                            <div className="timeline-info">
                                <h4><span>Software Engineer</span><small>SkyMap Global</small></h4>
                                <p>
                                Involved in technical discussions, sharing and communication the project related ideas with in team.
                                </p>
                                <p>
                                Requirement Gathering and define Business analysis for the project.
                                </p>
                                <p>
                                Worked closely with designers and software team to develop company's product.
                                </p>
                            </div>
                        </div>

                        
                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2018</span>
                            </div>
                            <div className="timeline-info">
                                <h4><span>Software Engineer</span><small>SkyMap Global</small></h4>
                                <p>
                                Involved in various phases of Software Development of Life Cycle, Requirement gathering, Analysis and Code Development.
                                </p>
                                <p>
                                    Defined Reusable component for front-end and written Backend API in PostgreSql.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>




                <div className="col-lg-6 col-12">
                  <h3 className="mb-4 mobile-mt-2 education-header">Educations</h3>

                    <div className="timeline">
                        <div className="timeline-wrapper">
                             <div className="timeline-yr">
                                  <span>2018</span>
                             </div>
                             <div className="timeline-info">
                                  <h4><span>Masters in Computer Science</span>
                                  <small>
                                      <a href="http://www.pondiuni.edu.in/" target="_blank" rel="noopener noreferrer">Pondicherry Central Univercity</a>
                                  </small>
                                  </h4>
                                  <br/>
                             </div>
                        </div>

                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2014</span>
                            </div>
                            <div className="timeline-info">
                                <h4><span>Bechlors in Computer Science</span><small>T.N.B College, Bhagalpur</small></h4>
                                <br/>
                            </div>
                        </div>
                        
                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2010</span>
                            </div>
                            <div className="timeline-info">
                                <h4><span>Senior Secondary Certificat</span><small>Marwari College, Bhagalpur</small></h4>
                                <br/>
                            </div>
                        </div>
                        <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2008</span>
                            </div>
                            <div className="timeline-info">
                                <h4><span>Secondary School Certificate</span><small>High School Basantrai</small></h4>
                            </div>
                        </div>


                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
