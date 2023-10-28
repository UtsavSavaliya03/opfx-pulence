import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='side-padding'>
      <div className='devider px-5 my-4 w-75 mx-auto'></div>
        <div className='pt-5 mt-5 row'>
          <div className='text-left col-md-5'>
            <img className='' src='Assets/Logo/Logo.svg' alt='icon' />
            <p className='m-0 footer-main-text'>FXOpulence provides an entirely transparent access to the FOREX Market through powerful trading platform.</p>
            <div className='mt-5 pt-4'>
              <img height={20} width={20} className='mr-4 cursor-pointer' src='Assets/Images/twitter-x-fill.svg' alt='icon' />
              <img height={24} width={24} className='mx-4 cursor-pointer' src='Assets/Images/facebook-fill.svg' alt='icon' />
              <img height={24} width={24} className='mx-4 cursor-pointer' src='Assets/Images/instagram-fill.svg' alt='icon' />
              <img height={24} width={24} className='ml-4 cursor-pointer' src='Assets/Images/linkedin-fill.svg' alt='icon' />
            </div>
          </div>
          <div className='footer-links-container col-md-7 mt-5 mt-md-0'>
            <div className='footer-links mx-2'>
              <p className='mb-2 title'>Instruments</p>
              <p className='mb-2 link'>Forex</p>
              <p className='mb-2 link'>Cryptocurrencies</p>
              <p className='mb-2 link'>Metals</p>
              <p className='mb-2 link'>CFD’s</p>
              <p className='mb-2 link'>Indices</p>
            </div>
            <div className='footer-links mx-2'>
              <p className='mb-2 title'>Platform</p>
              <p className='mb-2 link'>Meta Trader 5</p>
              <p className='mb-2 link'>Account Types</p>
              <p className='mb-2 mt-4 title'>Disclosure</p>
              <p className='mb-2 link'>Risk Disclosure</p>
              <p className='mb-2 link'>Privacy Policy</p>
              <p className='mb-2 link'>Execution Risks</p>
            </div>
            <div className='footer-links mx-2'>
              <p className='mb-2 title'>Quick Links</p>
              <p className='mb-2 link'>About us</p>
              <p className='mb-2 link'>Contact us</p>
              <p className='mb-2 link'>Partner with us</p>
              <p className='mb-2 link'>Blog</p>
            </div>
          </div>
        </div>
        <div className='contact-info-container mt-2 mt-md-5 pt-5'>
          <div className='bg-light-capsule my-3 mr-2'>
            <img height={20} width={20} src='Assets/Images/mail.svg' alt='icon' />
            <p className='m-0 pb-1 pl-2'>support@fxopulence.com</p>
          </div>
          <div className='bg-light-capsule my-3 mx-2'>
            <img height={20} width={20} src='Assets/Images/phone.svg' alt='icon' />
            <p className='m-0 pb-1 pl-2'>+1 (331) 239-4567 <span className='text-green'>(24/7) ●</span></p>
          </div>
          <div className='bg-light-capsule my-3 mx-2'>
            <p className='m-0 pb-1 pl-2'>Shop 2. 132 Epsom Road, Zetland NSW 2017</p>
          </div>
          <div className='my-3 ml-2'>
            <p className='m-0 copy-rights-text'>© 2023, FXOpulence</p>
          </div>
        </div>
        <div className='devider px-5 my-4 w-75 mx-auto'></div>
        <div className='pt-3 mb-5'>
          <div className='warning-card p-2 p-md-3'>
            <p className='title'>General risk warning</p>
            <p className='description m-0'>CFDs are leveraged products. Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss in excess of your initial investment. Under no circumstances shall the Company have any liability to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to any transactions related to CFDs. You should be aware of all the risks associated with foreign exchange trading and seek advice from an independent financial advisor if you have any doubts.</p>
          </div>
          <div className='warning-card p-2 p-md-3 mt-4'>
            <p className='title'>Disclaimer</p>
            <p className='description m-0'>FX OPULENCE PTY LTD is a Corporate Authorised Representative of MGF CAPITAL PTY LTD(CAR number 001302798) who holds an Australian Financial Services Licence issued by the Australian Securities and Investments Commission (ASIC), AFSL no. 421246. FX OPULENCE PTY LTD is not a product issuer of over-the-counter (OTC) derivatives and as such, it will not make a market in such products, nor transact with clients as principal. It is authorised to perform financial services in Australia, to wholesale clients only and limited to the authorisations given to it, and only for Australian residents.</p>
          </div>
        </div>
      </div>
    </div>
  )
}