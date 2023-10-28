import React, { useEffect, useState } from 'react';
import './FaqsContainer.scss';
import { Accordion } from 'react-bootstrap';

export default function FaqsContainer() {

    const FaqData = [
        { question: 'Why Hasn’t My Deposit Been Credited ?', answer: 'Your deposit will be successfully credited once the transaction meets the minimum required network confirmation specified by the Binance system. Please note that the minimum requirement is different for each cryptocurrency.' },
        { question: 'Why Hasn’t My Withdrawal Arrived ?', answer: 'Your deposit will be successfully credited once the transaction meets the minimum required network confirmation specified by the Binance system. Please note that the minimum requirement is different for each cryptocurrency.' },
        { question: 'Why Hasn’t My Withdrawal Arrived ?', answer: 'Your deposit will be successfully credited once the transaction meets the minimum required network confirmation specified by the Binance system. Please note that the minimum requirement is different for each cryptocurrency.' },
        { question: 'How to Find My Transaction ID (TxID) ?', answer: 'Your deposit will be successfully credited once the transaction meets the minimum required network confirmation specified by the Binance system. Please note that the minimum requirement is different for each cryptocurrency.' },
        { question: 'How to Find My Transaction ID (TxID) ?', answer: 'Your deposit will be successfully credited once the transaction meets the minimum required network confirmation specified by the Binance system. Please note that the minimum requirement is different for each cryptocurrency.' },
        { question: 'How Do I Deposit/Withdraw Cryptocurrency on FXO ?', answer: 'Your deposit will be successfully credited once the transaction meets the minimum required network confirmation specified by the Binance system. Please note that the minimum requirement is different for each cryptocurrency.' },
    ]

    return (
        <div className='faqs-container'>
            <div className='side-padding'>
                <div className='my-0 my-md-5 pt-5'>
                    <div className='title-blue'>
                        <p className='m-0'>FAQs</p>
                    </div>
                    <div className='mt-3'>
                        <p className='faq-title mb-4'>Frequently Asked Questions</p>
                        <p className='description'>Most common questions.</p>
                    </div>
                </div>
                <div className='row w-100 m-0 p-0 mb-5'>
                    <Accordion className='col-md-6 w-100 pl-md-0'>
                        {
                            FaqData?.map((question, index) => (
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>{question?.question}</Accordion.Header>
                                    <Accordion.Body>
                                        {question?.answer}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>
                    <Accordion className='col-md-6 pr-md-0'>
                        {
                            FaqData?.map((question, index) => (
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>{question?.question}</Accordion.Header>
                                    <Accordion.Body>
                                        {question?.answer}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
