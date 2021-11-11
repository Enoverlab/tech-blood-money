import React from 'react'
import styled from 'styled-components'
import Form from './Form'

const SectionTwo = () => {
    return (
        <StyledTwo>

            <h1 className="contain">
                If you act upon the knowledge in this book consistently over the next 3 - 6 months, 
                you will become more valuable with your skills, fast track your career growth in tech, 
                earn as much money as you want and enjoy the freedom and fulfillment to do more good to 
                yourself and others.
            </h1>

            <div className="container">
                <div className="left">
                    <div className="head">
                        What you will learn from "The Blood Money in Tech"
                    </div>


                    <ul className="list">
                        <li><span id='color'></span>The tech industry; what you need to know as a newbie</li>
                        <li><span id='color'></span>Why you need to invest yourself into tech immediately</li>
                        <li><span id='color'></span>The biggest opportunity in the tech industry today and how to take advantage of it</li>
                        <li><span id='color'></span>The 7 MOST IMPORTANT insights you need to thrive in the tech industry</li>
                        <li><span id='color'></span>The common challenges you will most likely face and how to deal with it</li>
                    </ul>

                    <div className="head">
                        Extra benefits of getting "The Blood Money in Tech"
                    </div>

                    <ul className="list">
                        <li><span id='color'></span>A free 15 mins consultation call with the author Olabanji Ewenla regarding anything you'd like to find out about the tech industry</li>
                        <li><span id='color'></span>20% discount off the tuition fee for UIUX design training at Perxels Design School</li>
                        <li><span id='color'></span>20% discount off the tuition fee for Product Management training at Enoverlab</li>
                        <li><span id='color'></span>Direct link to an in-depth course on how to make money online as a freelancer</li>
                        <li><span id='color'></span>Direct link to a detailed course on how to get good-paying remote jobs from Nigeria</li>
                        <li><span id='color'></span>Direct link to get the most demanded course on Affiliate Marketing - 72IG course</li>
                    </ul>

                    <div className="last">
                        Will receive the following benefits in your email after the purchase of the book.
                    </div>

                </div>

                <div className="right">
                    <div className="launch">
                        BOOK IS LAUNCHING <br /><span className='date'>20TH NOVEMBER, 2021</span>
                    </div>
                    <Form />
                </div>
            </div>
            
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
        font-size: 1.8rem;
        font-weight: 600;
        color: #CD2A44;
        line-height: 1.5;
        margin-bottom: 4rem;

        @media (max-width: 768px){
            font-size: 1.25rem;
            line-height: 1.7;
        }
    }

    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 4rem;

        @media (max-width: 768px){
            grid-template-columns: 1fr;
        }

        .last {
            margin-left: 2rem;
            font-size: 1rem;
            font-weight: 700;
            color: #524C4C;
            line-height: 1.5;
            max-width: 379px;

            @media (max-width: 768px){
                margin-left: 0;
            }
        }

        .left {
            .head {
                max-width: 446px;
                font-size: 1.8rem;
                font-weight: 700;
                line-height: 1.4;
                margin-bottom: 2rem;

                @media (max-width: 768px){
                    font-size: 1.4rem;
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
                font-size: 1.8rem;
                color: #0A122A;

                span {
                    color: #FF94A5;
                }
            }
        }
    }
`