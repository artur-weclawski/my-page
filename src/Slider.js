import { useState } from "react"

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () =>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex);
    }

    return(
        <div className="sliderContainer">
            <div className="leftArrow" onClick={goToPrevious}> &lt; </div>
            <div className="rightArrow" onClick={goToNext}> &gt; </div>
            <div className="slide">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {slides[currentIndex].title}
            </div>
            
            <div className="dotsContainer">
                {slides.map((slide, slideIndex)=>(
                    <div key = {slideIndex} className="dots" onClick={()=>goToSlide(slideIndex)}>.</div>
                ))}
            </div>
        </div>
    )
}
export default Slider