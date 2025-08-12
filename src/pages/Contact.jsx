import React from 'react';
import LocationImg from "/images/location-contact.png";
import PhoneImg from "/images/phone-contact.png";
import EmailImg from "/images/mail-contact.png";

function Contact() {
    return (
        <section className="contact">
            <div className="cantainer">
                <div className="contact-wrap">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-desc">Agar sizda savollar, takliflar yoki loyiha g‘oyalari bo‘lsa, <br /> bemalol yozing — imkon qadar tez javob beraman.</p>
                    <div className="contact-box">
                        <div className="contact-left">
                            <div className="contact-about">
                                <div className="contact-img">
                                    <img src={LocationImg} alt="phone image"/>
                                </div>
                                <div className="contact-text">
                                    <p className="contact-text-title">Address</p>
                                    <p className="contact-phone-num">Xorazm viloyat, Urganch shahar</p>
                                </div>
                            </div>
                            <div className="contact-about">
                                <div className="contact-img">
                                    <img src={PhoneImg} alt="phone image" />
                                </div>
                                <div className="contact-text">
                                    <p className="contact-text-title">Phone</p>
                                    <p className="contact-phone-num">+998 91 278 88 01</p>
                                </div>
                            </div>
                            <div className="contact-about">
                                <div className="contact-img">
                                    <img src={EmailImg} alt="phone image" />
                                </div>
                                <div className="contact-text">
                                    <p className="contact-text-title">Email</p>
                                    <p className="contact-phone-num">ubabaniyozov@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="contact-right">
                            <h1 className="contact-right-title">Send Message</h1>
                            <input type="text" placeholder='Full name'/>
                            <input type="email" name='userEmail' placeholder='Email'/>
                            <input type="text" placeholder='Type your Message...' className='contact-message'/>
                            <button className='contact-send' type='submit'>Send</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact