import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../src/App.css';

export default class AddRoundData extends Component {
    constructor(props, state) {
        super(props)
        this.state = {
            isHolesSelected: this.props.isHolesSelected,
            holes: this.props.holes
        }
    }

    onClickNine() {
        this.setState({
            isHolesSelected: true, 
            holes: 9
        })
    }

    onClickEighteen() {
        this.setState({
            isHolesSelected: true,
            holes: 18
        })
    }

    render() {
        {
            let content;
            if (this.state.isHolesSelected == false) {
                content = <div>
                    <h4>Are you playing 9 or 18 holes?</h4>
                    <div className="row">
                        <div className="col-lg-6"><button className="btn btn-info" onClick={() => this.onClickNine()}>9</button></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6"><button className="btn btn-warning" onClick={() => this.onClickEighteen()}>18</button></div>
                    </div>
                </div>
            } else if (this.state.isHolesSelected == true && this.state.holes == 9) {
                content =
                    <div><h2>Nine Holes</h2></div>
            } else if (this.state.isHolesSelected == true && this.state.holes == 18) {
                content = 
                    <div><h2>18 Holes</h2></div>
            }
            return content;
        } 
    }
}
