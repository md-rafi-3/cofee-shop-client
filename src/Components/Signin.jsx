import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Signin = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // firebase sign in
        signInUser(email, password).then(result => {

            // update last sign in ti the database
            const signInInfo = {
                email,
                lastSignInTime:result.user?.metadata?.lastSignInTime

            }

            fetch("http://localhost:3000/users", {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(signInInfo)

            }).then(res => res.json()).then(data => {
                console.log("after updated", data)
            })



            console.log(result)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Signup Successfull.!",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch((error) => {
            console.log(error.message)
        })


    }
    return (
        <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className='text-4xl font-bold text-center'>Login Now</h2>
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Signin;