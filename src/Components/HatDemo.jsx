import React from 'react';
import '../styles/hatdemo.css';

function HatDemo({ hats, index }) {

    return (
        <>
            <div className="demo_container">
                <img src="public/WhiteBox.png" alt="" />

                <model-viewer
                    class="hat"
                    src={`public/GLTF/${hats[index].imgName}.gltf`}
                    ios-src={`public/USZD/${hats[index].imgName}.usdz`}
                    poster={`public/${hats[index].imgName}.png`}
                    camera-orbit="1.2195rad 1.362rad auto"
                    shadow-intensity="1"
                    ar
                    loading="eager"
                    ar-modes="webxr scene-viewer quick-look fallback"
                    camera-controls
                    auto-rotate
                    alt="3D model of a famous hat"
                >
                    <button
                        slot="ar-button"
                        id="ar-button"
                        className="try_it_on display-none"
                    >
                        Try It On!
                    </button>
                </model-viewer>
            </div>
        </>
    );
}

export default HatDemo;