import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddEightteen from "./addEightteen";
import AddNineHoles from "./addNineHoles";
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
            if (this.state.isHolesSelected === false) {
                content = <div>
                    <h4>Are you playing 9 or 18 holes?</h4>
                    <div className="row">
                        <div className="col-lg-6"><button className="btn btn-info" onClick={() => this.onClickNine()}>9</button></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6"><button className="btn btn-warning" onClick={() => this.onClickEighteen()}>18</button></div>
                    </div>
                </div>
            } else if (this.state.isHolesSelected === true && this.state.holes === 9) {
                content =
                    <div className="parComponent">
                        <form>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4 parHeading">
                                    <h1>ROUNDNAME</h1>
                                </div>
                                <div className="col-lg-4" />
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                            </div>
                        </form>
                    </div>
            } else if (this.state.isHolesSelected === true && this.state.holes === 18) {
                content =
                    <div>
                        <form>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <h1>ROUNDNAME</h1>
                                </div>
                                <div className="col-lg-4" />
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <label htmlFor="hole1par">Hole 1 Par</label>
                                        <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                    </div>
                                    <div className="col-lg-4" />
                            </div>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <label htmlFor="hole1par">Hole 1 Par</label>
                                    <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4" />
                            </div>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <label htmlFor="hole1par">Hole 1 Par</label>
                                    <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4" />
                            </div>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <label htmlFor="hole1par">Hole 1 Par</label>
                                    <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4" />
                            </div>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <label htmlFor="hole1par">Hole 1 Par</label>
                                    <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4" />
                            </div>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <label htmlFor="hole1par">Hole 1 Par</label>
                                    <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4" />
                            </div>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <label htmlFor="hole1par">Hole 1 Par</label>
                                    <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4" />
                            </div>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <label htmlFor="hole1par">Hole 1 Par</label>
                                    <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4" />
                            </div>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <label htmlFor="hole1par">Hole 1 Par</label>
                                    <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4" />
                            </div>
                            <div className="row">
                                <div className="col-lg-4" />
                                <div className="col-lg-4">
                                    <label htmlFor="hole1par">Hole 1 Par</label>
                                    <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4" />
                            </div>
                                <div className="row">
                                    <div className="col-lg-4" />
                                    <div className="col-lg-4">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                    <div className="col-lg-4" />
                                </div>
                            </div>
                        </form>
                    </div>
            } else {
                content = <p>ERROR</p>
            }
            return <div>{content}</div>
        } 
    
    }    
}
