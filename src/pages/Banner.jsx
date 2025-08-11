import React from 'react';
import ProgrammerImg from "/images/banner-img.webp";

function Banner() {
  return (
    <section className="banner">
        <div className="cantainer">
            <div className="banner-wrap">
                <div className="banner-desc">
                    <h1 className="banner-desc-title">Modix</h1>
                    <p className="banner-desc-subtitle">Siz uchun mukammal texnologiya yechimlari</p>
                </div>
                <div className="banner-img">
                    <img src={ProgrammerImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner