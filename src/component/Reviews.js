import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

import review1 from "../assets/review1.jpeg"
import review2 from "../assets/review2.jpeg"
import review3 from "../assets/review3.jpeg"
import review4 from "../assets/review4.jpeg"
import review5 from "../assets/review5.jpeg"
import review6 from "../assets/review6.jpg"
import review7 from "../assets/review7.jpeg"

const Reviews = ({ web }) => {
  const data = [
    {
      name: "Damilola Felicia",
      role: "Content Creator & Photographer",
      review:
        `The Blood Money in Tech” is mind blowing, engaging and interesting. 
        It helped me understand that social media management and even content management are all part of tech. 
        I like how Olabanji highlighted the major problems in the last chapter of the book and created solutions for them. 
        The book gave step by step guidelines on how people can navigate through and several websites where anyone can apply 
        for remote jobs.`,
      image: review4,
    },
    {
      name: "Oluwatoyin",
      role: "Product Designer",
      review:
        "I took the self assessment test in The Blood Money in Tech and it really opened my eyes to a lot of things I need to work on. I have also discovered that I should position myself for less competitive spaces like blockchain technology, sports, aviation etc to fast track my career growth in tech.",
      image: review1,
    },
    {
      name: "Feranmi",
      role: "Motion Designer",
      review:
        `The Blood Money in Tech” blew my mind, and here is my conclusion; this is a book anyone on the journey to finding better tech opportunities will keep consulting for a long time. 
        You’ll read it quickly first, just before you set out on the adventure; then continuously each time you want to move to the next level or whenever you find yourself stuck.
        It is a guidebook that you will easily pull out of your traveller's back pocket and boom, you will know exactly what to do next. 
        Thank you Olabanji Ewenla for putting so much effort into this.`,
      image: review2,
    },
    {
      name: "Femi Odunmbaku",
      role: "Product Management Consultant",
      review:
        'I re-prioritised my career path in tech thanks to the quote from "The Blood Money in Tech" which says; "To scale fast and make it big financially, you need to invest your time, energy and resources in an industry, market, field or niche where there is high demand for a service with low competition.',
      image: review3,
    },
    {
      name: "Chimdi",
      role: "Mechanical Engineer",
      review:
        "This book is a real eye-opener to the benefits of the not-so-newly emerging tech industry. It gives very detailed insights as to how one can start and thrive in the tech industry even without prior experience, and from a very realistic standpoint.",
      image: review5,
    },
    {
      name: "Ogooluwa",
      role: "Content Writer",
      review:
        `The Blood Money in Tech” has enlightened my knowledge on the fact that financial success is not a guarantee by venturing into a passion that solves no specific or major problem - if you want to be financially successful, you have to be doing something that solves a major problem for people.
        The Tech industry has over twenty problem solving skills that I can learn and grow over time. In the book, Olabanji Ewenla has provided insights on how to get started with any of these skills.
        `,
      image: review6,
    },
    {
      name: "Nathaniel",
      role: "UIUX designer",
      review:
        `After reading this book, I have come to understand that to succeed in life, one needs to find himself in midst of over 7 billon people on earth. Finding is the first key to succeeding in life. 
        This is a eye opener. 
        
        After finding oneself, decide on which area or field you will like to work in, dive into the sector and learn the necessary skills required to succeed in the field.
        
        The results of people currently working in tech that was shared in the book made me stand in awe. 
        The book is really a blessing.`,
      image: review7,
    },
  ]
  var settings = {
    dots: true,

    centerMode: false,

    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Body className={web ? 'web' : 'mobile'}>
      <Cover>
        <Title>
          <TitleText>See what others are saying about the book</TitleText>
        </Title>
        <SlideCover>
          <Slider {...settings}>
            {data.map((data, index) => (
              <SlideDiv key={index}>
                <SlideTop>
                  <SlideImg
                    src={data.image}
                    alt={`"blood money in tech review" - ${data.name}`}
                  />
                  <SlideName>
                    <SlideTitle>{data.name}</SlideTitle>
                    <SlidRole>{data.role}</SlidRole>
                  </SlideName>
                </SlideTop>
                <SlideBottom>
                  <SlideQuote>
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 39 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M37.8 25.8L36.36 30.84C27.24 28.32 23.04 21.84 23.04 11.52C23.04 3.48 25.44 0.719995 31.08 0.719995C36.24 0.719995 38.64 2.64 38.64 8.16C38.64 13.92 36.6 15.24 32.04 15.24C31.2 15.24 30.72 15.12 30.12 15C30.6 20.64 33.12 24.24 37.8 25.8ZM15.24 25.8L13.8 30.84C4.68 28.32 0.479997 21.84 0.479997 11.52C0.479997 3.48 2.76 0.719995 8.4 0.719995C13.68 0.719995 15.96 2.64 15.96 8.16C15.96 13.92 13.92 15.24 9.36 15.24C8.76 15.24 8.04 15.12 7.44 15C7.92 20.64 10.44 24.24 15.24 25.8Z"
                        fill="white"
                      />
                    </svg>
                  </SlideQuote>
                  <SlideMessage>{data.review}</SlideMessage>
                </SlideBottom>
              </SlideDiv>
            ))}
          </Slider>
        </SlideCover>
      </Cover>
    </Body>
  )
}

const Body = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f8ff;
  justify-content: center;

  &.web {
    display: flex;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &.mobile {
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  }
`
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  width: 100%;

  margin: 56px 0 24px 0;
`
const TitleText = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #cd2a44;
  text-align: center;
  @media only screen and (max-width: 650px) {
    font-size: 24px;
  }
`
const SlideCover = styled.div`
  width: 100%;
  margin: 40px 0;
  padding: 16px;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  align-items: center;
  justify-content: center; */
`

const SlideDiv = styled.div`
  max-width: 390px;
  min-height: 460px;
  width: 100%;
  height: 100%;
  background: #cd2a44;
  color: #fff;
  padding: 16px;
  cursor: pointer;
  transition: 0.4s ease-in;

  @media only screen and (max-width: 650px) {
    min-height: 300px;
    max-width: 350px;
  }
`

const SlideTop = styled.div`
  display: grid;
  grid-template-columns: 72px auto;
  gap: 24px;
  grid-gap: 24px;
  margin: 8px 0;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 56px auto;
  }
`
const SlideImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  @media only screen and (max-width: 650px) {
    width: 56px;
    height: 56px;
  }
`
const SlideName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
const SlideTitle = styled.h1`
  font-size: 21px;
  font-weight: 700;
  color: #fff;
  text-align: left;
  margin: 4px 0;

  @media only screen and (max-width: 650px) {
    font-size: 18px;
  }
`
const SlidRole = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  text-align: left;
  margin: 0;

  @media only screen and (max-width: 650px) {
    font-size: 13px;
  }
`
const SlideBottom = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  gap: 4px;
  grid-gap: 4px;
  margin: 8px 0;
  align-items: flex-start;
`
const SlideQuote = styled.div`
  margin: 40px 0 0 0;
`
const SlideMessage = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  text-align: left;
  margin: 8px 0;
  line-height: 1.5;

  @media only screen and (max-width: 650px) {
    font-size: 13px;
    text-align: left;
  }
`
export default Reviews
