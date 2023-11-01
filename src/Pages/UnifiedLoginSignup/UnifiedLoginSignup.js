import React, { useState } from 'react';
import './UnifiedLoginSignup.scss';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import ApiClient from '../../Services/ApiClient.js';
import { ToastsStore } from 'react-toasts';
import SignupContainer from './Components/SignupContainer';
import LoginContainer from './Components/LoginContainer';

export default function UnifiedLoginSignup() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const signupInitialValues = {
        web_operation: 'WebContactUs',
        module_name: 'Contacts',
        leadstatus: 'New',
        leadsource: 'Contact us Form',
        firstname: '',
        lastname: '',
        email: '',
        country_name: '',
        city: '',
        mobile: '',
        userPwd: '',
        userConfirmPwd: '',
        affiliate_code: ''
    }

    const loginInitialValues = {
        web_operation: 'WebContactUs',
        module_name: 'Contacts',
        leadstatus: 'New',
        leadsource: 'Contact us Form',
        loginEmail: '',
        password: ''
    }

    const signupValidationSchema = Yup.object().shape({
        web_operation: Yup.string()
            .trim()
            .required('Required.'),
        module_name: Yup.string()
            .trim()
            .required('Required.'),
        leadstatus: Yup.string()
            .trim()
            .required('Required.'),
        leadsource: Yup.string()
            .trim()
            .required('Required.'),
        firstname: Yup.string()
            .trim()
            .required('Required.'),
        lastname: Yup.string()
            .trim()
            .required('Required.'),
        email: Yup.string()
            .email('Invalid email address.')
            .trim()
            .required('Required.'),
        country_name: Yup.string()
            .trim()
            .required('Required.'),
        city: Yup.string()
            .trim()
            .required('Required.'),
        mobile: Yup.string()
            .trim()
            .max(10)
            .min(10)
            .required('Required.'),
        userPwd: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                'Password must be alphanumeric.')
            .min(8, 'Password is too short.')
            .trim()
            .required('Required'),
        userConfirmPwd: Yup.string()
            .oneOf([Yup.ref('userPwd'), null], 'Passwords must be same')
            .min(8, 'Password is too short.')
            .trim()
            .required('Required'),
        affiliate_code: Yup.string()
            .trim()
            .required('Required.')
    })

    const loginSchema = Yup.object().shape({
        loginEmail: Yup.string()
            .email('Invalid email address')
            .trim()
            .required('Required.'),
        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Provide valid password.')
            .min(8, 'Password is too short')
            .trim()
            .required('Required.'),
    })

    const handleSignupSubmit = (values, { resetForm }) => {
        let formData = new FormData();
        formData.append('web_operation', values?.web_operation);
        formData.append('module_name', values?.module_name);
        formData.append('leadstatus', values?.leadstatus);
        formData.append('leadsource', values?.leadsource);
        formData.append('firstname', values?.firstname);
        formData.append('lastname', values?.lastname);
        formData.append('email', values?.email);
        formData.append('country_name', values?.country_name);
        formData.append('city', values?.city);
        formData.append('mobile', values?.mobile);

        setIsLoading(true);
        ApiClient.post('form_api.php', formData).then(res => {
            if (res.success) {
                ToastsStore.success(res?.success_message?.message);
                setIsLoading(false);
                resetForm();
            } else {
                setIsLoading(false);
                resetForm();
            }
        })
    }

    const handleLoginSubmit = () => {

    }

    return (
        <div className='login-signup-container p-4 p-md-5'>
            <div className='head'>
                <img onClick={() => navigate('/')} className='cursor-pointer' src='Assets/Logo/Logo.svg' alt='icon' />
            </div>
            <div className='body'>
                <div className='row m-0 p-0'>
                    <div className='col-md-5 px-0'>
                        <div className='d-flex align-items-center h-100'>
                            <div>
                                <p className='main-text mb-4'>Trade with First Decentralised Forex Brocker</p>
                                <p className='m-0 description'>In a never-before-seen decentralized deposit & Withdrawal style.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 mt-5 mt-md-0 px-0'>
                        <div className='form-side-padding'>
                            <div className='form-container px-3 px-md-5 py-4'>
                                <div className='slider-container row m-0 col-0'>
                                    <button disabled={isLoading} className={`col-6 ${isLogin ? 'btn-active' : null}`} onClick={() => setIsLogin(!isLogin)}>Login</button>
                                    <button disabled={isLoading} className={`col-6 ${!isLogin ? 'btn-active' : null}`} onClick={() => setIsLogin(!isLogin)}>Sign up</button>
                                </div>
                                {
                                    isLogin ? (
                                        <LoginContainer />
                                    ) : (
                                        <SignupContainer />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
