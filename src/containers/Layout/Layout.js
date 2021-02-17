import classes from './Layout.module.css';
import React, { Component } from 'react'

import ClientList from '../../components/ClientList/ClientList';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../NavBar/NavBar';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavBar/>
                </nav>
                <main className={classes.Main}>
                    {/* Side Bar */}
                    <SideBar />
                    {/* Place holder for list of patients */}
                    <ClientList />
                </main>
            </div>
        )
    }
}
