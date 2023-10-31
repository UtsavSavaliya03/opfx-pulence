import React, { useState } from 'react';
import './PrtnershipContainer.scss';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import ApiClient from '../../../Services/ApiClient.js';
import { ToastsStore } from 'react-toasts';

export default function PrtnershipContainer() {

    const [isLoading, setIsLoading] = useState(false);
    const StepsData = [
        { step: '01', title: 'Open', description: 'Open a FXOpulence account', icon: 'Assets/Images/open-account.svg' },
        { step: '02', title: 'Funds', description: 'Transfer funds in your account', icon: 'Assets/Images/transfer.svg' },
        { step: '03', title: 'Trade', description: 'Start your trading journey', icon: 'Assets/Images/trade.svg' },
    ]

    const initialValues = {
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
        ticket_title: '',
        description: ''
    }

    const validationSchema = Yup.object().shape({
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
        ticket_title: Yup.string()
            .trim()
            .required('Required.'),
        description: Yup.string()
            .trim()
            .required('Required.'),
    })

    const handleSubmit = (values, { resetForm }) => {
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
        formData.append('ticket_title', values?.ticket_title);
        formData.append('description', values?.description);

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
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { resetForm }) => {
                                        handleSubmit(values, { resetForm });
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form autoComplete='off'>
                                            <div className='row m-0 p-0'>
                                                <div className='col-md-6 px-0 pr-md-2'>
                                                    <Field name='firstname' className='w-100 py-3' placeholder='First Name' />
                                                    <div className='errorMsg'>
                                                        <p className='m-0 text-danger pe-2'>
                                                            {errors.firstname && touched.firstname ? (errors.firstname) : null}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 px-0 pl-md-2'>
                                                    <Field name='lastname' className='w-100 py-3' placeholder='Last Name' />
                                                    <div className='errorMsg'>
                                                        <p className='m-0 text-danger pe-2'>
                                                            {errors.lastname && touched.lastname ? (errors.lastname) : null}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row m-0 p-0'>
                                                <div className='col-md-6 px-0 pr-md-2'>
                                                    <Field name='email' className='w-100 mt-2 py-3' placeholder='Email' />
                                                    <div className='errorMsg'>
                                                        <p className='m-0 text-danger pe-2'>
                                                            {errors.email && touched.email ? (errors.email) : null}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 px-0 pl-md-2'>
                                                    <Field type='number' name='mobile' className='w-100 mt-2 py-3' placeholder='Phone' />
                                                    <div className='errorMsg'>
                                                        <p className='m-0 text-danger pe-2'>
                                                            {errors.mobile && touched.mobile ? (errors.mobile) : null}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row m-0 p-0'>
                                                <div className='col-md-6 px-0 pr-md-2'>
                                                    <Field as='select' name='country_name' className='w-100 mt-2 py-3'>
                                                        <option>Country</option>
                                                        <option>India</option>
                                                        <option>America</option>
                                                        <option>Canada</option>
                                                    </Field>
                                                    <div className='errorMsg'>
                                                        <p className='m-0 text-danger pe-2'>
                                                            {errors.country_name && touched.country_name ? (errors.country_name) : null}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='col-md-6 px-0 pl-md-2'>
                                                    <Field name='city' className='w-100 mt-2 py-3' placeholder='City' />
                                                    <div className='errorMsg'>
                                                        <p className='m-0 text-danger pe-2'>
                                                            {errors.city && touched.city ? (errors.city) : null}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Field name='ticket_title' className='w-100 mt-2 py-3' placeholder='Subject' />
                                            <div className='errorMsg'>
                                                <p className='m-0 text-danger pe-2'>
                                                    {errors.ticket_title && touched.ticket_title ? (errors.ticket_title) : null}
                                                </p>
                                            </div>
                                            <Field as='textarea' name='description' rows={4} className='w-100 mt-2 py-3 py-3' placeholder='Your Message' />
                                            <div className='errorMsg'>
                                                <p className='m-0 text-danger pe-2'>
                                                    {errors.description && touched.description ? (errors.description) : null}
                                                </p>
                                            </div>
                                            <button disabled={isLoading} type='submit' className='btn-blue-bg py-2 mx-auto mt-3 d-flex justify-content-center align-items-center'>
                                                Become a partner
                                                {isLoading && <div className='loader ml-4'></div>}
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
