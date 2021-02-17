import React from 'react'

import classes from './ClientList.module.css'

// Importing Components
import Client from './Client/Client'
import SortFilterBar from '../SortFilterBar/SortFilterBar'

export default function ClientLIst(props) {

    let client = props.clients.map((client) => {
        console.log(client);
        return (
            <Client
                key={client.id} 
                name={client.name}
                age={client.age}
                gender={client.gender}
                status={client.status}
                next_appointment={client.next_appointment}
                prev_appointment={client.prev_appointment}
                />
        );
})

return (
    <div className={classes.ClientList}>
        <SortFilterBar />
        {client}
    </div>
)
}
