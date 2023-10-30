import React from 'react';
import './FeatureCard.scss';

export default function FeatureCard(props) {

    const feature = props.data;

    return (
        <div className='feature-card-container px-4 py-5 px-md-5 my-5' style={{backgroundImage: `url(${feature?.bg})`, backgroundPositionX: feature?.x, backgroundPositionY: feature?.y}}>
            <div className='title-blue mb-4'>
                <p className='m-0'>{feature?.title}</p>
            </div>
            <p className='m-0 card-title'>{feature?.tagline}</p>
            <p className='mb-0 mt-3 card-description'>{feature?.description}</p>
        </div>
    )
}
