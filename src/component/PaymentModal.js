import React from 'react'

import styled from 'styled-components'

const PaymentModal = ({ show, setShow }) => {
    return (
        <StyledPaymentModal className={show ? 'active' : ''}>
            <div onClick={() => setShow(!show)} className='overlay' />
            <div className="content">
                <a rel="noreferrer" target="_blank" className='purple' href="https://selar.co/thebloodmoneyintech">Pay with Selar</a>
                <a rel="noreferrer" target="_blank" className='blue' href="https://paystack.com/buy/the-blood-money-in-tech-zkialb">Pay with Paystack</a>
                {/* <a className='yellow' href="">Pay with Flutterwave</a> */}
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

        a {
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