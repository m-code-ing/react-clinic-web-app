import React from 'react'

import classes from './ClientList.module.css'

// Importing Components
import Client from './Client/Client'
import SortFilterBar from '../SortFilterBar/SortFilterBar'

export default function ClientLIst() {
    return (
        <div className={classes.ClientList}>
            <SortFilterBar/>
            <Client/>
            <Client/>
            <Client/>
        </div>
    )
}
