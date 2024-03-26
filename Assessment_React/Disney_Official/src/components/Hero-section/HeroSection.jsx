import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './HeroSection.css'
import sliderImages from "./sliderImage";

function HeroSection() {
	// const sliderImages = [
	// 	{
	// 	   url: "https://lumiere-a.akamaihd.net/v1/images/frozen10_img3_2ac9a325.png?region=0,0,1200,677&width=480",
	// 	},
	// 	{
	// 	   url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQduUpBWhSdgkWqqIrSmw5MMU697Xlx3SCjlB4eZSv0Q&s",
	// 	},
	// 	{
	// 	   url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTnzApyh1ZmbXLBUg_iFRio23hzRyAJfwBRfnVozXdEnu-NK4jFt2_gsYujKf-CbT6Cr_A&usqp=CAU",
	// 	},
	// 	{
	// 	   url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTDnfOIY9gjVyoT4ulMp55roiV5KefqaDByUc0HdD8p3tdpXuwxTaXjhLdyUFeQzZ2ZwE&usqp=CAU",
	// 	},
	// 	{
	// 	   url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
	// 	},
	// 	{
	// 	   url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
	// 	},
	// 	{
	// 	   url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
	// 	},
	//  ];

	const [imageNum, setImageNum] = useState(1)
	return(
		<div className="heroSection">
			 {/* <h3>
            {" "}
            Creating the image slider using the react-simple-image-slider
         	</h3> */}
         	<SimpleImageSlider 
            	width={1200}
            	height={500}
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