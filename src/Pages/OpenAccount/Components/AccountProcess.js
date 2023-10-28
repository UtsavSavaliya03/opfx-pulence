import React from 'react';
import './AccountProcess.scss';

export default function AccountProcess() {

  const StepsData = [
    { step: '01', title: 'Open', description: 'Open a FXOpulence account', icon: 'Assets/Images/open-account.svg' },
    { step: '02', title: 'Transfer', description: 'Transfer funds in your account', icon: 'Assets/Images/transfer.svg' },
    { step: '03', title: 'Trade', description: 'Start your trading journey', icon: 'Assets/Images/trade.svg' },
  ]

  return (
    <div className='process-container pb-5'>
      <div className='side-padding'>
        <div className='my-5 pt-5'>
          <div className='title-blue mb-4'>
            <p className='m-0'>Partner with uss</p>
          </div>
          <p className='main-title mb-4'>Partner with the broker that was awarded</p>
        </div>
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
      <div className='side-padding mt-5'>
        <div className='contact-form p-3 p-md-5'>
          <div className='availability-badge mb-4'>
            <p className='m-0'>One of the most trusted platform</p>
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
          <button className='btn-blue-bg py-2 w-100 mt-3'>{`Create Account >`}</button>
          <div className='devider px-5 w-75 mx-auto my-4'></div>
          <div className='bg-light-capsule'>
            <p className='m-0'>We respect your privacy, Read our <span className='text-blue'> privacy policy</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}