import  { useRef,useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal';

import book from '../assets/book2.png'

const Form = () => {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxMK2Hf5XDyCsGfd2g_2ukicNNarjDxIoPv1GvC9tJvdIbDA6GaPZ4JIkNw_w28wShiXA/exec";
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(false);
    const [values,setValues] = useState({
        name:"",
        email:"",
        phoneNumber:""
    })

    // const { name, email, phoneNumber} = values

    const handleChange = e => {
        setValues({...values, [e.target.name] : e.target.value})
    }
        
    const formRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
        .then(res => {
            setLoading(false)
            setActive(true)
            setValues({ name: '', phoneNumber: '', email: '' })
        })
        .catch(err => console.log(err))
    }
        




    return (
        
        <StyledForm>
            <div className="register">Join the waiting list to be among the first <br /> to be notified when the book launch</div>

            <form name='form' onSubmit={handleSubmit} ref={formRef}>
                <div className="input-group">
                    <label htmlFor="" className='nameLabel'>Name</label>
                    <input type="text" name='name' className='name' required  value={values.name} onChange={handleChange}/>
                </div>
                
                <div className="input-group">
                    <label htmlFor="" className='emailLabel'>Email</label>
                    <input type="text" name='email' className='name' required value={values.email} onChange={handleChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="" className='phoneLabel'>Phone Number</label>
                    <input type="text" name='phone' className='name' required value={values.phoneNumber} onChange={handleChange}/>
                </div>

                <button type='submit'>{loading ? "Loading..." : "SUBMIT"}</button>
            </form>

            <img className="book" src={book} alt="book" />
            <Modal active={active} setActive={setActive} />
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
    }

    .book {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
        width: 350px;
        height: auto;

        @media (max-width: 768px) {
            width: 250px;
            top: 90%;
        }
    }

    .register {
        max-width: 400px;
        margin: 0 auto;
        text-align: center;
        font-size: 1.1rem;
        line-height: 1.5;
        font-weight: 600;
        color: #fff;
        margin-bottom: 3rem;

        @media (max-width: 768px) {
            font-size: .8rem;
            line-height: 1.6;
        }
    }

    .input-group {
        margin-bottom: 1rem;

        label {
            display: block;
            font-size: 1rem;
            font-weight: 400;
            color: #fff;
            margin-bottom: 1rem;
        }

        input {
            display: block;
            width: 100%;
            height: 3.5rem;
            padding: 0 2rem;
            outline: none;
            border: none;
            border-radius: 5px;
        }
    }

    button {
        width: 100%;
        height: 3.5rem;
        background: #0A122A;
        color: #fff;
        outline: none;
        border: none;
        border-radius: 5px;
        font-size: 1.15rem;
        font-weight: 600;
        cursor: pointer;
        text-transform: uppercase;
        margin-top: 2.5rem;
        transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
            background: #fff;
            color: #0A122A;
        }
    }
`
