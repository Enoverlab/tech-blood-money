import logo from "../assets/logo.png"
import shape from '../assets/backgroundshape.png'
import background from '../assets/rec.png'
import book from '../assets/book1.png'
import styled, {keyframes} from 'styled-components'

const SectionOne = () => {
    return (
        <Styledone>
            <img src={logo} alt="" className='logo' />

            <img src={shape} alt="" className='redshape' />

            <div className="container">
                <div className="left">
                    <h1>
                        Join <span>1500+</span> other people who are changing their lives with the insights in this book
                    </h1>

                    {/* <p>Pay <span className='Two'>₦2,000</span>  instead of <strike>₦5000</strike> </p> */}

                    <a className='box bounce-7' href="https://selar.co/c4pd"  rel="noreferrer" target="_blank">Download Now</a>
                </div>

                <div className="picture">
                    <img className="book" src={book} alt="" />
                </div>
            </div>

        </Styledone>
    )
}

export default SectionOne

const animate = keyframes`
    0%{
        transform: scale(.92);
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
            grid-template-columns: 1fr;
            margin-top: 3rem;
        }

        .picture {
            display: flex;
            justify-content: center;
            align-items: center;
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
            h1 {
                font-size: 2.1875rem;
                line-height: 1.5;
                font-weight: 700;
                color: #282828;
                max-width: 679px;

                @media (max-width: 768px) {
                    font-size: 1.375rem;
                }

                span {
                    color: #CD2A44;
                }
            }

            p {
                font-size: 1.875rem;
                font-weight: 500;
                margin: 3.125rem 0;
                color: #0A122A;

                @media (max-width: 768px) {
                    font-size: 1.125rem;
                }

                span {
                    background: #FFDEE3;
                    font-weight: 800;
                    color: #CD2A44;
                    padding: .5rem;
                }
            }

            .box {
                border: none;
                outline: none;
                background: #CD2A44;
                text-decoration: none;
                font-size: 1.875rem;
                font-weight: 700;
                color: #fff;
                padding: 1rem 2.5rem;
                border-radius: 5px;
                margin-top: 3rem;
                display: inline-block;
                animation: ${animate} 1.2s ease-in-out infinite;

                @media (max-width: 768px) {
                    font-size: 1.125rem;
                    margin-top: 0;
                    margin-bottom: 2rem;
                }
            }
        }
    }
`;

