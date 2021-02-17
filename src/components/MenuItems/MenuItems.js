import React from 'react'

import classes from './MenuItems.module.css'

export default function MenuItems() {
    return (
        <div className={classes.MenuItems}>
            <ul>
                <li>Dashboard</li>
                <li>Appointment Calender</li>
                <li>Patients</li>
            </ul>
        </div>
    )
}
