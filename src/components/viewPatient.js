import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDatas } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import UserJPG from './image/user.jpg';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import { Card, CardHeader } from 'material-ui/Card';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500 } from 'material-ui/styles/colors';
import Person from 'material-ui/svg-icons/social/person';
import People from 'material-ui/svg-icons/social/people';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import Apps from 'material-ui/svg-icons/navigation/apps';
import { NavLink } from 'react-router-dom';
import { database } from '../firebase.js';

const logoutStyles = {
    marginTop: 275
};

const dividerStyle = {
    margin: 10
}
const viewData = {
    marginLeft: 60,
    marginTop: 50
}
class viewPatient extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            drawerOpened: false
        };
    }

    componentDidMount() {
        console.log("component did mount call")

        database.on('value', (snapshot) => {
            let datas = [];
            snapshot.forEach((info) => {
            const { Patient_id, Patient_name, Patient_address ,Patient_age, Patient_cell, Patient_Gender, Appointment_Date } = info.val();
            datas.push({ Patient_id, Patient_name, Patient_address, Patient_age, Patient_cell, Patient_Gender, Appointment_Date });
            });
             //datas = [{Patient_address: "dummy address"}, {Patient_address: "dummy address"}, {Patient_address: "dummy address"} ]
            this.props.setDatas(datas);
        });
    }

    _toggleDrawer() {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        });
    }
    render() {
        console.log('this.props.datas', this.props);
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title='View Patients Information' onLeftIconButtonTouchTap={() => this._toggleDrawer()} />
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
                            <FlatButton style={logoutStyles} icon={<Logout />} label="Signout" fullWidth={true} onTouchTap={() => this.signOut()} />
                        </List>
                    </Drawer>
                    <div style={viewData}>
                        {
                                this.props.datas.map((info, index) => {
                                    return (
                                        <div key={index}>{info.Patient_id}, {info.Patient_name}, {info.Patient_address}, {info.Patient_age}, {info.Patient_cell}, {info.Patient_Gender}, {info.Appointment_Date}</div>
                                    )
                                })
                            }
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}



const mapStateToProps = state => {
    return {
        datas: state.datas.datas,
    }
}

/**
 * Previously it was absent 
 * now I added because we are playing with aync actions
 */
const mapDispatchToProps = (dispatch) => {
    return {
        setDatas: (datas) => {
            dispatch(setDatas(datas));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(viewPatient);


/* Testing rendering logic on DOM 


    // componentDidMount () {
    //     this.patientRef = database.ref().child('/Patients-information');
    //     this.patientRef.on('value', (snapshot) => {
    //         this.setState({
    //             data: snapshot.val()
    //         });
    //         console.log(this.state.data)
    //     });
    // }


                    // let PatientObj = info.val();
                // console.log('PatientObj', PatientObj);

*/

//    this.patientRef = database.ref().child('/Patients-information');


// { JSON.stringify(this.state.data, undefined, ' ') }