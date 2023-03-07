import React from "react";

function Body(){
    return(
        <div>
            <div className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container-fluid">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <a href="#home" className="nav-item nav-link active">Home</a>
                        <a href="#about" className="nav-item nav-link">About Me</a>
                        <a href="#about" className="nav-item nav-link">Skills</a>
                        <a href="#int" className="nav-item nav-link">Interests</a>
                        <a href="#proj" className="nav-item nav-link">Projects</a>
                        <a href="#cert" className="nav-item nav-link">Certificates</a>
                        <a href="#contact" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1>I'm Vihanga Vithanawasam</h1>
                                <h4>I'm an Information System undergraduate, a cyber security enthusiast and an astropile based on Sri Lanka.</h4>
                            </div>
                            <div className="hero-btn">
                                <a className="btn" href="#contact">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src="img/hero.jpg" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about" style={{"backgroundColor": "#1d1d1d"}}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-12"><h2 className="section-header text-center" style={{"color": "white"}}><br />About Me</h2></div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header text-justify">
                                
                                <p>A highly motivated and performance-driven graduate from the University of Colombo School of Computing (UCSC) 
                                    with a strong foundation in software engineering and programming principles. 
                                    Proficient in a variety of platforms and programming languages and embedded systems. 
                                    Able to effectively self-manage during independent projects, as
                                    well as collaborate as part of a productive team. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <center>
                            <div className="skills">

                                <div className="skill-name">
                                    <p>Networking</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>Programming</p><p>75%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>Web Development</p><p>90%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>Penetration Testing</p><p>70%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div></center> <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="service" id="int">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <h2>Interests</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-shield"></i>
                            </div>
                            <div className="service-text">
                                <h3>Cyber Security</h3>
                                <p>
                                    Mostly about learning digital forensics, cryptography and playing CTF competitions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-microchip"></i>
                            </div>
                            <br />
                            <br />
                            <div className="service-text">
                                <h3>Artificial Intelligence</h3>
                                <p>
                                    Interested in learning AI models such as nural networks, natural language processing
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-circle-nodes"></i>
                            </div>
                            <div className="service-text">
                                <h3>Blockchain</h3>
                                <p>
                                    Practical applications for security behind the blockchain concept.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-earth-americas"></i>
                            </div>
                            <br />
                            <br />
                            <div className="service-text">
                                <h3>Astronomy</h3>
                                <p>
                                    Love learning and exploring facts about the universe and stargazing 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-gamepad"></i>
                            </div>
                            <div className="service-text">
                                <h3>Gaming</h3>
                                <p>
                                    I'm a huge fan of Call of Duty, Apex Legends and Assassin's Creed franchises
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="banner" id="proj">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Projects</h2>
                </div>
                <div className="row">
                    <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="card text-center">
                            <div className="card-body">
                            <h5 className="card-title">Packet Analyzer</h5>
                            <p className="card-text text-justify">This project is about creating a packet analyzer for network monitoring and customizable intrusion detection. Currently supports all Linux environments.</p>
                            <a href="#" className="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="card text-center">
                            <div className="card-body">
                            <h5 className="card-title">Project Ayubo</h5>
                            <p className="card-text text-justify">This project is about creating a taxi app that calculates rates for each journey including several pre-built packages and custom packages. It features navigation, rate calculation, customizable package</p>
                            <a href="#" className="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="card text-center">
                            <div className="card-body">
                            <h5 className="card-title">Dynamic Pathfinding AI</h5>
                            <p className="card-text text-justify">This project is about creating a path finding AI mechanism which are mostly used for Non-Player Character (NPC) path selections in modern video games.</p>
                            <a href="#" className="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="service" id="cert">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Certificates and Awards</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="service-item">
                            <div className="service-image">
                                <img src="img/NetworkingEssentials-01.png" />
                            </div>
                            <div className="service-text">
                                <h3>Networking Essentials</h3>
                                <p>
                                    Cisco Networking Academy
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-item">
                                <div className="service-image">
                                    <img src="img/cybersec_badge.png" />
                                </div>
                                <div className="service-text">
                                    <h3>Introduction to Cyber Security</h3>
                                    <p>
                                        Cisco Networking Academy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-item">
                                <div className="service-image">
                                    <img src="img/networkBasics.png" />
                                </div>
                                <div className="service-text">
                                    <h3>Network Basics</h3>
                                    <p>
                                        Cisco Networking Academy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-item">
                                <div className="service-image">
                                    <img src="img/NSE1-Certification.png" />
                                </div>
                                <div className="service-text">
                                    <h3>Network Security Expert | Level 1</h3>
                                    <p>
                                        Fortinet
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-item">
                                <div className="service-image">
                                    <img src="img/NSE2-Certification.png" />
                                </div>
                                <div className="service-text">
                                    <h3>Network Security Expert | Level 2</h3>
                                    <p>
                                        Fortinet
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        <div className="contact" id="contact">
            <div className="container-fluid">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                        <p className="help-block"></p>
                                    </div>
                                    <div>
                                        <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
        
    
}

export default Body;