import React from 'react';
import {Link} from "react-router-dom";

const Register = () =>{
    return(
        <>
        <h2> Register Component </h2>
        <Link to='/login' > Go to Login Page</Link>
        </>
    )
}

export default Register;