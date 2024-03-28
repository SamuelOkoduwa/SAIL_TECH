import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './HeroSection.css'
import sliderImages from "./sliderImage";

function HeroSection() {


	const [imageNum, setImageNum] = useState(1)
	return(
		<div className="heroSection">
			 {/* <h3>
            {" "}
            Creating the image slider using the react-simple-image-slider
         	</h3> */}
         	<SimpleImageSlider 
            	width={1200}
            	height={700}
            	images={sliderImages}
            	showNavs={true}
				autoPlay={true} 
				showBullets={true}
            	onStartSlide = {(index, length) => {
               	setImageNum(index);
            	}}
				autoPlayDelay = {5}
         	/>




		</div>
	)
}

export default HeroSection