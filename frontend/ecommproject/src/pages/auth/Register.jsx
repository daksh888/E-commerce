import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import { useRegisterMutation } from '../../serveces/auth';

const Register = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        password2: ""
    });

    const [register, { isLoading }] = useRegisterMutation();
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRegister = async () => {
        if (formData.password !== formData.password2) {
            setError("Passwords do not match");
            return;
        }
        try {
            const result = await register(formData).unwrap();
            setResponseData(result);
            setError(null);
            navigate('/login'); // Navigate to the login page on success
        } catch (err) {
            setError(err.data?.message || 'Registration failed');
            setResponseData(null);
        }
    };

    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput 
                                    label='Your Name' 
                                    id='form1' 
                                    type='text' 
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-100'
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput 
                                    label='Your Email' 
                                    id='form2' 
                                    type='email' 
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg' />
                                <MDBInput 
                                    label='Password' 
                                    id='form3' 
                                    type='password' 
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' />
                                <MDBInput 
                                    label='Repeat your password' 
                                    id='form4' 
                                    type='password' 
                                    name='password2'
                                    value={formData.password2}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>
                            <MDBBtn className='mb-4' size='lg' onClick={handleRegister} disabled={isLoading}>Register</MDBBtn>
                            <p className="small fw-bold mt-2 pt-1 mb-0">You have already Registered? <a href="/login"
                                        className="link-danger">Login</a></p>
                            {error && <p className="text-danger">{error}</p>}

                        </MDBCol>
                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default Register;




{/* <div className="App">
            <h1>Redux Toolkit - RTK Query (Create Data)</h1>
            <button onClick={handleRegister} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Add Post'}
            </button>
            <div>
                {isLoading && <p>Loading...</p>}
                {responseData && (
                    <div>
                        <h2>Registration Successful!</h2>
                        <pre>{JSON.stringify(responseData, null, 2)}</pre>
                    </div>
                )}
                {error && (
                    <div>
                        <h2>Error:</h2>
                        <pre>{error.data ? JSON.stringify(error.data, null, 2) : error.message}</pre>
                    </div>

                
                )}
            </div>
        </div> */}