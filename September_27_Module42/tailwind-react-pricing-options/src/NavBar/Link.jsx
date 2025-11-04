import React from 'react';

const Link = ({route}) => {
    return (
        <li>
            <a className='md: mr-10 px-5 hover:bg-amber-500' href={route.path}>{route.name}</a>
        </li>
    ); 
};

export default Link;