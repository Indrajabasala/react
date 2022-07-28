import React from 'react';
import {Link} from "react-router-dom";

const Dashboard = () =>{
    return(
        <>
        <h2> Dashboard Component </h2>
        <Link to='/' > Logout</Link>
        </>
    )
}

export default Dashboard;