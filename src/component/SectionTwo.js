import React from 'react'
import styled from 'styled-components'
import Form from './Form'

import Reviews from './Reviews'

const SectionTwo = () => {
    return (
        <StyledTwo>

            {/* <h1 className="contain">
                If you act upon the knowledge in this book consistently over the next 3 - 6 months, 
                you will become more valuable with your skills, fast track your career growth in tech, 
                earn as much money as you want and enjoy the freedom and fulfillment to do more good to 
                yourself and others.
            </h1> */}

            <div className="container">
                <div className="left">
                    <div className="head">
                        Below are what you will achieve when you implement the insights in "The Blood Money in Tech"
                    </div>


                    <ul className="list">
                        <li><span id='color'></span>You will get a job in tech within the next 3-6 months</li>
                        <li><span id='color'></span>You can start to earn atleast N100,000 within 3-6 months as a newbie in tech</li>
                        <li><span id='color'></span>You can scale that N100,000 to between N300,000-N500,000 in 12-18 months if you keep expanding on the insights you've learnt</li>
                        <li><span id='color'></span>You can hit N1,000,000+ in 2-3 years if you are consistent with improving yourself, your knowledge and your skills</li>
                        <li><span id='color'></span>You will get jobs that you can choose to work from home around your family and the people that you love</li>
                        <li><span id='color'></span>Instead of you applying for jobs, you will know how to reposition yourself so that jobs come to you and you are the one who decides what job you want and what job you don't want</li>
                        <li><span id='color'></span>Aside from money, you will fast track your career growth in any job or field in tech; what would normally take others 5 years to achieve, you will achieve in 2-3years</li>
                        <li><span id='color'></span>You will become a tech bro or tech sis</li>
                        <li><span id='color'></span>You will be able to join and work with any team that is creating and building products to solve problems for people, nation's and the world at large</li>
                        <li><span id='color'></span>You will become more valuable, relevant and respected in any place of work you find yourself</li>
                        <li><span id='color'></span>You will enjoy the freedom that comes with earning more than enough money to meet your regular needs and wants, to the point where you can begin to live your life on your own terms and enjoy the good things of life</li>
                    </ul>

                    {/* <div className="head">
                        Extra benefits of getting "The Blood Money in Tech"
                    </div>

                    <ul className="list">
                        <li><span id='color'></span>A free 15 mins consultation call with the author, Olabanji Ewenla, regarding anything you'd like to find about the tech industry.</li>
                        <li><span id='color'></span>20% discount off the tuition fee for UIUX design training at Perxels Design School</li>
                        <li><span id='color'></span>20% discount off the tuition fee for Product Management training at Enoverlab</li>
                        <li><span id='color'></span>Direct link to an in-depth course on how to make money online as a freelancer</li>
                        <li><span id='color'></span>Direct link to a detailed course on how to get good-paying remote jobs from Nigeria</li>
                    </ul> */}

                    {/* <div className="last mobile">
                        You will receive the following benefits in your email after the purchase of the book.
                    </div> */}
                </div>

                <Reviews />

                <div className="right">
                    <div className="launch">
                        Paperback hard copies are coming soon!
                    </div>
                    <Form />
                </div>
            </div>
            {/* <div className="last web">
                You will receive the following benefits in your email after the purchase of the book.
            </div> */}
            
        </StyledTwo>
    )
}

export default SectionTwo
const StyledTwo = styled.section`
    max-width: 100vw;
    padding: 4rem 6%;

    @media (max-width: 768px) {
        padding: 1rem 6%;
        margin-top: 3rem;
    }

    h1.contain {
        max-width: 1166px;
        font-size: 1.4rem;
        font-weight: 600;
        color: #CD2A44;
        line-height: 1.5;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 6rem;


        @media (max-width: 768px){
            font-size: 1.1rem;
            line-height: 1.5;
            text-align: left;
            margin-bottom: 3rem;
        }
    }

    .last {
        margin-left: 2rem;
        font-size: .9rem;
        font-weight: 700;
        color: #524C4C;
        line-height: 1.5;

        &.mobile {
            display: none;

            @media (max-width: 768px) {
                display: block;
                font-size: 1rem;
            }
        }

        &.web {
            display: block;

            @media (max-width: 768px) {
                display: none;
            }
        }

        @media (max-width: 768px){
            margin-left: 0;
        }
    }

    .container {
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 4rem;

        @media (max-width: 768px){
            grid-template-columns: 100%;
            grid-gap: 1rem;
        }


        .left {
            width: 100%;

            .head {
                max-width: 446px;
                font-size: 1.5rem;
                font-weight: 700;
                line-height: 1.4;
                margin-bottom: 2rem;
                /* color: #CD2A44; */

                @media (max-width: 768px){
                    font-size: 1.1rem;
                    line-height: 1.5;
                }
            }

            ul {
                list-style: none;
                margin-left: 2rem;
                margin-bottom: 4rem;

                @media (max-width: 768px){
                    margin-left: 0;
                }

                li {
                    font-size: 1.125rem;
                    font-weight: 400;
                    color: #524C4C;
                    line-height: 1.5;
                    margin-bottom: 1rem;
                    display: grid;
                    align-items: center;
                    grid-template-columns: 1fr 96%;

                    @media (max-width: 768px){
                        font-size: 1rem;

                    }

                    span {
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        background: #CD2A44;
                        margin-right: 1rem;
                    }
                }
            }
        }


        .right {
            width: 100%;
            margin-top: 3rem;

            .launch {
                display: block;
                text-align: center;
                font-weight: 700;
                font-size: 1.5rem;
                color: #0A122A;

                span {
                    color: #FF94A5;
                }
            }
        }
    }
`