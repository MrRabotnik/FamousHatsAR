import React from 'react';
import '../styles/hatinfo.css'

function HatInfo({ hats, index }) {

    const AvailableOrNot = () => {
        if (navigator.xr) {
            return (
                <>
                    <button className="try_it_on">Try It On!</button>
                </>
            );
        }

        return (
            <model-viewer
                class="hat2"
                src={`public/GLTF/${hats[index].imgName}.gltf`}
                ios-src={`public/USZD/${hats[index].imgName}.usdz`}
                ar
                ar-modes="webxr scene-viewer quick-look fallback"
                alt="3D model of a famous hat"
            >
                <button slot="ar-button" id="ar-button" className="try_it_on">
                    Try It On!
                </button>
            </model-viewer>
        );
    }

    return (
        <div className="info_section">
            <h2>Fun Hat Facts</h2>
            <hr />

            <h4>Featured In:</h4>
            <p>{hats[index].featuredIn}</p>

            <h4>Worn By:</h4>
            <p>{hats[index].wornByActor}</p>

            <h4>First Aired:</h4>
            <p>{hats[index].realisedDate}</p>

            <h4>Fun Fact:</h4>
            <p className="fan_facts" title={hats[index].funFact}>
                {hats[index].funFact}
            </p>

            <div className="text-align-center">
                <p className="quote" title={hats[index].quote}>
                    "{hats[index].quote}"
                </p>

                <div>
                    <AvailableOrNot />
                </div>

                <p>
                    * iOS 12+ mobile device with front-facing TrueDepth Camera
                    required for full experience
                </p>
            </div>
        </div>
    );
}

export default HatInfo;
