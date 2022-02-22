import React from 'react'
import styled from 'styled-components'

import book from '../assets/banji.png'

const Form = () => {
    
    return (
        
        <StyledForm>
            <div className="register">About the Author</div>
            <p>
                Olabanji Ewenla is a Product Manager who is passionate 
                about delivering consistent value to end-users and ensuring a 
                product’s success in the marketplace. <br />
                He is very particular about growth and so focuses on driving 
                sustainable business growth for organisations. He has been at 
                the core of leading the growth initiatives at Perxels - from having a community 
                of just 15 people to 5,000+ people all over the world in less than 2 years while 
                increasing the business revenue to over 400% in the same time. <br />
                One of the major initiatives which he introduced at Perxels is building a structure 
                to help Perxels students get jobs after their training. This initiative has been a 
                great success, with 70% of Perxels students getting well-paying jobs, gigs or 
                contracts within 3 months after their training.<br /><br />

                He is also the co-founder of Enoverlab, an incubation training program to empower 
                Product Managers with the knowledge, skills, and experience to build products that 
                will thrive today, tomorrow, and in the future. <br /><br />

                He loves education and naturally loves teaching, sharing knowledge, passing ideas, 
                having brainstorming sessions, conducting research and doing anything that 
                involves education. <br /><br />

                Outside of work, Olabanji is a musician; he sings, plays the piano and directs a 
                worship team.
            </p>
            
            <img className="book" src={book} alt="book" />
        </StyledForm>
    )
}

export default Form

const StyledForm = styled.div`
    width: 100%;
    background: #CD2A44;
    padding: 2.5rem;
    padding-bottom: 10rem;
    margin-top: 4rem;
    position: relative;

    @media (max-width: 768px) {
        padding: 3rem 1.5rem;
        padding-bottom: 8rem;
        margin-top: 0;
        padding-top: 2rem;
    }

    .book {
        position: absolute;
        top: 88%;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: auto;

        @media (max-width: 768px) {
            top: 93%;
        }
    }

    .register {
        max-width: 450px;
        margin: 0 auto;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: 600;
        color: #fff;
        margin-bottom: 2rem;

        @media (max-width: 768px) {
            line-height: 1.6;
        }
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        color: #fafafa;
        line-height: 1.5;

    }
`
