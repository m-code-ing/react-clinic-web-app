import React from 'react';
import classes from './SideBar.module.css';

export default function SideBar() {
    return (
        <div className={classes.SideBar}>
            <p>Patients</p>
            <br/>
            <p>Appointments</p>
        </div>
    )
}