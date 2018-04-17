import * as React from 'react';
import axios from 'axios';

export interface CourseSetState {
    courseName: string;
    hole1par?: number;
    hole2par?: number;
    hole3par?: number;
    hole4par?: number;
    hole5par?: number;
    hole6par?: number;
    hole7par?: number;
    hole8par?: number;
    hole9par?: number;
    hole10par?: number;
    hole11par?: number;
    hole12par?: number;
    hole13par?: number;
    hole14par?: number;
    hole15par?: number;
    hole16par?: number;
    hole17par?: number;
    hole18par?: number;
}

export default class ViewCourseSet extends React.Component<{}, CourseSetState> {
    constructor(public props: any, public state: CourseSetState) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            courseName: '',
            hole1par: undefined,
            hole2par: undefined,
            hole3par: undefined,
            hole4par: undefined,
            hole5par: undefined,
            hole6par: undefined,
            hole7par: undefined,
            hole8par: undefined,
            hole9par: undefined,
            hole10par: undefined,
            hole11par: undefined,
            hole12par: undefined,
            hole13par: undefined,
            hole14par: undefined,
            hole15par: undefined,
            hole16par: undefined,
            hole17par: undefined,
            hole18par: undefined,
        };
    }
    componentWillMount() {
        axios.get('http://localhost:51434/api/rounds/First%20Game')
            .then((response) => {
                this.setState({
                    courseName: response.data.CourseName,
                    hole1par: response.data.Hole1Par
                });
            });
    }

    handleChange(event: any) {
        this.setState({
            hole1par: event.target.hole1.value,
            hole2par: event.target.hole2.value,
            hole3par: event.target.hole3.value,
            hole4par: event.target.hole4.value,
            hole5par: event.target.hole5.value,
            hole6par: event.target.hole6.value,
            hole7par: event.target.hole7.value,
            hole8par: event.target.hole8.value,
            hole9par: event.target.hole9.value,
            hole10par: event.target.hole10.value,
            hole11par: event.target.hole11.value,
            hole12par: event.target.hole12.value,
            hole13par: event.target.hole13.value,
            hole14par: event.target.hole14.value,
            hole15par: event.target.hole15.value,
            hole16par: event.target.hole16.value,
            hole17par: event.target.hole17.value,
            hole18par: event.target.hole18.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">{this.state.hole1par}</div>
                    <div className="col-lg-2">{this.state.hole2par}</div>
                    <div className="col-lg-2">{this.state.hole3par}</div>
                    <div className="col-lg-2">{this.state.hole4par}</div>
                    <div className="col-lg-2">{this.state.hole5par}</div>
                    <div className="col-lg-2">{this.state.hole6par}</div>
                </div>
                <div className="row">
                    <div className="col-lg-2">{this.state.hole7par}</div>
                    <div className="col-lg-2">{this.state.hole8par}</div>
                    <div className="col-lg-2">{this.state.hole9par}</div>
                    <div className="col-lg-2">{this.state.hole10par}</div>
                    <div className="col-lg-2">{this.state.hole11par}</div>
                    <div className="col-lg-2">{this.state.hole12par}</div>
                </div>
                <div className="row">
                    <div className="col-lg-2">{this.state.hole13par}</div>
                    <div className="col-lg-2">{this.state.hole14par}</div>
                    <div className="col-lg-2">{this.state.hole15par}</div>
                    <div className="col-lg-2">{this.state.hole16par}</div>
                    <div className="col-lg-2">{this.state.hole17par}</div>
                    <div className="col-lg-2">{this.state.hole18par}</div>
                </div>
                <div className="row">
                    <h1>Course IS set.</h1>
                </div>
                <div className="row">
                    <h3>You are playing {this.state.courseName}</h3>
                </div>
                <div className="row">
                    <p>Please enter course information:</p>
                </div>
                <div className="row">
                    <form>
                        <div className="col-lg-2">Hole 1 Par: <input name="hole1" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 2 Par: <input name="hole2" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 3 Par: <input name="hole3" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 4 Par: <input name="hole4" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 5 Par: <input name="hole5" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 6 Par: <input name="hole6" type="number" onChange={this.handleChange} /></div>
                    </form>
                </div>
                <div className="row">
                    <form>
                        <div className="col-lg-2">Hole 7 Par: <input name="hole7" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 8 Par: <input name="hole8" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 9 Par: <input name="hole9" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 10 Par: <input name="hole10" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 11 Par: <input name="hole11" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 12 Par: <input name="hole12" type="number" onChange={this.handleChange} /></div>
                    </form>
                </div>
                <div className="row">
                    <form>
                        <div className="col-lg-2">Hole 13 Par: <input name="hole13" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 14 Par: <input name="hole14" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 15 Par: <input name="hole15" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 16 Par: <input name="hole16" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 17 Par: <input name="hole17" type="number" onChange={this.handleChange} /></div>
                        <div className="col-lg-2">Hole 18 Par: <input name="hole18" type="number" onChange={this.handleChange} /></div>
                    </form>
                </div>            
            </div>                    
        );
    }
}