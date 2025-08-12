import React, { useRef } from 'react';
import projectCard from './projectCard';

function Project() {

    return (
        <section className="project">
            <div className="cantainer">
                <div className="project-wrap">
                    <h1 className='project-title'>Project</h1>
                    <p className="project-desc">Bu yerda men yaratgan loyihalarning ayrimlarini ko‘rishingiz mumkin. <br /> Har bir loyiha — tajriba, o‘rganish va ijod mahsuli.</p>
                    <div className="project-card">
                        {
                            projectCard.map(item => (
                                <div className="project-img" >
                                    <a href={item.href}>
                                        <img src={item.img} alt="project-image" />
                                    </a>
                                    <p className='project-img-desc'>{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project