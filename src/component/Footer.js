import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    return (
        <StyledFooter>
            Copyright @thebloodmoneyintech {new Date().getUTCFullYear()}
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    text-align: center;
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 500;
    color: #767676;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
        margin-top: 2rem;
    }
`