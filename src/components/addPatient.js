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
import { NavLink, Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { database } from '../firebase.js';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

const logoutStyles = {
    marginTop: 235
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
             value: 'Male',
            Patient_name: '',
            Patient_id: '',
            Patient_address: '',
            Patient_cell: '',
            Patient_age: '',
            Patient_Gender: '',
            Appointment_Date: '',
            Patient_images: ''
        }
        //this.patientRef = database.ref('/Patients-information');
        this.submitPatient = this.submitPatient.bind(this);
    };
    componentDidMount () {
        database.on('value', (snapshot) => {
            this.setState({
                data: snapshot.val()
            });
        });
    }
    
    
    _genderChange = (event, index, Patient_Gender) => this.setState({ Patient_Gender });

    _typeChange = (event, index, value) => this.setState({value});


    _toggleDrawer() {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        });
    }
    submitPatient(event) {
        event.preventDefault();
        // alert('You Submit New Patient Data');
        this.pref = database.child(this.state.Patient_id + '/');
        this.pref.set({ Patient_id: this.state.Patient_id,
                        Patient_name: this.state.Patient_name,
                        Patient_address: this.state.Patient_address,
                        Patient_cell: this.state.Patient_cell,
                        Patient_Gender: this.state.Patient_Gender,
                        Patient_age: this.state.Patient_age,
                        Appointment_Date: this.state.Appointment_Date
                        });
    }
    render(){
        const { Patient_id } = this.state;
        const { Patient_name } = this.state;
        const { Patient_address } = this.state;
        const { Patient_cell } = this.state;
        const { Patient_age } = this.state;
        const { Patient_Gender } = this.state;
        const { Appointment_Date } = this.state;
        const { Patient_images } = this.state;
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
                        <h1 style={ heading }>Patient Registeration Form</h1>
                        <form style={{marginLeft: '25%', marginTop: 15}}>
                            <div style={{width: '60%', marginLeft: 20}}>
                                <TextField value={ Patient_id } style={{marginTop: -25}} fullWidth={true} onChange={(event) => this.setState({ Patient_id: event.target.value })} hintText='Patient ID' floatingLabelText='Enter Patient ID'/>
                            </div>
                            <div style={{width: '60%', marginLeft: 20}}>
                                <TextField value={ Patient_name } style={{marginTop: -25}} fullWidth={true} onChange={(event) => this.setState({ Patient_name: event.target.value })} hintText='Enter Full Name' floatingLabelText='Enter Full Name'/>
                            </div>
                            <div style={{width: '60%', marginLeft: 20}}>
                                <TextField value={ Patient_address } style={{marginTop: -25}} fullWidth={true} onChange={(event) => this.setState({ Patient_address: event.target.value })} hintText='Enter Patient Address' floatingLabelText='Enter Patient Address'/>
                            </div>
                            <div style={{width: '60%', marginLeft: 20}}>
                                <TextField value={ Patient_cell } style={{marginTop: -25}} fullWidth={true} onChange={(event) => this.setState({ Patient_cell: event.target.value })} hintText='Contact No' floatingLabelText='Enter Patient Contact No'/>
                            </div>
                            <div style={{width: '60%', marginLeft: 20}}>
                                <SelectField fullWidth={true} style={{marginTop: -25}} floatingLabelText="Gender" value={Patient_Gender} onChange={this._genderChange}>
                                    <MenuItem value='Male' primaryText="Male"/>
                                    <MenuItem value='Female' primaryText="Female"/>
                                </SelectField>
                            </div>
                            <div style={{width: '60%', marginLeft: 20}}>
                                <TextField value={ Patient_age } style={{marginTop: -25}} fullWidth={true} onChange={ (event) => this.setState({ Patient_age: event.target.value }) } hintText='Age' floatingLabelText='Age'/>
                            </div>
                            <div style={{width: '60%', marginLeft: 20}}>
                                <label>
                                    Appointment Date: 
                                    <input style={{width: 300}} type="date" value={ Appointment_Date } onChange={(event) => this.setState({Appointment_Date: event.target.value})} />
                                </label>
                            </div>
                            <div style={{marginLeft: '5%'}}>
                                <ImagesUploader
                                    url="http://localhost:9090/notmultiple"
                                    optimisticPreviews
                                    value={ Patient_images }
                                    multiple={false}
                                    onLoadEnd={(err) => {
                                        if (err) {
                                            console.error(err);
                                        }
                                    }}
                                    label="Upload a Patient Image"
                                />
                            </div>
                            <RaisedButton to='/patient' label='Submit' fullWidth={false} primary={true} style={{ marginTop: 25, marginLeft: '40%'}} onClick={this.submitPatient}/>
                            <Link to='/patient'><FlatButton primary={true}  label="Cancel" /></Link>
                        </form>
                    </div>
                </MuiThemeProvider>
        )
    }
}

export default addPatient;
