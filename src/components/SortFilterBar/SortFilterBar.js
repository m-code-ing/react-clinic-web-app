import React from 'react'
import classes from './SortFilterBar.module.css'

export default function SortFilterBar() {
    return (
        <div className={classes.SortBar}>
            <p><small><strong>Sort By : </strong></small></p>
            <div className={classes.SortingButtonDiv}>
                <button>Name</button>
                <button>Treatment Status</button>
                <button>Next Appointment</button>
                <button>Last Appointment</button>
            </div>

        </div>
    )
}
