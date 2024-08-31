import Collapse from '@/components/Collapse';
import Container from '@/components/Container';
import React from 'react';

const Faq = () => {
    const faqItems = [
        {
            question: 'How do I buy/sell cryptocurrencies?',

            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, pariatur?'
        },
        {
            question: 'Is Binaloka safe?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, pariatur?'
        },
        {
            question: 'What are the fees?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, pariatur?'
        },
        {
            question: 'How can I contact support?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, pariatur?'
        }
    ];

    return (
        <div className=' relative bg-gray-800 pb-[80px] '>
            <Container className='flex flex-row items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <span className='text-[40px] font-bold leading-10 text-white'>
                        Do you have more <br />
                        questions?
                    </span>
                    <span className='text-[16px] font-normal leading-6 text-gray-300'>
                        We have collected the most important topics that our <br />
                        customers most often are concerned about. If you still haven't <br />
                        found the answer to your question, please contact our Customer <br />
                        Support
                    </span>
                </div>
                <div className='w-[548px] rounded-2xl bg-gray-900 p-8'>
                    {faqItems.map((item, index) => {
                        return (
                            <Collapse
                                title={item.question}
                                titleClassName='!text-white !text-[16px] !leading-6'
                                className='!border-none'
                                defaultExpanded={index === 0}
                            >
                                <span className='xs text-gray-300'> {item.answer}</span>
                            </Collapse>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Faq;
