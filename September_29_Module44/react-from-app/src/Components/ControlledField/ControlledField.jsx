import React, { useState } from 'react';

const ControlledField = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('secret')
    const[error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }

    const controlOnChange = (e) => {
        setPassword(e.target.value);
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('')
        }

    }
    return (
        <div>
            <form onClick={handleSubmit}>
                <input onChange={handleNameChange} placeholder='Name' name='name' onctype="text" defaultValue={name} />
                <br />
                <input onChange={handleEmailChange} type="email" name="Email" placeholder='E-mail' defaultValue={email} />
                <br />
                <input type="password" name="password" id="" placeholder='Password' onChange={controlOnChange} />
                <br />
                <p style={{color: 'red'}}>{error}</p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;