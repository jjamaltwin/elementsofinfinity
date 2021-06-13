import React, {useState} from 'react';
import { CarouselData } from './CarouselData';
import {FaArrowAltCircleRight,  FaArrowAltCircleLeft} from "react-icons/fa";


const Carousel = ({slides}) => {
 const [current, setCurrent] = useState(0)
 const length = slides.length

 const nextslide = () => {
     setCurrent (current === length - 1 ? 0 : current + 1);
 };

 const prevslide = () => {
     setCurrent(current === 0 ? length -1 : current -1)
 }

console.log(current);

 if (!Array.isArray(slides) || slides.length <= 0) {
     return null;
 }

    return (
        <section className="slider">
            <FaArrowAltCircleRight className="rightarrow" onClick={nextslide} />
            <FaArrowAltCircleLeft className="leftarrow" onClick={prevslide} />
            {CarouselData.map((slide, index) => {
                return (
                    <div className={index === current ? "sllide active" : slide} key={index}>
                        {index === current && (<img src={slide.images} alt="slidepic" className="image"/>)}
                        
                    </div>

            )     
                   })}   
        </section>
        
    );
};



export default Carousel
