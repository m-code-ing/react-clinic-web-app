import classes from './Layout.module.css';
import React, { Component } from 'react'

import ClientList from '../../components/ClientList/ClientList';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../NavBar/NavBar';

export default class Layout extends Component {
    state = {
        clients: [
            {
                
                id: Math.random()*1000,
                name: 'Mayank Ashok',
                age: '34',
                gender: 'Male',
                status: 'Active',
                next_appointment: '2',
                prev_appointment: '5'
            }
        ]
    }

    render() {
        return (
            <div>
                <nav>
                    <NavBar />
                </nav>
                <main className={classes.Main}>
                    {/* Side Bar */}
                    <SideBar />
                    {/* Place holder for list of patients */}
                    <ClientList clients={this.state.clients} />
                </main>
            </div>
        )
    }
}
