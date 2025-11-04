import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';

const NavigationData = [
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 4,
    "name": "Blog",
    "path": "/blog"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact"
  }
]




const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = NavigationData.map(route => <Link route ={route} key={route.id}></Link>);


    return (
        <nav className='flex justify-between mr-10'>
            <span className='flex' onClick={()=>setOpen(!open)}>
                {open? <X className='md:hidden'></X>:<Menu className=' md:hidden'></Menu>}
                <ul className={`md:hidden absolute ${open? 'top-6':'-top-40'}  duration-1000`}>{links}</ul>
                <h3 className='ml-4'>My Navbar</h3>
            </span>
            
           <ul className='hidden md:flex'>
             {
                links
            }
           </ul>
            {/* <ul className='flex'>
                {
                    NavigationData.map(route =><li className='mr-10'>
                        <a href="/">{route.name}</a></li> )
                }
            </ul> */}
            {/* <ul className='flex'>
                <li><a className='mr-10' href="">Home</a></li>
                <li><a className='mr-10' href="">About</a></li>
                <li><a className='mr-10' href="">Blog</a></li>
            </ul> */}
            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;