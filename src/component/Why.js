import React from 'react'

import styled from 'styled-components'

const Why = () => {
  return (
    <StyledWhy>
        <h3>Why you should read “The Blood Money in Tech” today</h3>

        <p>
            EVERYTHING YOU NEED TO THRIVE IN TECH IS HERE! <br /><br />

            Coming into tech and building a career in tech can seem daunting due to the 
            countless information you would see online or hear from different people - 
            one person tells you A and another tells you B; a website online says C 
            and another says D. <br />
            The end result of all this different information is that you are left more 
            confused about what to do and how to go about the entire process.<br /><br />

            So instead of wasting time, money and energy trying to figure out the tech 
            industry all by yourself, Olabanji Ewenla has combined his personal experience 
            with the experience of other amazing tech talents who are doing very well in 
            the industry - he has narrowed down and structured everything you need into 
            this book “The Blood Money in Tech”. <br />
            In the book, you will discover the 7 Most Important insights you need to thrive 
            in the tech industry and how to implement them.<br /><br />

            If you act upon the knowledge in this book consistently over the next 3 - 6 
            months, you will become more valuable with your skills, fast track your career 
            growth in tech, earn as much money as you want and enjoy the intense freedom 
            and fulfillment to do more good to yourself and others. 
        </p>
    </StyledWhy>
  )
}

export default Why

const StyledWhy = styled.section`
    width: 100%;
    padding: 4rem 6%;
    background: #fff;

    h3 {
        font-size: 2rem;
        font-weight: 700;
        color: #cd2a44;
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
        @media only screen and (max-width: 650px) {
            font-size: 1.5rem;
        }
    }

    p {
        margin: 2rem auto;
        max-width: 800px;
        font-size: 1.125rem;
        line-height: 1.5;
        font-weight: 400;
        color: #0a122a;

    }
`