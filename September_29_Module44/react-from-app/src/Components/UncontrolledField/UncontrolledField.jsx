import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;