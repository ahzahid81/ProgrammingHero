import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <p><small>Thank you for visiting in our website</small></p>
            <Link to='/'>Terms</Link>
            <Link to='/'>Privacy</Link>
            <Link to='/'>Facebook</Link>
        </div>
    );
};

export default Footer;