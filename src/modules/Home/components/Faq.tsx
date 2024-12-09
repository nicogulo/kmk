import React from 'react';

import Collapse from '@/components/Collapse';
import Container from '@/components/Container';

const Faq = () => {
    const faqItems = [
        {
            question: 'How do I buy/sell cryptocurrencies?',

            answer: 'To buy or sell cryptocurrencies on KMK, simply create an account, complete the KYC verification process, and fund your account using the available deposit methods. Once your account is funded, you can buy or sell cryptocurrencies directly from the trading platform.'
        },
        {
            question: 'Is KMK safe?',
            answer: 'Yes, KMK prioritizes the security of your funds and personal information. We implement industry-standard security measures, including two-factor authentication (2FA), encryption, and cold storage for most of the digital assets. We are also registered and regulated by BAPPEBTI, ensuring we adhere to all legal and safety standards.'
        },
        {
            question: 'What are the fees?',
            answer: 'KMK offers competitive fees, which include trading fees, withdrawal fees, and deposit fees, depending on your selected payment method. Our detailed fee structure can be found on the Fees page. We aim to keep our fees transparent and as low as possible.'
        },
        {
            question: 'How can I contact support?',
            answer: `If you need assistance, you can contact our support team via email at    <a href="mailto:support@kriptomaksima.id">support@kriptomaksima.id</a>, live chat on our website, or our dedicated customer support hotline. We are here to help you 24/7 with any inquiries or issues you may have.`
        }
    ];

    return (
        <div className=' relative  pb-[80px] '>
            <Container className='flex flex-col items-center justify-between gap-9 xl:flex-row'>
                <div className='flex flex-col gap-2'>
                    <span className='text-[40px] font-bold leading-10 text-gray-900'>
                        Do you have more <br />
                        questions?
                    </span>
                    <span className='text-[16px] font-normal leading-6 text-gray-700'>
                        We have collected the most important topics that our <br />
                        customers most often are concerned about. If you still haven't <br />
                        found the answer to your question, please contact our Customer <br />
                        Support
                    </span>
                </div>
                <div className=' xl:w-[548px]'>
                    {faqItems.map((item, index) => {
                        return (
                            <Collapse
                                title={item.question}
                                titleClassName='!text-[16px] !leading-6'
                                className='!border-none'
                                defaultExpanded={index === 0}
                                key={index}
                            >
                                <div className='xs text-gray-600' dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </Collapse>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Faq;
