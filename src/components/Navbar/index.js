import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
     Settingss, Usersss, Notifs, WelcomeText,
} from './NavbarElements';
import logo from '../../picture/GroundUp.png';
const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <img src={logo} alt="Logo"/>

                    <NavLink to='/' activeStyle>
                        DASHBOARD
                    </NavLink>
                    <NavLink to='/abouts' activeStyle>
                        ALERTS
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavMenu>
                    <NavBtn>
                        <Settingss />
                        <Usersss />
                        <Notifs />

                        <WelcomeText>Welcome Admin</WelcomeText>

                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
