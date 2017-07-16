import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { firebaseApp } from '../firebase';

const form_heading = {
    textAlign: 'center',
    fontSize: '200%'
};

const form_login = {
    border: '1px solid #eee',
    padding: '5%',
    marginLeft: '20%',
    marginRight: '20%',
    boxShadow: '10px 10px 50px #eee'
};

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }
    signUp(){
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })
    }

    render(){
        return (
            <div style={{margin: '5%'}}>
                <div style={form_login}>
                    <h2 style={form_heading}>SIGN UP</h2>
                    <input className="form-control" type="text" placeholder='Email Address' onChange={event => this.setState({email: event.target.value})} style={{marginBottom: '5px'}} required/>
                    <input className='form-control' type="password" placeholder='Password' onChange={event => this.setState({password: event.target.value})} required />
                    <button className='btn btn-primary btn-block' type='button' onClick={ () => this.signUp() } style={{marginTop: '5px'}}>Sign Up</button>
                    <div style={{marginTop: '5px'}}>
                        <Link to='/signin'> Already a user? Sign in instead</Link>
                    </div>
                    <div>{this.state.error.message}</div>
                </div>
            </div>
        )
    }
}

export default SignUp;
