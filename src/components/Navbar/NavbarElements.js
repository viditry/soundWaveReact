import { FaBars } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { MdNotificationsNone } from 'react-icons/md';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #00000;
height: 65px;
display: flex;
border-bottom-style: solid;
  border-width: 2px;
justify-content: space-between;
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: Source Sans Pro;
font-size: 13px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
&.active {
	color: #000000;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const Usersss = styled(FiUser)`
display: flex;
height: 100%;
	font-size: 1.8rem;
	cursor: pointer;
	    margin-right: 10px;
`;
export const Settingss = styled(AiOutlineSetting)`
display: flex;
height: 100%;
	font-size: 1.8rem;
	cursor: pointer;
	    margin-right: 10px;
`;
export const Notifs = styled(MdNotificationsNone)`
display: flex;
height: 100%;
	font-size: 1.8rem;
	cursor: pointer;
	    margin-right: 10px;
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
export  const Logo = styled.img`
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
&.active {
	color: #000000;
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
export const WelcomeText = styled.span`
    color: #808080;
    margin-right: 8px;
    border-left: 1px solid #808080;
    padding-left: 8px;
`;
