import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddEightteen from "./addEightteen";
import AddNineHoles from "./addEightteen";
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
                    <div>
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-lg-4">
                                    <label for="hole1par">Hole 1 Par</label>
                                    <input type="number" class="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole2par">Hole 2 Par</label>
                                    <input type="number" class="form-control" id="hole2par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole3par">Hole 3 Par</label>
                                    <input type="number" class="form-control" id="hole3par" placeholder="Enter par" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label for="hole4par">Hole 4 Par</label>
                                    <input type="number" class="form-control" id="hole4par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole5par">Hole 5 Par</label>
                                    <input type="number" class="form-control" id="hole5par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole6par">Hole 6 Par</label>
                                    <input type="number" class="form-control" id="hole6par" placeholder="Enter par" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label for="hole7par">Hole 7 Par</label>
                                    <input type="number" class="form-control" id="hole7par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole8par">Hole 8 Par</label>
                                    <input type="number" class="form-control" id="hole8par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole9par">Hole 9 Par</label>
                                    <input type="number" class="form-control" id="hole9par" placeholder="Enter par" />
                                </div>
                            </div>                            
                        </div>  
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
            } else if (this.state.isHolesSelected == true && this.state.holes == 18) {
                content =
                    <div>
                    <form>
                        <div class="form-group">
                            <div className="row">
                                <div className="col-lg-4">
                                    <label for="hole1par">Hole 1 Par</label>
                                    <input type="number" class="form-control" id="hole1par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole2par">Hole 2 Par</label>
                                    <input type="number" class="form-control" id="hole2par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole3par">Hole 3 Par</label>
                                    <input type="number" class="form-control" id="hole3par" placeholder="Enter par" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label for="hole4par">Hole 4 Par</label>
                                    <input type="number" class="form-control" id="hole4par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole5par">Hole 5 Par</label>
                                    <input type="number" class="form-control" id="hole5par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole6par">Hole 6 Par</label>
                                    <input type="number" class="form-control" id="hole6par" placeholder="Enter par" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label for="hole7par">Hole 7 Par</label>
                                    <input type="number" class="form-control" id="hole7par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole8par">Hole 8 Par</label>
                                    <input type="number" class="form-control" id="hole8par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole9par">Hole 9 Par</label>
                                    <input type="number" class="form-control" id="hole9par" placeholder="Enter par" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label for="hole10par">Hole 10 Par</label>
                                    <input type="number" class="form-control" id="hole10par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole11par">Hole 11 Par</label>
                                    <input type="number" class="form-control" id="hole11par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole12par">Hole 12 Par</label>
                                    <input type="number" class="form-control" id="hole12par" placeholder="Enter par" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label for="hole13par">Hole 13 Par</label>
                                    <input type="number" class="form-control" id="hole13par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole14par">Hole 14 Par</label>
                                    <input type="number" class="form-control" id="hole14par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole15par">Hole 15 Par</label>
                                    <input type="number" class="form-control" id="hole15par" placeholder="Enter par" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label for="hole16par">Hole 16 Par</label>
                                    <input type="number" class="form-control" id="hole16par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole17par">Hole 17 Par</label>
                                    <input type="number" class="form-control" id="hole17par" placeholder="Enter par" />
                                </div>
                                <div className="col-lg-4">
                                    <label for="hole18par">Hole 18 Par</label>
                                    <input type="number" class="form-control" id="hole18par" placeholder="Enter par" />
                                </div>
                            </div>
                            {/*<input type="number" class="form-control" id="hole1par" aria-describedby="hole1help" placeholder="Enter par" />
                            <small id="hole1help" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
                        </div>                        
                        {/*<div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>*/}
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
            } else {
                content = <p>ERROR</p>
            }
            return <div>{content}</div>
        } 
    
    }    
}
