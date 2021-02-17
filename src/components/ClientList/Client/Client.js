import React from 'react'

import classes from './Client.module.css'

export default function Client() {
    return (
        <div className={classes.Client}>
            <div className={classes.Client_div_name_age_gender}>
                <p><small><strong>Mayank Ashok</strong></small></p>
                <div>
                    <p><small><strong>34 years</strong></small></p>
                    <p><small><strong>Male</strong></small></p>
                </div>

            </div>
            <div>
                <p><small><strong>Status:</strong>  Currently Active</small></p>
                <p><small><strong>Next Appointment</strong>  +2 days <em>(Feb 19, 2021 / Friday)</em></small></p>
                <p><small><strong>Last Appointment</strong>  6 days ago <em>(Feb 12, 2021 / Thursday)</em></small></p>
                <p></p>
            </div>

        </div>
    )
}
