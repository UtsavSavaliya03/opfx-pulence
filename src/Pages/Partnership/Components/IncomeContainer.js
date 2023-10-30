import React from 'react';
import './IncomeContainer.scss';

export default function IncomeContainer() {
    return (
        <div className='income-container py-5 mb-'>
            <div className='side-padding mt-5'>
                <div className='head'>
                    <div>
                        <div className='title-blue mb-4'>
                            <p className='m-0'>Overview</p>
                        </div>
                        <p className='main-title'>Manifold Your Income</p>
                    </div>
                    <div className='text-right w-30 mt-5 mt-md-0'>
                        <p className='overview-head-text mb-4'>With the assistance of our devoted account managers, you can earn lucrative incentives on referrals.</p>
                        <button className='btn-blue-bg mt-5'>Become a Partner</button>
                    </div>
                </div>
                <div className='blue-capsule my-5'>
                    <div className='d-flex align-items-center my-2'><img className='mr-2' src='Assets/Images/true-badge.svg' alt='icon' /><p className='m-0'>Receive robust support and resources</p></div>
                    <div className='d-flex align-items-center my-2'><img className='mr-2' src='Assets/Images/true-badge.svg' alt='icon' /><p className='m-0'>Associate with a reputed and credible broker</p></div>
                    <div className='d-flex align-items-center my-2'><img className='mr-2' src='Assets/Images/true-badge.svg' alt='icon' /><p className='m-0'>World-class technology that works for you</p></div>
                </div>
            </div>
        </div>
    )
}
