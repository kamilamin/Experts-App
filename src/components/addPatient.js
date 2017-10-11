import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import UserJPG from './image/user.jpg';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Card, CardHeader} from 'material-ui/Card';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500 } from 'material-ui/styles/colors';
import Person from 'material-ui/svg-icons/social/person';
import People from 'material-ui/svg-icons/social/people';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import Apps from 'material-ui/svg-icons/navigation/apps';
import { NavLink } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { database } from '../firebase.js';

const logoutStyles = {
    marginTop: 275
};

const dividerStyle = {
    margin: 10
};

const heading = {
    textAlign: 'center'
}
class addPatient extends Component{
    constructor() {
        super();
        this.state = {
            drawerOpened: false,
            // value: 1,
            Patient_name: '',
            Patient_id: '',
            Patient_age: '',
            Patient_Gender: 1,
            Appointment_Date: '',
            Skin_type: ''
        }
        this.patientRef = database.ref('/Patients-information');
        this.submitPatient = this.submitPatient.bind(this);
    };
    componentDidMount () {
        this.patientRef.on('value', (snapshot) => {
            this.setState({
                data: snapshot.val()
            });
        });
    }
    
    
    _genderChange = (event, index, Patient_Gender) => this.setState({ Patient_Gender })

    _typeChange = (event, index, value) => this.setState({value})


    _toggleDrawer() {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        });
    }
    submitPatient(event) {
        event.preventDefault();
        alert('You Submit New Patient Data');
        this.pref = this.patientRef.child(this.state.Patient_id + '/');
        this.pref.set({ Patient_id: this.state.Patient_id,
                        Patient_name: this.state.Patient_name,
                        Patient_Gender: this.state.Patient_Gender,
                        Patient_age: this.state.Patient_age,
                        Appointment_Date: this.state.Appointment_Date
                        });
    }
    render(){
        const { Patient_id } = this.state;
        const { Patient_name } = this.state;
        const { Patient_age } = this.state;
        const { Patient_Gender } = this.state;
        const { Appointment_Date } = this.state;
        const { Skin_type } = this.state;
        return (
                <MuiThemeProvider>
                    <div>
                        <AppBar title='Add Patient' onLeftIconButtonTouchTap={() => this._toggleDrawer()} />
                        <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>
                            <List>
                                <Card>
                                    <CardHeader title="User" subtitle="User@gmail.com" avatar={UserJPG} />
                                </Card>
                                <br />
                                <Divider style={dividerStyle} />
                                 <ListItem leftAvatar={<Avatar icon={<Apps />} backgroundColor={blue500} />}><NavLink to="/App">Dashboard</NavLink></ListItem>
                                 <ListItem leftAvatar={<Avatar icon={<Person />} backgroundColor={blue500} />}><NavLink to="/profile">Profile</NavLink></ListItem>
                                 <ListItem leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}><NavLink to="/report">Reports</NavLink></ListItem>
                                 <ListItem leftAvatar={<Avatar icon={<People />} backgroundColor={blue500} />}><NavLink to="/patient">Patients</NavLink></ListItem>
                                 <br />
                                 <Divider style={dividerStyle} />
                                <FlatButton style={logoutStyles} icon={<Logout />} label="Signout" fullWidth={true} onTouchTap={ () => this.signOut()} />
                            </List>
                        </Drawer>
                       <h1 style={ heading }>Add New Patient</h1>
                       <div style={{marginLeft: '10%'}}>
                        <div>
                            <TextField value={ Patient_id } style={{ marginLeft:'20%' }} onChange={(event) => this.setState({ Patient_id: event.target.value })} hintText='Patient ID' floatingLabelText='Enter ID'/> <TextField value={ Patient_name } style={{ marginRight:'20%', marginLeft: '10%', width: '20%' }} onChange={(event) => this.setState({ Patient_name: event.target.value })} hintText='Enter Name' floatingLabelText='Enter Name'/>
                        </div>
                        <div>
                            <SelectField style={{ marginLeft:'20%' }} floatingLabelText="Gender" value={Patient_Gender} onChange={this._genderChange}>
                                <MenuItem value={1} primaryText="Male"/>
                                <MenuItem value={2} primaryText="Female"/>
                            </SelectField>
                                <TextField value={ Appointment_Date } style={{ marginLeft:'10%' }} hintText='Appointment Date' onChange={(event) => this.setState({Appointment_Date: event.target.value})} floatingLabelText='Appointment Date'/>
                        </div>
                        <div>
                            <TextField value={ Skin_type } onChange={(event) => this.setState({ Skin_type: event.target.value })}  style={{marginLeft:'20%'}} hintText='Type of Skin' floatingLabelText='Type of Skin' />
                            <TextField value={ Patient_age } onChange={ (event) => this.setState({ Patient_age: event.target.value }) } style={{ marginLeft:'10%' }} hintText='Age' floatingLabelText='Age'/>
                        </div>
                        <div>
                            <TextField style={{marginLeft:'20%', marginTop: '5%'}} type='file' />
                        </div>
                            <RaisedButton label='Submit' primary={true} style={{float: 'right', marginRight: '20%', marginTop: '10%'}} onClick={this.submitPatient}/>
                        </div>
                        { JSON.stringify(this.state.data) }
                    </div>
                </MuiThemeProvider>
        )
    }
}

export default addPatient;                                                          
