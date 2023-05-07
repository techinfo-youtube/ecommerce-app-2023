import React from 'react';
import Layout from '../components/Layout/Layout';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/auth';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();


    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //api
            const res = await axios.post("/api/v1/auth/login", {
                email, password
            });
            console.log(email, password)

            if(res && res.data.success) {
                console.log('success', res.data.message, res.data, res);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })

                localStorage.setItem('auth', JSON.stringify(res.data));

                navigate('/');
            } else {
                console.log("error",res.data.message);
            }

        } catch (error) {
            console.log(error, "err")
        }
        // console.log(name, email, password, phone, address)
    }


  return (
    <Layout title="Login Page">

        {/* Form */}
        <div className='Login'>
            <h1>Login PAge</h1>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email...." />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput3" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password...." />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>   

            </form>
            {/* <BasicExample /> */}

        </div>
    </Layout>
  )
}

export default Login;

