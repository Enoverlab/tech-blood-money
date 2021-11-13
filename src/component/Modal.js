import styled from "styled-components";

const Modal = ({ active, setActive }) => {
    return (
        <StyledModal className={ active ? "active" : "" }>
            <div onClick={() => setActive(!active)} className="overlay" />
            <div className="content">
                <h2>Congratulations!</h2>
                <p>You will be among the first people to be notified when the "The Blood Money in Tech" launches on the 20th of November 2021.</p>
                <h1>Get Ready!</h1>
            </div>
        </StyledModal>
    )
}

export default Modal

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
     display: none;
    align-items: center;
    justify-content: center;

    &.active {
        display: flex;
    }

    .overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        cursor: pointer;
    }

    .content{
        position: relative;
        z-index: 2;
        width: 90%;
        max-width: 500px;
        min-height: 300px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 3rem;
        border-radius: 5px;

        h1 {
            text-align: center;
            font-size: 2rem;
            color: #CD2A44;
        }

        h2 {
            font-size: 1.7rem;
            font-weight: 700;
            color: #0A122A;
        }

        p {
            font-size: 1.25rem;
            text-align: center;
            color: #0A122A;
            line-height: 1.5;
            margin: 2rem 0;
        }
    }
`