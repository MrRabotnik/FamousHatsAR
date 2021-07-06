import React, { Component } from 'react';
import Slider from "react-slick";

export default class MultipleItems extends Component {
    render() {
        const settings = {
            infinite: true,
            centerPadding: '0px',
            slidesToShow: 3,
            arrows: false,
            autoplay: true,
            draggable: false,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            swipe: false,
            touchMove: false,
            lazyLoad: 'progressive',
            swipeToSlide: false,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <div className="container">
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <style>{cssstyle}</style>
                <Slider className="hats_slider" {...settings}>
                    <div className="img_container">
                        <img src="public/BaratheonsCrown.png" alt="" />
                    </div>
                    <div className="img_container">
                        <img src="public/CerseisCrown.png" alt="" />
                    </div>
                    <div className="img_container">
                        <img src="public/ElmerFudd.png" alt="" />
                    </div>
                    <div className="img_container">
                        <img src="public/HarleyQuinnHelmet.png" alt="" />
                    </div>
                    <div className="img_container">
                        <img src="public/ManInBlack.png" alt="" />
                    </div>
                    <div className="img_container">
                        <img src="public/PerryMasonsFedora.png" alt="" />
                    </div>
                    <div className="img_container">
                        <img src="public/PiedPiperHat.png" alt="" />
                    </div>
                    <div className="img_container">
                        <img src="public/RobotMansHead.png" alt="" />
                    </div>
                    <div className="img_container">
                        <img src="public/WonderWomansTiara.png" alt="" />
                    </div>
                    <div className="img_container">
                        <img src="public/YosemiteSam.png" alt="" />
                    </div>
                    <div className="img_container">
                        <img src="public/ManInBlack.png" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

const cssstyle = `
.container {
  margin: 0 auto;
  width: 90%;
  padding: 3vw 0;
}
.hats_slider,
.hats_slider div {
    height: 100%;
}
.hats_slider .img_container{
    display: flex !important;
    align-items: center;
    justify-content: center;
}
.hats_slider img {
    width: 80%;
    padding: 1rem 0;
}
.slick-slide{
    opacity: 0.5;
}
.slick-center{
    transform: scale(1.2);
    transition: 1s;
    opacity: 1 !important;
}
`;