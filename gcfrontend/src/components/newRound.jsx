import React, { Component } from 'react';
import '../../src/App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import AddRoundData from './addRoundData';

export default class NewRound extends Component {
    constructor(props, state) {
        super()
        this.state = {
            isRoundNamed: false 
        }
    }

    isHolesSelected = false;

    onSubmit() {
        this.setState({
            isRoundNamed: true
        })
    }

    render() {
        return (
            <Router>
                <div>
                    {this.state.isRoundNamed ? <div> <p>You are playing ROUNDNAME</p><Link to="/addrounddata"><button className="btn btn-primary">Click to add par info for Round</button></Link></div> : <div><h2>Please give your round a name:</h2><h4><i>If you leave this round, you can return to it using this name.</i></h4><p><input /><button className="btn btn-primary" onClick={() => this.onSubmit()}>Save Name</button></p></div>}
                    <Route path="/addrounddata" render={(props) => <AddRoundData {...props} isHolesSelected={false} />} />
                </div>
            </Router>
        )
    }
}