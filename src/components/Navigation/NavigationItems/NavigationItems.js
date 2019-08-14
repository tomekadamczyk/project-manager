import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styled from 'styled-components';
import { AUTH_TOKEN } from '../../../constants/constants';

const Nav = styled.nav`
    height: 100%;
`;

const NavigationItems = (props) => {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
        <Nav>
            <NavigationItem closeMenu={props.closeMenu} link="/" exact>Dashboard</NavigationItem>
            <NavigationItem closeMenu={props.closeMenu} link="/projects" >Projects</NavigationItem>
            <NavigationItem closeMenu={props.closeMenu} link="/kanban" >Kanban</NavigationItem>
            <NavigationItem closeMenu={props.closeMenu} link="/tasks" >Tasks</NavigationItem>
            <NavigationItem closeMenu={props.closeMenu} link="/clients" >Clients</NavigationItem>
            {authToken ? <NavigationItem onClick={() => {localStorage.removeItem(AUTH_TOKEN)
            this.props.history.push('/')}}>Logout</NavigationItem> : <NavigationItem closeMenu={props.closeMenu} link="/login" >Login</NavigationItem>}
            
        </Nav>
    )
}

export default NavigationItems;