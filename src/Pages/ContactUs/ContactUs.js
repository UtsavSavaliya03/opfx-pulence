import React from 'react';
import './ContactUs.scss';
import ContactCard from './Components/ContactCard';
import FaqsContainer from './Components/FaqsContainer';
import ContactForm from './Components/ContactForm';

export default function ContactUs() {

    const ContactData = [
        { title: 'Call Support', value: '+1 (331) 239-4567', icon: 'Assets/Images/phone-blue.svg' },
        { title: 'Raise a ticket', value: 'support@fxopulence.com', icon: 'Assets/Images/mail-blue.svg' },
        { title: 'Read most common questions', value: 'Read FAQs', icon: 'Assets/Images/global-blue.svg' }
    ]

    return (
        <div className='contact-us-container'>
            <div className='side-padding'>
                <div className='head mt-5 pt-5'>
                    <div className='title-blue'>
                        <p className='m-0'>Contact</p>
                    </div>
                    <div className='mt-4s'>
                        <p className='main-text mb-4'>Support Center</p>
                        <p className='m-0 description'>Get support from our specialists.</p>
                    </div>
                </div>
                <div className='contact-card-wrapper my-0 py-5 my-md-5'>
                    {
                        ContactData?.map((item, index) => (
                            <ContactCard key={index} data={item} />
                        ))
                    }
                </div>
            </div>
            <div>
                <FaqsContainer />
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    )
}
