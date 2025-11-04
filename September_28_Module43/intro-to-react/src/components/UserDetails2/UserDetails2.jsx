import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {

    const {username, name, email} = use(userPromise);
    return (
        <div>
            <p>User Name: {username}</p>
            <p>Name: {name}</p>
            <p>E-mail: {email}</p>
        </div>
    );
};

export default UserDetails2;