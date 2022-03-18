import React, { useState } from 'react'

import styled, { keyframes } from 'styled-components'
import PaymentModal from './PaymentModal'

const Cta = () => {

    const [show, setShow] = useState('')

  return (
    <StyledCta>
        <PaymentModal 
            show={show === 'ebook'} 
            setShow={setShow}
            selar={true}
            paystackLink="https://paystack.com/buy/the-blood-money-in-tech-soft-copy"
            selarLink="https://selar.co/thebloodmoneyintech"
        >
            <p>
                Note: if you have having any challenge with payment on any of the links, 
                do send a mail to <a className='mail' href="mailto:thebloodmoneyintech@gmail.com">thebloodmoneyintech@gmail.com</a>
            </p>
        </PaymentModal>
        <PaymentModal 
            show={show === 'preorder'} 
            setShow={setShow} 
            paystackLink="https://paystack.com/buy/the-blood-money-in-tech-hardcopy"  
            title={true}
        >
            <p>
                Note: Ensure to put in your delivery details correctly.
                Send an email to 
                <a className='mail' href="mailto:thebloodmoneyintech@gmail.com"> thebloodmoneyintech@gmail.com </a>
                or call 
                <a className='mail' href="tel:+2349063124595"> 09063124595 </a>
                if you have any issues.
            </p>
        </PaymentModal>
        <button
            className='button'
            onClick={() => setShow('ebook')}
        >
            Download E-book
        </button>
        <button
            className='button outline'
            onClick={() => setShow('preorder')}
        >
            Order the Hard Copy
        </button>
    </StyledCta>
  )
}

export default Cta

const animate = keyframes`
    0%{
        transform: scale(.95);
    }

    100%{
        transform: scale(1);
    }
`

const StyledCta = styled.section`
    max-width: 100vw;
    padding: 4rem 6%;
    background: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 8rem;
    }

    .button {
        border: none;
        outline: none;
        background: #cd2a44;
        text-decoration: none;
        font-size: 1.875rem;
        font-weight: 700;
        color: #fff;
        padding: 1rem 2.5rem;
        border-radius: 5px;
        margin-top: 3rem;
        animation: ${animate} 1.2s ease-in-out infinite;
        cursor: pointer;
        max-width: 470px;
        display: inline-block;
        border: none;
        outline: none;

        @media (max-width: 768px) {
            display: block;
        }

        &.outline {
            background: transparent;
            border: 2px solid #cd2a44;
            color: #cd2a44;
            margin-left: .5rem;
        }

        &.mobile {
            display: none;
        }

        @media (max-width: 768px) {
            font-size: 1.125rem;
            margin-top: 2rem;

            &.web {
            display: none;
            }

            &.mobile {
            display: block;
            margin-top: -2rem;
            }
        }
    }
`