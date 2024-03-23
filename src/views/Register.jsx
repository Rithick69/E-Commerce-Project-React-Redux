import { useState } from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signinFunc } from '../reducers/slices/authSlice';

const Registration = () => {
    const [username, setUsername] = useState("");
    const [details, setDetails] = useState({ phone: '', email: '', password: '' });

    // const dispatch = useDispatch();

    const handleNameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value.toLowerCase() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(signinFunc(details));
        console.log(details)
    };
    return (
    <Wrapper>
            <div className='formElement'>
                <div className='container'>
                    <h2>Sign Up!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='pDetails'>
                            <input type="text" name="username" value={username} placeholder='Enter Username...' onChange={handleNameChange} />
                            <input type="text" name="phone" value={details.phone} placeholder='Enter Phone No.' onChange={handleChange} />
                        </div>
                        <div className='validEmail'>
                            <input type='email' name="email" value={details.email} placeholder='Enter Email...' onChange={handleChange} />
                        </div>
                        <div className='validPass'>
                            <input type='password' name="password" value={details.password} placeholder='Enter Password...' onChange={handleChange} />
                        </div>
                        <Button className="btn" type='submit'>Sign Up</Button>
                    </form>
                    <p>Already have an account? <NavLink to='/login'>Log In!!</NavLink></p>
                </div>
            </div>
    </Wrapper>
    )
}

const Wrapper = styled.section`
    .formElement{
        display: flex;
        justify-content: center;
        padding-top: 8rem;


        .container {
            width: 30%;
            height: 70vh;
            text-transform:capitalize;
            background: #fff;
            border-radius: 10px;
            overflow: hidden;
            padding: 30px 55px 33px;
            box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
            -moz-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
            -webkit-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
            -o-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
            -ms-box-shadow: 0 5px 10px 0 rgba(0,0,0,.1);
            text-align: center;


            h2{
                text-align: center;
                margin: auto;
                font-weight: normal;
            }

            form{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                margin: 4rem 0;
                .pDetails{
                    display: flex;
                    justify-content: center;
                    flex-direction: row;
                    gap:20px
                }

                div{
                    width:100%;
                    margin: 1rem 0;
                    input{
                        width:100%;
                        text-transform: none;
                    }
                }

                .btn{
                    margin-top: 3rem;
                }
            }

            p{
                text-transform: none;
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
        .loginForm{
            .container {
                width:50%;
                height: 45vh;
                padding: 30px 20px
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .formElement{
            .container {
                width:70%;
                min-height: 45vh;
                height: auto;
                padding: 30px 20px
            }
        }
    }
`;

export default Registration;