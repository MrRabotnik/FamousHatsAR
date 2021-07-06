import React, { useState } from 'react';
import Header2 from './Header2';
import '../styles/hatdetails.css'
import HatDemo from './HatDemo';
import HatInfo from './HatInfo';

function HatDetails() {
    const [index, setIndex] = useState(0)
    const hats_arr = [
        {
            title: "Wonder Woman's Tiara",
            featuredIn: 'Wonder Woman',
            wornByActor: 'Gal Gadot',
            realisedDate: 'May 2, 2017',
            quote: 'I will fight for those who cannot fight for themselves.',
            funFact: 'In the comics, not only is the tiara a boomerang, it also works as a mental radio',
            imgName: 'WonderWomansTiara'
        },
        {
            title: "Cersei's Crown",
            featuredIn: 'Game of Thrones',
            wornByActor: 'Lena Headey',
            realisedDate: 'April 17, 2011',
            quote: 'When you play the game of thrones, you win or you die.',
            funFact: 'The center features the lion sigil, with the mane representing the Iron Throne',
            imgName: 'CerseisCrown'
        },
        {
            title: "Robert Baratheon's crown",
            featuredIn: 'Game of Thrones',
            wornByActor: 'Mark Addy',
            realisedDate: 'April 17, 2011',
            quote: "I swear to you, I was never so alive as when I was winning this throne, or so dead as now that I've won it.",
            funFact: "While shooting King Robert's death scene the studio was quite cold, so Mark Addy was happy to be tucked under the blankets of his bed.",
            imgName: 'BaratheonsCrown'
        },
        {
            title: "Man In Black Hat",
            featuredIn: 'Westworld',
            wornByActor: 'Jimmi Simpson',
            realisedDate: 'October 2, 2016',
            quote: 'Which would you prefer?',
            funFact: 'The convention of black vs. white hats was first seen in a 1903 short film',
            imgName: 'ManinBlack'
        },
        {
            title: "Yosemite Sam Hat",
            featuredIn: 'Looney Tunes',
            wornByActor: 'Friz Freleng',
            realisedDate: 'May 5, 1945',
            quote: "I'm the hootinest, tootinest, shootinest bob-tailed wildcat in the West.",
            funFact: 'Many claim that Yosemite Sam is a caricature of his creator Fitz Ferleng',
            imgName: 'YosemiteSam'
        },
        {
            title: "Elmer Fudd Cap",
            featuredIn: 'Looney Tunes',
            wornByActor: 'Chuck Jones/Tex Avery',
            realisedDate: 'March 2, 1940',
            quote: "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
            funFact: "Elmer Fudd first appeared as Egghead in a 1937 short called 'Egghead Rides Again'",
            imgName: 'ElmerFudd'
        },
        {
            title: "Pied Piper Hat",
            featuredIn: 'Silicon Valley',
            wornByActor: 'Pied Piper Company',
            realisedDate: 'April 6, 2014',
            quote: "Thank you. Why would Gavin have anything to do with this? Unless he had some reason to be frightened by Pied Piper and it's superior technology?",
            funFact: 'HBO made a real Pied Piper website at piedpiper.com',
            imgName: 'PiedPiperHat'
        },
        {
            title: "Perry Mason's Hat",
            featuredIn: 'Perry Mason',
            wornByActor: 'Matthew Rhys',
            realisedDate: 'June 21, 2020',
            quote: 'A toast to the things for which there are no substitutes: good friends… happy days… and… victory.',
            funFact: 'In the original show, only one episode was ever filmed in color. ',
            imgName: 'PerryMasonsFedora'
        },
        {
            title: "Robotman's Helmet",
            featuredIn: 'Doom Patrol ',
            wornByActor: 'Brendan Fraser/Riley Shanahan',
            realisedDate: 'February 15, 2019',
            quote: 'I got this, I speak robot.',
            funFact: 'Robotman is the only member to appear in every iteration of Doom Patrol',
            imgName: 'RobotMansHead'
        },
        // {
        //     title: "Rick's Hair",
        //     featuredIn: 'Rick & Morty',
        //     wornByActor: 'Justin Roiland',
        //     realisedDate: 'December 2, 2013',
        //     quote: 'Wubalubadubdub.',
        //     funFact: "Rick's iconic catchphrase was an accidental addlib that was originally meant to mimic The Three Stooges.",
        //     imgName: 'RickSanchezHair'
        // },
        {
            title: "Harley Quinn's Pigtails",
            featuredIn: 'Harley Quinn: Birds of Prey',
            wornByActor: 'Margot Robbie',
            realisedDate: 'February 7th, 2020',
            quote: 'If you want boys to respect you, show them you’re serious. Shoot something, blow it up!',
            funFact: "Harley's rollerderby number, 92, is a nod to her first appearance as a character in \"Batman: The Animated Series\" which debuted in 1992.",
            imgName: 'HarleyQuinnHelmet'
        }
    ];
    const [hats] = useState(hats_arr);

    return (
        <section>
            <Header2 hats={hats} index={index} setIndex={setIndex} />
            <div className="info_demo_section">
                <HatDemo hats={hats} index={index} />
                <HatInfo hats={hats} index={index} />
            </div>
        </section>
    );
}

export default HatDetails;
