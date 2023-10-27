import React from 'react';
import './Login.scss';

export default function Login() {
    return (
        <div className='login-container'>
            <div className='side-padding'>
                <div className='row my-5 py-5'>
                    <div className='col-md-6 col-lg-7'>
                        <div className=''>
                            <p className='main-text mb-4'>Trade with First Decentralised Forex Brocker</p>
                            <p className='m-0 description'>In a never-before-seen decentralized deposit & Withdrawal style, FXOpulence offers round-the-clock crypto transfers without any human intervention.</p>
                            <div className='shield-container pt-5 mt-md-5'>
                                <img height={40} className='cursor-pointer' src='Assets/Images/shield-icon.svg' alt='icon' />
                                <p className='m-0 ml-2'>73628@&*&WYGd</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-5 pl-lg-5 mt-5 mt-md-0'>
                        <div className='login-form p-5 ml-lg-5'>
                            <p className='main-title'>Welcome Back</p>
                            <p className='title'>Sign in to continue.</p>
                            <div className='devider px-5 w-75 mx-auto my-4'></div>
                            <input className='w-100' placeholder='Email' />
                            <input className='w-100 mt-4' placeholder='Password' />
                            <p className='link mt-2'>Forgot Password</p>
                            <button className='btn-blue-bg py-2 w-100 mt-3'>{`Login >`}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}