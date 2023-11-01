import React from 'react';
import './Partnership.scss';
import OverviewContainer from './Components/OverviewContainer';
import FeatureCard from './Components/FeatureCard';
import IncomeContainer from './Components/IncomeContainer';
import PartnershipContainer from './Components/PrtnershipContainer';
import Layout from '../../Components/Layout/Layout.js';

export default function Partnership() {

    const FeaturesData = [
        { title: 'Trusted', tagline: 'Trusted by global in over 150+ countries', description: 'The deposit system in FXOpulence is extremely fast, wherein traders will use any crypto wallet.', bg: 'Assets/Images/globe-bg.svg', x: 'right', y: 'bottom' },
        { title: 'Payments', tagline: 'Promotional tools & material', description: 'The deposit system in FXOpulence is extremely fast, wherein traders will use any crypto wallet.', bg: 'Assets/Images/payments-bg.svg', x: 'center', y: '85%' },
        { title: 'Analytics', tagline: 'Detailed, realtime statistics', description: 'The deposit system in FXOpulence is extremely fast, wherein traders will use any crypto wallet.', bg: 'Assets/Images/analytics-bg.svg', x: 'center', y: '85%' },
        { title: 'Withdrawal', tagline: 'Instant withdrawals', description: 'The deposit system in FXOpulence is extremely fast, wherein traders will use any crypto wallet.', bg: 'Assets/Images/withdraw-bg.svg', x: 'center', y: '85%' },
    ]

    return (
        <Layout>
            <div className='partnership-container'>
                <div className='side-padding pt-0'>
                    <div className='partnership-bg'>
                        <div className='mb-5 py-5'>
                            <div className='title-blue mb-4 mt-5'>
                                <p className='m-0'>Partnership</p>
                            </div>
                            <p className='main-text mb-4'>Become an introducing broker-boost your earnings</p>
                            <p className='m-0 short-description'>Earn generous commissions and expand your client base with our trusted Brokerage Firm.</p>
                            <div className='mt-5'>
                                <button className='btn-blue-bg'>Become a partner</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <OverviewContainer />
                </div>

                <div className='why-us-container py-5'>
                    <div className='side-padding'>
                        <div className='my-0 my-md-5 pt-3 head'>
                            <div className='text-left w-30 mt-5 mt-md-0'>
                                <p className='head-text mb-4'>Join The Winning Team: Discover The Benefits Of partnering And Earning With FXOpulence!</p>
                                <button className='btn-white-bg mt-3 mt-md-5'>Get Started</button>
                            </div>
                            <div className='mt-4 mt-md-0'>
                                <div className='title-white mb-4'>
                                    <p className='m-0'>Why us</p>
                                </div>
                                <p className='main-title'>Why partner with FXOpulence?</p>
                            </div>
                        </div>
                        <div className='features-container py-5'>
                            {
                                FeaturesData?.map((feature, index) => (
                                    <FeatureCard key={index} data={feature} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <IncomeContainer />
                </div>
                <div>
                    <PartnershipContainer />
                </div>
            </div>
        </Layout>
    )
}
