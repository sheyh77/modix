import React from 'react';
import aboutCard from './aboutCard';

function About() {
    return (
        <section className="about">
            <div className="cantainer">
                <div className="about-wrap">
                    <div className="about-card">
                        {
                            aboutCard.map(item => (
                                <div className="about-card-item" key={item.id}>
                                    <img src={item.img} alt="item-img" />
                                    <p className="about-card-item-title">{item.title}</p>
                                    <p className="about-card-item-desc">{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About