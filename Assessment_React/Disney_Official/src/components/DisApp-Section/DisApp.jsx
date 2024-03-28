import React from 'react';
import DisAppImages from './DisAppImages'; // Import your image data
import './DisApp.css'

const DisAppSec = () => {
    const createImages = (Image) => (
        <div key={Image.id} className='ImageCard'>
			<img 
		key={Image.id} 
		src={Image.url} 
		alt={`Image ${Image.id}`}
		
		 />

		 <h1>{Image.title}</h1>
		 <p>{Image.description}</p>
		</div>
    );

    return (
        <div className='DisApp'>
            {DisAppImages.map(createImages)}

        </div>
    );
}

export default DisAppSec;
