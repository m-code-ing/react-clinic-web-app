import React from 'react'
import MenuItems from '../../components/MenuItems/MenuItems';
import SearchBar from '../../components/SearchBar/SearchBar';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <div>Logo</div>
            <MenuItems />
            <div className={classes.SearchBarDiv}>
                <SearchBar />
                <div>Logout</div>
            </div>

        </div>
    );
}

export default NavBar;