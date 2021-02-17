import React from 'react'

import classes from './Client.module.css'

export default function Client(props) {
    return (
        <div className={classes.Client}>

            <div className={classes.Client_name_age_gender_div}>
                <p><small><strong>{props.name}</strong></small></p>
                <div>
                    <p><small><strong>{props.age} years</strong></small></p>
                    <p><small><strong>{props.gender}</strong></small></p>
                </div>

            </div>

            <div className={classes.Client_Right_Section}>
                <div className={classes.Client_status_div}>
                    <p><small><strong>Status: </strong> {props.status} </small></p>
                    <p><small><strong>Next Appointment: </strong> + {props.next_appointment} days ago<em>(Feb 19, 2021 / Friday)</em></small></p>
                    <p><small><strong>Last Appointment: </strong>  {props.prev_appointment} days ago <em>(Feb 12, 2021 / Thursday)</em></small></p>
                    <p></p>
                </div>

                <div className={classes.Client_Detail_Button_Div}>
                    <button>Treatment Notes</button>
                    <button>Payment Details</button>
                </div>

            </div>




        </div>
    )
}
