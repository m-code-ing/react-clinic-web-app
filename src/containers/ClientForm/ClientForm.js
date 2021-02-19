import React, { Component } from 'react'
import classes from './ClientForm.module.css'

import axios from "axios";

// Importing Components
import Input from '../../components/UI/Input/Input';

export default class ClientForm extends Component {

    state = {
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    submitHandler = () => {
        console.log(this.state);
        axios.post('https://react-clinic-web-app-default-rtdb.firebaseio.com/client_data.json', this.state)
        .then((res) => {
            console.log('response: ', res);
        })
        .catch((error) => {
            console.log("error : ", error);            
        });
    }

    fetchDataHandler = () => {
        axios.get('https://react-clinic-web-app-default-rtdb.firebaseio.com/client_data.json', this.state)
        .then((res) => {
            console.log('response: ', res.data);
        })
        .catch((error) => {
            console.log("error : ", error);            
        });
    }
    
    

    render() {
        const {name, age, gender, email} = this.state;
        return (
            <div className={classes.ClientForm}>
                <p>Enter Client Data</p>
                <Input inputtype={'input'} name='name' placeholder='Name' onChange={this.changeHandler}/>
                <Input inputtype={'input'} name='age' placeholder='Age' onChange={this.changeHandler}/>
                <Input inputtype={'input'} name='gender' placeholder='Gender' onChange={this.changeHandler}/>
                <Input inputtype={'input'} name='Status' placeholder='Status' onChange={this.changeHandler}/>
                <Input inputtype={'input'} name='next_appointment' placeholder='Next Appointment' onChange={this.changeHandler}/>
                <Input inputtype={'input'} name='prev_appointment' placeholder='Prev Appointment' onChange={this.changeHandler}/>
                <button onClick={this.submitHandler}>Add Client Data</button>
                <button onClick={this.fetchDataHandler}>Fetch Client Data</button>
            </div>
        )
    }
}
