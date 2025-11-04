import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css'

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Header></Header>
            <div>
                <aside className='root-main'>
                    <SideBar></SideBar>
                    {isNavigating && <span>Loading...</span>}
                    <Outlet></Outlet>
                </aside>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;