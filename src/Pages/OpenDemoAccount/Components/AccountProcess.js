import React, { useState } from 'react';
import './AccountProcess.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ApiClient from '../../../Services/ApiClient.js';
import { ToastsStore } from 'react-toasts';

export default function AccountProcess() {

  const [isLoading, setIsLoading] = useState(false);
  const StepsData = [
    { step: '01', title: 'Open', description: 'Open a FXOpulence account', icon: 'Assets/Images/open-account.svg' },
    { step: '02', title: 'Transfer', description: 'Transfer funds in your account', icon: 'Assets/Images/transfer.svg' },
    { step: '03', title: 'Trade', description: 'Start your trading journey', icon: 'Assets/Images/trade.svg' },
  ]

  const initialValues = {
    web_operation: 'WebDemoaccount',
    module_name: 'DemoAccount',
    metatrader_type: 'MT5',
    demo_label_account_type: 'DEMO_ACCOUNT_LABEL',
    demo_currency_code: 'USD',
    leadstatus: 'Demo Opened',
    leadsource: 'Demo',
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    country_name: '',
    state: '',
    city: '',
    zipcode: '',
    address: '',
    balance: '',
    leverage: '',
  }

  const validationSchema = Yup.object().shape({
    web_operation: Yup.string()
      .trim()
      .required('Required.'),
    module_name: Yup.string()
      .trim()
      .required('Required.'),
    metatrader_type: Yup.string()
      .trim()
      .required('Required.'),
    demo_label_account_type: Yup.string()
      .trim()
      .required('Required.'),
    demo_currency_code: Yup.string()
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
    mobile: Yup.string()
      .trim()
      .max(10)
      .min(10)
      .required('Required.'),
    country_name: Yup.string()
      .trim()
      .required('Required.'),
    state: Yup.string()
      .trim(),
    city: Yup.string()
      .trim(),
    zipcode: Yup.string()
      .trim()
      .max(6)
      .min(6),
    address: Yup.string()
      .trim(),
    balance: Yup.string()
      .trim()
      .required('Required.'),
    leverage: Yup.string()
      .trim()
      .required('Required.'),
  })

  const verifyEmail = async (email) => {
    let formData = new FormData();
    formData.append('web_operation', 'is_contact_exist');
    formData.append('module_name', 'Contacts');
    formData.append('email', email);

    setIsLoading(true);
    return ApiClient.post('form_api.php', formData).then(res => {
      setIsLoading(false);
      return res.success;
    })
  }

  const handleSubmit = async (values, { resetForm }) => {
    if (await verifyEmail(values?.email)) {

      let formData = new FormData();
      formData.append('web_operation', values?.web_operation);
      formData.append('module_name', values?.module_name);
      formData.append('metatrader_type', values?.metatrader_type);
      formData.append('demo_label_account_type', values?.demo_label_account_type);
      formData.append('demo_currency_code', values?.demo_currency_code);
      formData.append('leadstatus', values?.leadstatus);
      formData.append('leadsource', values?.leadsource);
      formData.append('firstname', values?.firstname);
      formData.append('lastname', values?.lastname);
      formData.append('email', values?.email);
      formData.append('mobile', values?.mobile);
      formData.append('country_name', values?.country_name);
      formData.append('state', values?.state);
      formData.append('city', values?.city);
      formData.append('zipcode', values?.zipcode);
      formData.append('address', values?.address);
      formData.append('balance', values?.balance);
      formData.append('leverage', values?.leverage);

      setIsLoading(true);
      ApiClient.post('form_api.php', formData).then(res => {
        if (res.success) {
          ToastsStore.success(res?.success_message?.message);
          setIsLoading(false);
          resetForm();
        } else {
          ToastsStore.error(res?.error?.message);
          setIsLoading(false);
        }
      })
    } else {
      ToastsStore.error('This email is already exist, please try with another!');
    }
  }

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
                    <Field name='firstname' className='w-100' placeholder='First Name' />
                    <div className='errorMsg'>
                      <p className='m-0 text-danger pe-2'>
                        {errors.firstname && touched.firstname ? (errors.firstname) : null}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6 px-0 pl-md-2'>
                    <Field name='lastname' className='w-100' placeholder='Last Name' />
                    <div className='errorMsg'>
                      <p className='m-0 text-danger pe-2'>
                        {errors.lastname && touched.lastname ? (errors.lastname) : null}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row m-0 p-0'>
                  <div className='col-md-6 px-0 pr-md-2'>
                    <Field name='email' className='w-100 mt-2' placeholder='Email' />
                    <div className='errorMsg'>
                      <p className='m-0 text-danger pe-2'>
                        {errors.email && touched.email ? (errors.email) : null}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6 px-0 pl-md-2'>
                    <Field type='number' min={1} name='mobile' className='w-100 mt-2' placeholder='Phone' />
                    <div className='errorMsg'>
                      <p className='m-0 text-danger pe-2'>
                        {errors.mobile && touched.mobile ? (errors.mobile) : null}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row m-0 p-0'>
                  <div className='col-md-6 px-0 pr-md-2'>
                    <Field as='select' name='country_name' className='w-100 mt-2'>
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
                    <Field name='state' className='w-100 mt-2' placeholder='State' />
                    <div className='errorMsg'>
                      <p className='m-0 text-danger pe-2'>
                        {errors.state && touched.state ? (errors.state) : null}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row m-0 p-0'>
                  <div className='col-md-6 px-0 pr-md-2'>
                    <Field name='city' className='w-100 mt-2' placeholder='City' />
                    <div className='errorMsg'>
                      <p className='m-0 text-danger pe-2'>
                        {errors.city && touched.city ? (errors.city) : null}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6 px-0 pl-md-2'>
                    <Field type='number' name='zipcode' className='w-100 mt-2' placeholder='Zip Code' />
                    <div className='errorMsg'>
                      <p className='m-0 text-danger pe-2'>
                        {errors.zipcode && touched.zipcode ? (errors.zipcode) : null}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row m-0 p-0'>
                  <div className='col-12 p-0'>
                    <Field name='address' className='w-100 mt-2 mb-0' placeholder='Address' />
                    <div className='errorMsg'>
                      <p className='m-0 text-danger pe-2'>
                        {errors.address && touched.address ? (errors.address) : null}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row m-0 p-0'>
                  <div className='col-md-6 px-0 pr-md-2'>
                    <Field as='select' name='balance' className='w-100 mt-2'>
                      <option>Balance</option>
                      <option>1000</option>
                      <option>10000</option>
                      <option>100000</option>
                      <option>1000000</option>
                    </Field>
                    <div className='errorMsg'>
                      <p className='m-0 text-danger pe-2'>
                        {errors.balance && touched.balance ? (errors.balance) : null}
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6 px-0 pl-md-2'>
                    <Field as='select' name='leverage' className='w-100 mt-2'>
                      <option>Leverage</option>
                      <option>100</option>
                      <option>200</option>
                      <option>300</option>
                      <option>400</option>
                      <option>500</option>
                    </Field>
                    <div className='errorMsg'>
                      <p className='m-0 text-danger pe-2'>
                        {errors.leverage && touched.leverage ? (errors.leverage) : null}
                      </p>
                    </div>
                  </div>
                </div>
                <button disabled={isLoading} type='submit' className='btn-blue-bg py-2 w-100 mt-3 d-flex justify-content-center align-items-center'>
                  {`Create Demo Account >`}
                  {isLoading && <div className='loader ml-4'></div>}
                </button>
              </Form>
            )}
          </Formik>
          <div className='devider px-5 w-75 mx-auto my-4'></div>
          <div className='bg-light-capsule'>
            <p className='m-0'>We respect your privacy, Read our <span className='text-blue'> privacy policy</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}