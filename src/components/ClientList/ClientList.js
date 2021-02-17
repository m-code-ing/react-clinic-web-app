import React from 'react'

import classes from './ClientList.module.css'

// Importing Components
import Client from './Client/Client'

export default function ClientLIst() {
    return (
        <div className={classes.ClientList}>
            <Client/>
            <Client/>
            <Client/>
        </div>
    )
}
