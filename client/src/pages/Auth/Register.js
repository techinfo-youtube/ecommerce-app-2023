import React from 'react'
import Layout from './../../components/Layout/Layout'
import { useState } from 'react'
// import BasicExample from './Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    // const [name, setName] = useState("")
    const navigate = useNavigate();


    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //api
            const res = await axios.post("/api/v1/auth/register", {
                name, email, password, phone, address
            });

            if(res.data.success) {
                console.log('success', res.data.message, res.data, res);
                navigate('/login');
            } else {
                console.log(res.data.message);
            }

        } catch (error) {
            console.log(error)
        }
        // console.log(name, email, password, phone, address)
    }

    // console.log(process.env.REACT_APP_API)

  return (
    <Layout title="Register Page">

        {/* Form */}
        <div className='register'>
            <h1>Register PAge</h1>

            <form onSubmit={handleSubmit}>

                <div class="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name...." required />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email...." />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput3" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password...." />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone no.</label>
                    <input type="number" className="form-control" id="exampleFormControlInput4" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number...." />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleFormControlInput5" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address...." />
                </div>

                {/* <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div> */}

                <button type="submit" className="btn btn-primary">Submit</button>   

            </form>
            {/* <BasicExample /> */}

        </div>
    </Layout>
  )
}

export default Register;

