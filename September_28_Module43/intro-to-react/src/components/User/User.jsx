import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import Users2 from '../Users2/Users2';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const [showInfo, setShowInfo] = useState(false)
    const [visitHome, setVisitHome] = useState(false)

    if(visitHome){
        return <Navigate to='/'></Navigate>
    };

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={()=> setShowInfo(!showInfo)} >{showInfo? "Hide":"Show"} Info</button>
            {
                showInfo && <Suspense fallback={`Loading.....`}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;