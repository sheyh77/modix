import React, { useRef } from 'react';
import projectCard from './projectCard';

function Project() {

    return (
        <section className="project">
            <div className="cantainer">
                <div className="project-wrap">
                    <div className="project-card">
                        {
                            projectCard.map(item => (
                                <div className="project-img" >
                                    <a href={item.href}>
                                        <img src={item.img} alt="project-image" />
                                    </a>
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