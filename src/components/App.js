import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import UserJPG from './image/user.jpg';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {Card, CardHeader } from 'material-ui/Card';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500 } from 'material-ui/styles/colors';
import Person from 'material-ui/svg-icons/social/person';
import People from 'material-ui/svg-icons/social/people';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import { NavLink } from 'react-router-dom';
import Calender from './Calender';
import Carousel from './Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { database } from 'firebase';

const logoutStyles = {
    marginTop: 265
};

const dividerStyle = {
    margin: 10
}
const styleCalender = {
    position: "relative",
    margin: "10px auto",
    marginLeft: "60%"
}

injectTapEventPlugin();

class app extends Component{
    constructor() {
        super();
        this.state = {
            drawerOpened: false
        }
    }
    // componentDidMount() {
    //     database.once('value', (snapshot) => {
    //         console.log('count' + snapshot.numChildren());
    //     })
    // }
    _toggleDrawer() {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        });
    }
    signOut(){
        firebaseApp.auth().signOut();
    }
    
    onDayClick = (e, day) => {
        alert(day);
    }

    render(){

        return (
                <MuiThemeProvider>
                    <div>
                        <AppBar title='Expert System For Dermatologist' onLeftIconButtonTouchTap={() => this._toggleDrawer()} />
                        <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>
                            <List>
                                <Card>
                                    <CardHeader title="User" subtitle="User@gmail.com" avatar={UserJPG} />
                                </Card>
                                <br />
                                <Divider style={dividerStyle} />
                                 <ListItem leftAvatar={<Avatar icon={<Person />} backgroundColor={blue500} />}><NavLink to="/profile">Profile</NavLink></ListItem>
                                 <ListItem leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}><NavLink to="/report">Reports</NavLink></ListItem>
                                 <ListItem leftAvatar={<Avatar icon={<People />} backgroundColor={blue500} />}><NavLink to="/patient">Patients</NavLink></ListItem>
                                 <br />
                                 <Divider style={dividerStyle} />
                                <FlatButton style={logoutStyles} icon={<Logout />} label="Signout" fullWidth={true} onTouchTap={ () => this.signOut()} />
                            </List>
                        </Drawer>
                        <Calender style={styleCalender} width="400px" onDayClick={(e, day) => this.onDayClick(e, day)} />
                        <div style={{marginTop: '-17%', width: '55%', marginLeft: 20}}>
                            <Carousel />
                        </div>
                    </div>
                </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, null) (app);
