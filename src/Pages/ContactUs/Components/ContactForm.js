import React from 'react';
import './ContactForm.scss';

export default function ContactForm() {
    return (
        <div className='contact-form-container'>
            <div className='side-padding'>
                <div className='row my-5 py-5'>
                    <div className='col-md-6 col-lg-7'>
                        <div>
                            <div className='title-blue'>
                                <p className='m-0'>We’re 24/7 Online</p>
                            </div>
                            <div className='mt-3'>
                                <p className='contact-title mb-4'>Get in touch with our team</p>
                                <p className='description'>Send us your queries</p>
                            </div>
                        </div>
                        <div className='help-container mt-5 pt-md-4'>
                            <p className='title mb-4'>Our Team Can help you with</p>
                            <div className='d-flex align-items-center mb-2'><img className='mr-3' src='Assets/Images/true-badge.svg' alt='icon' /><p className='m-0 help-text'>Account Setup</p></div>
                            <div className='d-flex align-items-center mb-2'><img className='mr-3' src='Assets/Images/true-badge.svg' alt='icon' /><p className='m-0 help-text'>Issues with trading</p></div>
                            <div className='d-flex align-items-center mb-2'><img className='mr-3' src='Assets/Images/true-badge.svg' alt='icon' /><p className='m-0 help-text'>Account related queries</p></div>
                            <div className='d-flex align-items-center mb-2'><img className='mr-3' src='Assets/Images/true-badge.svg' alt='icon' /><p className='m-0 help-text'>Any Spam Activities</p></div>
                        </div>
                        <div className='pt-5 location-info'>
                            <div className='d-flex align-items-center'>
                                <img className='mr-3' src='Assets/Images/location-flag.svg' alt='icon' />
                                <p className='title m-0'>Location</p>
                            </div>
                            <div className='mt-3'>
                                <p className='address'>Shop 2. 132 Epsom Road,<br />Zetland NSW 2017, Australia</p>
                            </div>
                            <div>
                                <p className='title m-0'>Follow us on</p>
                                <div className='mt-3 text-left'>
                                    <img height={24} width={24} className='mr-4 cursor-pointer' src='Assets/Images/facebook-blue.svg' alt='icon' />
                                    <img height={20} width={20} className='mx-4 cursor-pointer' src='Assets/Images/twitter-blue.svg' alt='icon' />
                                    <img height={24} width={24} className='mx-4 cursor-pointer' src='Assets/Images/linkedin-blue.svg' alt='icon' />
                                    <img height={24} width={24} className='ml-4 cursor-pointer' src='Assets/Images/instagram-blue.svg' alt='icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-5 pl-lg-5 mt-5 mt-md-0'>
                        <div className='contact-form py-5 px-4 ml-lg-5'>
                            <div className='availability-badge mb-4'>
                                <p className='m-0'>Available 24/7</p>
                            </div>
                            <input className='w-100' placeholder='Full Name' />
                            <div className='row m-0 p-0'>
                                <div className='col-md-6 px-0 pr-md-2'>
                                    <input className='w-100 mt-3' placeholder='Email' />
                                </div>
                                <div className='col-md-6 px-0 pl-md-2'>
                                    <input className='w-100 mt-3' placeholder='Phone' />
                                </div>
                            </div>
                            <div className='row m-0 p-0'>
                                <div className='col-md-6 px-0 pr-md-2'>
                                    <select className='w-100 mt-3'>
                                        <option>Country</option>
                                        <option>India</option>
                                        <option>America</option>
                                        <option>Canada</option>
                                    </select>
                                </div>
                                <div className='col-md-6 px-0 pl-md-2'>
                                    <input className='w-100 mt-3' placeholder='City' />
                                </div>
                            </div>
                            <input className='w-100 mt-3' placeholder='Subject' />
                            <textarea rows={4} className='w-100 mt-3' placeholder='Your Message' />
                            <button className='btn-blue-bg py-2 w-100 mt-3'>{`Submit now >`}</button>
                            <div className='devider px-5 w-75 mx-auto my-4'></div>
                            <div className='bg-light-capsule'>
                                <p className='m-0'>We respect your privacy, Read our <span className='text-blue'> privacy policy</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}