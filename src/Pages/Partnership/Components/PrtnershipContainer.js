import React from 'react';
import './PrtnershipContainer.scss';

export default function PrtnershipContainer() {

    const StepsData = [
        { step: '01', title: 'Open', description: 'Open a FXOpulence account', icon: 'Assets/Images/open-account.svg' },
        { step: '02', title: 'Funds', description: 'Transfer funds in your account', icon: 'Assets/Images/transfer.svg' },
        { step: '03', title: 'Trade', description: 'Start your trading journey', icon: 'Assets/Images/trade.svg' },
    ]

    return (
        <div className='partner-container py-5'>
            <div className='side-padding'>
                <div className='title-blue mb-4'>
                    <p className='m-0'>Partner with us</p>
                </div>
                <p className='title-text mb-4'>Partner with an <br /> <span>award-winning</span> broker</p>
            </div>
            <div className='position-relative'>
                <div className='connection-line'></div>
                <div className='side-padding'>
                    <div className='step-wrapper'>
                        {
                            StepsData?.map((step, index) => (
                                <div className='process-card p-3 my-3' key={index}>
                                    <div>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <img height={32} width={32} className='mr-4 cursor-pointer' src={step?.icon} alt='icon' />
                                            <p className='step-no m-0'>{step?.step}</p>
                                        </div>
                                        <div className='mt-3'>
                                            <p className='title mb-2 mt-2'>{step?.title}</p>
                                            <p className='description m-0'>{step?.description}</p>
                                        </div>
                                    </div>
                                    <div className='connection-dot'></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='side-padding pt-5 mt-5'>
                <div className='partner-form p-4 p-md-5'>
                    <div className='head'>
                        <div className='blue-badge mb-4'>
                            <p className='m-0'>Spend 60s & Earn Big</p>
                        </div>
                        <div>
                            <p className='title'>Become a Partner</p>
                            <div className='d-flex justify-content-center'>
                                <p className='description'>Best Forex Broking Services Provider and offers a quality trading platform that is accessible</p>
                            </div>
                        </div>
                        <div className='partnership-form'>
                            <div className='py-4'>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-6 px-0 pr-md-2'>
                                        <input className='w-100 mt-3 py-3' placeholder='Name' />
                                    </div>
                                    <div className='col-md-6 px-0 pl-md-2'>
                                        <input type='email' className='w-100 mt-3 py-3' placeholder='Email' />
                                    </div>
                                </div>
                                <div className='row m-0 p-0'>
                                    <div className='col-md-6 px-0 pr-md-2'>
                                        <select className='w-100 mt-4 py-3'>
                                            <option>Country</option>
                                            <option>India</option>
                                            <option>America</option>
                                            <option>Canada</option>
                                        </select>
                                    </div>
                                    <div className='col-md-6 px-0 pl-md-2'>
                                        <input type='number' className='w-100 mt-4 py-3' placeholder='Phone No' />
                                    </div>
                                </div>
                                <input className='w-100 mt-4 py-3' placeholder='Subject' />
                                <button className='btn-blue-bg py-3 mt-5'>Become a partner</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
