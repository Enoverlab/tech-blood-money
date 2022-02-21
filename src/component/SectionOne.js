import { useState } from 'react'
import logo from "../assets/logo.png"
import shape from "../assets/backgroundshape.png"
import background from "../assets/rec.png"
import book from "../assets/book1.png"
import styled, { keyframes } from "styled-components"
import PaymentModal from "./PaymentModal"

const SectionOne = () => {
  const [show, setShow] = useState(false)
  return (
    <Styledone>
      <PaymentModal 
        show={show === 'ebook'} 
        setShow={setShow}
        selar={true}
        paystackLink="https://paystack.com/buy/the-blood-money-in-tech-zkialb"
        selarLink="https://selar.co/thebloodmoneyintech"
      />
      <PaymentModal 
        show={show === 'preorder'} 
        setShow={setShow} 
        paystackLink="https://paystack.com/buy/the-blood-money-in-tech-hardcopy"  
      />
      <img src={logo} alt="" className="logo" />

      <img src={shape} alt="" className="redshape" />

      <div className="container">
        <div className="left">
          <h1>
            {/* Be a sharp guy, don’t carry last<br />
            Guys are <span>cashing out big in tech</span> now<br />
            Learn how you too can do it in 3months */}

            In this book, you will learn the 7 Most Important Insights 
            you need to succeed in the tech industry this 2022
          </h1>

          {/* <p>Pay <span className='Two'>₦2,000</span>  instead of <strike>₦5000</strike> </p> */}

          <div
            className="box bounce-7 web"
            onClick={() => setShow('ebook')}
          >
            Download Now
          </div>
          <div
            className="box outline bounce-7 web"
            onClick={() => setShow('preorder')}
          >
            Pre-order the Hard Copy
          </div>
        </div>

        <div className="picture">
          <img className="book" src={book} alt="" />
          <div
            className="box bounce-7 mobile"
            onClick={() => setShow('ebook')}
          >
            Download Now
          </div>
          <div
            className="box bounce-7 outline mobile"
            onClick={() => setShow('preorder')}
          >
            Pre-order the Hard Copy
          </div>
        </div>
      </div>
    </Styledone>
  )
}

export default SectionOne

const animate = keyframes`
    0%{
        transform: scale(.95);
    }

    100%{
        transform: scale(1);
    }
`

const Styledone = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: url(${background}) no-repeat;
  background-size: cover;
  position: relative;
  padding: 0 6%;

  .logo {
    margin-top: 2rem;
    height: 6rem;
    width: auto;

    @media (max-width: 768px) {
      height: 4rem;
      margin-top: 1rem;
    }
  }

  .redshape {
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: 768px) {
      width: 250px;
    }
  }

  .container {
    display: grid;
    grid-template-columns: 60% 35%;
    grid-gap: 2rem;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
    }

    .picture {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 16px 0;
    }

    img.book {
      width: 100%;
      max-width: 350px;
      height: auto;
      filter: drop-shadow(32px 32px 32px rgba(0, 0, 0, 0.25));
      object-fit: cover;

      @media (max-width: 768px) {
        max-width: 200px;
        margin: 0 auto;
        margin-bottom: 4rem;
      }
    }

    .left {
      @media (max-width: 768px) {
      }

      h1 {
        font-size: 2rem;
        line-height: 1.5;
        font-weight: 700;
        color: #282828;
        max-width: 700px;

        @media (max-width: 768px) {
          font-size: 1.1rem;
          margin-top: 2.5rem;
          text-align: center;
        }

        span {
          color: #cd2a44;
        }
      }

      p {
        font-size: 1.875rem;
        font-weight: 500;
        margin: 3.125rem 0;
        color: #0a122a;

        @media (max-width: 768px) {
          font-size: 1.125rem;
        }

        span {
          background: #ffdee3;
          font-weight: 800;
          color: #cd2a44;
          padding: 0.5rem;
        }
      }
    }
  }

  .box {
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

    @media (max-width: 768px) {
      display: block;
    }

    &.outline {
      background: transparent;
      border: 2px solid #cd2a44;
      color: #cd2a44;
      margin-left: .5rem;

      @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 2rem;
      }
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
      }
    }
  }
`
