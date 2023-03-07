import React from "react";

function Footer(){
    return(
        <div>
            <div className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h2>Vihanga Vithanawasam</h2>
                        <h3><i className="fa fa-location-dot"></i>&nbsp;&nbsp;&nbsp;No. 452, Kalutara, Sri Lanka</h3>
                        <div className="footer-menu">
                            <p><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;+94 71 839 9021</p>
                            <p><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;vithanawasamvihanga@gmail.com</p>
                        </div>
                        <div className="footer-social">
                            <a href="https://twitter.com/V_Vithanawasam" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/vihanga.deamon/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com/in/vihanga-vithanawasam/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            <a href="" target="_blank"><i className="fab fa-instagram"></i></a>
                            
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; All Rights Reserved | 2023</p>
                </div>
            </div>
            </div>

            <a href="#" class="btn back-to-top"><i class="fa fa-chevron-up"></i></a>
            

            
        </div>

    )
        
    
}

export default Footer;