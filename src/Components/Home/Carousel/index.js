import React, {useState, useEffect} from 'react'
import { CarouselData } from '../../../constants/carouselData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Carousel.css'


const Carousel = () => {
    const [slides, setSlides] = useState(CarouselData)
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        const lastIndex = slides.length - 1
        if(index < 0){
            setIndex(lastIndex)
        }
        if (index > lastIndex ){
            setIndex(0)
        }
    }, [index, slides])

    useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

    return (
        <section className="section">
            <div className="section-center">
            <button className="prev" onClick={() => setIndex(index - 1)}>
            <ArrowBackIosIcon className="prev-icon"/>
            <ArrowBackIosIcon className="prev-icon-alt"/>
            </button>

            {
                CarouselData.map((carousel, carouselIndex) => {
                    const {id, img} = carousel
                    //assume position is next slide
                    let position = "nextSlide" 
                    
                    //check if current position
                    if(carouselIndex === index){
                        position = "activeSlide";
                    }
                    //check if it is the last slide
                    if(carouselIndex === index - 1 || (index === 0 && carouselIndex === slides.length - 1)){ position = "lastSlide"}
                    
                    return (
											<article key={id} className={position}>
												<img
													src={img}
													alt={`slide ${carouselIndex}`}
													className="slide-img"
												/>
												<div className="img-mask" />
											</article>
										);
                })
            }

            <button className="next" onClick={() => setIndex(index + 1)}>
                <ArrowForwardIosIcon className="next-icon"/>
                <ArrowForwardIosIcon className="next-icon-alt"/>
            </button>
            
            </div>
        </section>
    )
}

export default Carousel
