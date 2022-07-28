import React from 'react';
import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <>
        <h2> HOME Component </h2>
        <Link to='/register' > Go to register Page</Link>
        </>
    )
}

export default Home;