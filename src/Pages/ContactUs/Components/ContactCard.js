import React from 'react';
import './ContactCard.scss';

export default function ContactCard(props) {

    const { title, value, icon } = props?.data;

    return (
        <div className='contact-card-container pb-3 pt-4 pr-3 my-3'>
            <div className='icon-wrapper'>
                <img height={40} className='cursor-pointer' src={icon} alt='icon' />
            </div>
            <div className='contact-info'>
                <p className='my-3 value'>{value}</p>
                <p className='my-2 title'>{title}</p>
            </div>
        </div>
    )
}