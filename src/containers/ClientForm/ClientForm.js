import React, { Component } from 'react'
import classes from './ClientForm.module.css'

// Importing Components
import Input from '../../components/UI/Input/Input';

export default class ClientForm extends Component {
    render() {
        return (
            <div className={classes.ClientForm}>
                <p>Enter Client Data</p>
                <Input inputtype={'input'} placeholder='Name'/>
                <Input inputtype={'input'} placeholder='Age'/>
                <Input inputtype={'input'} placeholder='Gender'/>
                <Input inputtype={'input'} placeholder='Email'/>
            </div>
        )
    }
}
