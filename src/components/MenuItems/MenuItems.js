import React from 'react'

import classes from './MenuItems.module.css'

export default function MenuItems() {
    return (
        <div className={classes.MenuItems}>
            <ul>
                <li><a href="">Dashboard</a></li>
                <li><a href="">Calender</a></li>
                <li><a href="">Patients</a></li>
            </ul>
        </div>
    )
}
