import React from 'react';
import {Link} from "react-router-dom";
const Login = () =>{
    return(
        <>
        <h2> Login Component </h2>
        <Link to='/dashboard' > Go to Dashboard Page</Link>
        </>
    )
}

export default Login;