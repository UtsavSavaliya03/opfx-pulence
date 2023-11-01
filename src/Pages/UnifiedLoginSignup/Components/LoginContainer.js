import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import ApiClient from '../../../Services/ApiClient.js';
import { ToastsStore } from 'react-toasts';

export default function LoginContainer() {

    const [isLoading, setIsLoading] = useState(false);

    const loginInitialValues = {
        web_operation: 'WebContactUs',
        module_name: 'Contacts',
        leadstatus: 'New',
        leadsource: 'Contact us Form',
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .trim()
            .required('Required.'),
        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Provide valid password.')
            .min(8, 'Password is too short')
            .trim()
            .required('Required.'),
    })

    const handleLoginSubmit = () => {

    }

    return (
        <div className='login-area'>
            <div className='mt-3'>
                <p className='title m-0'>Welcome Back</p>
                <p className='tag-line m-0'>Sign in to continue.</p>
                <div className='devider px-5 w-75 mx-auto my-4'></div>
            </div>
            <Formik
                initialValues={loginInitialValues}
                validationSchema={loginSchema}
                onSubmit={async (values, { resetForm }) => {
                    handleLoginSubmit(values, { resetForm });
                }}
            >
                {({ errors, touched }) => (
                    <Form autoComplete="off">
                        <div className='mt-2'>
                            <Field type='email' name='email' className='w-100' placeholder='Email' />
                            <div className='errorMsg'>
                                <p className='m-0 text-danger pe-2'>
                                    {errors.email && touched.email ? (errors.email) : null}
                                </p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <Field type='password' name='password' className='w-100' placeholder='Password' />
                            <div className='errorMsg'>
                                <p className='m-0 text-danger pe-2'>
                                    {errors.password && touched.password ? (errors.password) : null}
                                </p>
                            </div>
                        </div>
                        <button disabled={isLoading} type='submit' className='btn-blue-bg py-2 w-100 mt-3 d-flex justify-content-center align-items-center'>
                            {`Create account >`}
                            {isLoading && <div className='loader ml-4'></div>}
                        </button>
                    </Form>
                )}
            </Formik>
            <div className='bg-light-capsule mt-3'>
                <p className='m-0'>We respect your privacy, Read our <span> privacy policy</span></p>
            </div>
        </div>
    )
}
