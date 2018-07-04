import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import UserJPG from './image/user.jpg';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500 } from 'material-ui/styles/colors';
import Person from 'material-ui/svg-icons/social/person';
import People from 'material-ui/svg-icons/social/people';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import Apps from 'material-ui/svg-icons/navigation/apps';
import { NavLink, Link } from 'react-router-dom';
import { firebaseApp } from '../firebase.js';

const logoutStyles = {
    marginTop: 235
};

const dividerStyle = {
    margin: 10
};

const cardStyle = {
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10
};

const actionStyle = {
    marginLeft: 500,
};

class Patient extends Component{
    constructor() {
        super();
        this.state = {
            drawerOpened: false
        }
    }
    _toggleDrawer() {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        });
    }

    signOut(){
        firebaseApp.auth().signOut();
    }
    render(){
        return (
                <MuiThemeProvider>
                    <div>
                        <AppBar title='Patient Information' onLeftIconButtonTouchTap={() => this._toggleDrawer()} />
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
                        <Card style={cardStyle}>
                            <CardHeader style={{fontSize: '200%', textAlign: 'center', padding:'2%'}}>Welcome to Patient Information</CardHeader>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. 
                            Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. 
                            Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. 
                            Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. 
                            Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                            <CardActions style={actionStyle}>
                                <Link to='/addpatient'><FlatButton style={{marginRight:10}} label="Add Patient" /></Link>
                                <Link to='/viewpatient'><FlatButton style={{marginLeft:10}} label="View Patient" /></Link>
                            </CardActions>
                        </Card>
                    </div>
                </MuiThemeProvider>
        )
    }
}

export default Patient;
