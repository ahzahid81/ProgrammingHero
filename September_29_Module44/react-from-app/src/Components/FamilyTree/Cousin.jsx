import React from 'react';
import Friend from './Friend';

const Cousin = ({name}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Jo JOOo' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;