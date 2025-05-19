import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Signup = () => {
    const { createUserWithEmail } = useContext(AuthContext);
    const handleSignup = (e) => {
        e.preventDefault()


        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restFormData } = Object.fromEntries(formData);
       
        // console.log(email, password, userProfile)


        createUserWithEmail(email, password).then(result => {
            console.log(result.user)
             const userProfile={
            email,
            password,
            ...restFormData,
            creationTime: result.user?.metadata?.creationTime,
            lastSignInTime: result.user?.metadata?.lastSignInTime,
            
        }
            // save profile info in the db
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userProfile)

            }).then(res => res.json()).then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Signup Successfull.!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log("user added the db,", data)
            })
        }).catch((error) => {
            console.log(error.message);
        })

    }
    return (
        <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSignup} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Enter your name" name='name' />
                    <label className="label">Address</label>
                    <input type="text" className="input" placeholder="Enter Your address" name='address' />
                    <label className="label">Phone Number</label>
                    <input type="text" className="input" placeholder="Enter your phone number" name='phone' />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Enter your email" name='email' />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" placeholder="Enter your photo url" name='photo' />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;