import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

import { SessionContext } from '../Login';

import './Register.css';

class Register extends Component {

    static contextType = SessionContext;

    state= {
        id: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        redirect: false,
        errorFields: [],
        registerError: '',
        existUser: false,
        errorExistingUser: ''
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        
        let getUsers = {};
        getUsers = await Axios ('http://localhost:3004/users/');

        let newId = getUsers.data.length + 1;
    
        this.setState({id: newId});
    
        const {id, username, firstName, lastName, email, password} = this.state;
        const data = {id, username, firstName, lastName, email, password};

        for(let i=0; i<getUsers.data.length; i++) {
            let checkDuplicates = getUsers.data[i].username;

            if(checkDuplicates === this.state.username) {
                this.setState({
                    errorExistingUser: 'Username existent, va rugam alegeti alt username.',
                    existUser: true
                });
            }
        } 
        
        if(this.state.username !== '' && this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.password !== '' && this.state.existUser !== true) {
                const res = await Axios.post('http://localhost:3004/users', data);
            
                if(res.status === 201) {
                    this.context.setUser(this.state.username);
                    
                    this.setState({
                    redirect: true
                    });
                }
        } else {
            // console.log(this.state.username === '', this.state.title);
            const errorFields = [];
            if (this.state.username === '') {
                errorFields.push('username');
            }
        
            if(this.state.firstName === '') {
                errorFields.push('firstName');
            }
            if(this.state.lastName === '') {
                errorFields.push('lastName');
            }
            if(this.state.email === '') {
                errorFields.push('email');
            }
            if(this.state.password === '') {
                errorFields.push('password');
            }
        
            this.setState({
                registerError: 'Va rugam completati toate campurile.',
                errorFields
            });
        }
    }

    handleChange = (e) => {
        const newState = {};
        newState[e.currentTarget.id] = e.currentTarget.value;

        this.setState(newState);
    }
    
    render() {
        // console.log("this.state in register: ", this.state);
        return(
            <>
                <div className="container">
                    <h2 className="titlu">Creare cont:</h2>
                    <div className="col-10">
                        <div className="form-container">
                            <form className="container-margin" onSubmit={this.handleSubmit} autoComplete="off">
                                {this.state.redirect ? <Redirect to="/" /> :''}
                                { this.state.registerError ? 
                                    <p style={ {color: '#c00', fontWeight: 'bold'} }>
                                        { this.state.registerError }
                                    </p>
                                    :
                                    ''
                                }
                                <div>
                                    <div className="row">
                                        <label htmlFor="username">Username:</label>
                                    </div>
                                    <div className="row">
                                        <input type="text" onChange={this.handleChange} value={this.state.username} placeholder="Completati utilizatorul" style={ this.state.errorFields.includes('username') || this.state.errorExistingUser !== '' ? {border: '1px solid #c00'}: {}} id="username" className="input-form" />
                                        { this.state.errorExistingUser ? 
                                        <p style={ {color: '#c00', fontWeight: 'bold', paddingLeft: '15px'} }>
                                            { this.state.errorExistingUser }
                                        </p>
                                        :
                                        ''
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <label htmlFor="lastName">Nume:</label>
                                    </div>
                                    <div className="row">
                                        <input type="text" id="lastName" className="input-form" onChange={this.handleChange} value={this.state.lastName} placeholder="Completati numele" style={ this.state.errorFields.includes('lastName') ? {border: '1px solid #c00'}: {}} />
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <label htmlFor="firstName">Prenume:</label>
                                    </div>
                                    <div className="row">
                                        <input type="text" id="firstName" className="input-form" onChange={this.handleChange} value={this.state.firstName} placeholder="Completati prenumele" style={ this.state.errorFields.includes('firstName') ? {border: '1px solid #c00'}: {}} />
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <label htmlFor="email">Email:</label>
                                    </div>
                                    <div className="row">
                                        <input type="email" id="email" className="input-form" onChange={this.handleChange} value={this.state.email} placeholder="Completati email-ul"  style={ this.state.errorFields.includes('email') ? {border: '1px solid #c00'}: {}} />
                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <label htmlFor="pass">Parola:</label>
                                    </div>
                                    <div className="row">
                                        <input type="password" id="password" className="input-form" onChange={this.handleChange} value={this.state.password} placeholder="Completati parola"  style={ this.state.errorFields.includes('password') ? {border: '1px solid #c00'}: {}} />
                                    </div>
                                </div>
                                <p>
                                    <Button className="btn btn float-right" variant="primary" type="submit">Creaza cont</Button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;

