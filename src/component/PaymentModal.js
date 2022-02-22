import React from 'react'

import styled from 'styled-components'

const PaymentModal = ({ children, show, setShow, selar, paystackLink, selarLink, title }) => {
    return (
        <StyledPaymentModal className={show ? 'active' : ''}>
            <div onClick={() => setShow(!show)} className='overlay' />
            <div className="content">
                <h4>
                    {title ? "You are paying for the book’s hard copy" : "Limited Time Offer!!!"} <br />
                    {selar && (
                        <>
                            Pay <b>N2,000</b> instead of <span>N5,000</span>
                        </>
                    )}
                </h4>
                {selar &&
                    <a rel="noreferrer" target="_blank" className='link purple' href={selarLink}>Pay with Selar</a>
                }
                <a rel="noreferrer" target="_blank" className='link blue' href={paystackLink}>Pay with Paystack</a>

                {children}
            </div>
        </StyledPaymentModal>
    )
}

export default PaymentModal

const StyledPaymentModal = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .4);
    align-items: center;
    justify-content: center;
    z-index: 4;
    display: none;

    &.active {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .content {
        position: relative;
        z-index: 1;
        width: 100%;
        margin: 3rem;
        max-width: 500px;
        height: 100%;
        max-height: 400px;
        background: #fff;
        border-radius: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        @media (max-width: 768px) {
            margin: 1rem;
        }

        h4 {
            font-size: 1.5rem;
            font-weight: 500;
            text-align: center;
            line-height: 1.5;
            margin-bottom: 2rem;
            color: #000;
            max-width: 400px;
            text-align: center;

            @media (max-width: 768px) {
                font-size: 1.25rem;
            }

            b {
                font-weight: 700;
            }

            span {
                text-decoration: line-through;
            }
        }

        p {
            padding: 0 1.5rem;
            font-size: .8rem;
            line-height: 1.7;
            color: #000;
            text-align: center;

            @media (max-width: 768px) {
                padding: 0 .75rem;
                font-size: .7rem;
            }

            a {
                text-decoration: none;
                color: #000;
                font-weight: 600;
                cursor: pointer;
            }
        }

        .link {
            padding: .875rem 2rem;
            background:  #cd2a44;
            color: #fff;
            font-size: 1.25rem;
            text-decoration: none;
            font-weight: 600;
            width: 100%;
            max-width: 300px;
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: .35rem;

            &.purple {
                background: #5A0B4D;
            }

            &.blue {
                background: #00C3F7;
            }

            &.yellow {
                background: #F5A623;
            }

            &:last-child {
                margin-bottom: 0;
            }

            &:hover {
                transform: scale(1.03);
                transition: transform .3s ease-in-out;
            }
        }
    }
`