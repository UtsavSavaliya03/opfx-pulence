import React from 'react';
import './OpenDemoAccount.scss';
import AccountProcess from './Components/AccountProcess.js';
import Layout from '../../Components/Layout/Layout.js';

export default function OpenDemoAccount() {
    return (
        <div>
            <Layout>
                <div className='account-container'>
                    <div className='side-padding'>
                        <div className='my-5 py-5'>
                            <div className='title-blue mb-4'>
                                <p className='m-0'>Start Forex Trading Markets</p>
                            </div>
                            <p className='main-text mb-4'>Forex Demo Account</p>
                            <p className='m-0 short-description'>Experience risk-free trading by opening a forex demo trading account right away!</p>
                        </div>
                    </div>

                    <div>
                        <AccountProcess />
                    </div>
                </div>
            </Layout>
        </div>
    )
}
