import React, { Component } from 'react';
import '../../src/App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import AddRoundData from './addRoundData';
import AddRoundName from './addRoundName';
import LoginModal from './loginModal';

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
            <div>
                <LoginModal />
                <Router>
                    <div>
                        {this.state.isRoundNamed ? <div> <p>You are playing ROUNDNAME</p><Link to="/addrounddata"><button className="btn btn-primary">Click to add par info for Round</button></Link></div>
                            :
                            <div>
                                <AddRoundName />
                            </div>}
                        <Route path="/addrounddata" render={(props) => <AddRoundData {...props} isHolesSelected={false} />} />
                    </div>
                </Router>
            </div>
        )
    }
}