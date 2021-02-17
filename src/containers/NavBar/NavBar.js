import React from 'react'
import MenuItems from '../../components/MenuItems/MenuItems';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <div>Logo</div>
            <MenuItems/>    
            <div>Authentication</div>
        </div>
    );
}

export default NavBar;