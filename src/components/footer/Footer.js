import React from 'react';
import '../footer/footer.css';
const Footer = () => {
    return (
        <footer >
            <div className="ui inverted vertical footer segment " style={{ position: 'relative', zIndex: 1 }} >
                <div className="ui center aligned container">
                    <div className="ui stackable inverted divided grid" style={{ display: "inline-block" }}>
                        <div className="five wide column">
                            <h3 className="ui inverted header">About Us</h3>
                        Central Wine and Spirit is dedicated to provide quality product with quality service.
                        We have wide and unique variety of wine, spirits and craft beer to suit any plate and budget.
                        <br />
                            <br />
                            <a href="https://www.instagram.com/centralwineandspirit/" target="blank">
                                <i className="instagram big icon"></i>
                            </a>
                            <a href="https://www.facebook.com/CentralWineandSpirit/" target="blank">
                                <i className="facebook big icon"></i>
                            </a>
                            <a href="https://www.yelp.com/biz/central-wine-and-spirit-new-britain" target="blank">
                                <i className="yelp big icon"></i>
                            </a>
                        </div>
                        <div className="five wide column">
                            <h3 className="ui inverted header">Hours</h3>
                            <div className="RightContainerFooter">
                                <div className="item">
                                    <i className="clock outline large icon"></i>
                                    <span className="LeftPaddingText">Mon - Sat : 09:00 AM - 10:00 PM</span>
                                </div>
                                <div className="item" >
                                    <i className="clock outline large icon"></i>
                                    <span className="LeftPaddingText">Sunday : 10:00 AM - 06:00 PM</span>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="five wide column">
                            <h3 className="ui inverted header">Contacts</h3>
                            <div className="RightContainerFooter">
                                <div className="item">
                                    <i className="map large icon"></i>
                                    <span className="LeftPaddingText">1395 East St, New Britain, CT 06051</span>
                                </div>
                                <div className="item" >
                                    <i className="phone large icon"></i>
                                    <span className="LeftPaddingText">+1(860) 223-9133</span>
                                </div>
                                <div className="item">
                                    <i className="at large icon"></i>
                                    <span className="LeftPaddingText"> sagarshah51@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </footer >
    );
}



export default Footer;