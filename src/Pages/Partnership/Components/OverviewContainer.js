import React from 'react';
import './OverviewContainer.scss';

export default function OverviewContainer() {
  return (
    <div className='overview-container pb-5'>
      <div className='side-padding'>
        <div className='my-5 pt-5 head'>
          <div>
            <div className='title-blue mb-4'>
              <p className='m-0'>Overview</p>
            </div>
            <p className='main-title'>The FXOpulence earning advantage</p>
          </div>
          <div className='text-right w-30 mt-5 mt-md-0'>
            <p className='overview-head-text mb-4'>Unlock Unlimited Earning Potential By Partnerning With FXOpulence</p>
            <button className='btn-blue-bg mt-5'>Get Started</button>
          </div>
        </div>
        <div className='row m-0 p-0 pt-4'>
          <div className='col-md-6'>
            <div className='description my-5 mr-0 mr-md-5'>
              <p>Leverage your network and expertise to connect <span> potential clients</span> with our brokerage's trading platform and services. Earn <span> lucrative commissions </span>on the trades your clients make and add up to a significant source of <span>passive income</span> over time.</p>
            </div>
            <div className='program-card p-5 mr-0 mr-md-5'>
              <div className='badge-wrapper'>
                <div className='program-badge py-2 px-3'>
                  <img height={20} className='cursor-pointer' src='Assets/Images/new-tag.svg' alt='icon' />
                  <p className='m-0 ml-2'>Affiliate Program</p>
                </div>
              </div>
              <p className='title m-0 mt-4'>Best Industry Pay Structure</p>
              <div className='devider px-5 my-5 w-75 mx-auto'></div>
              <p className='description m-0'>Earn lucrative commissions per qualified trader that you refer to our platform and maximize your earnings.</p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='program-card p-5 ml-0 ml-md-5'>
              <div className='badge-wrapper'>
                <div className='program-badge py-2 px-3'>
                  <p className='m-0 ml-2'>IB Program</p>
                </div>
              </div>
              <p className='title m-0 mt-4'>Opportunity To Reap 2X Commissions</p>
              <div className='devider px-5 my-5 w-75 mx-auto'></div>
              <p className='description m-0'>Enhance your earning potential by 2X as you expand your client base, and your trading volume increases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
