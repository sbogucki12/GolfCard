import * as React from 'react';
import axios from 'axios';

export interface CourseSetState {
    courseName: string;
    roundName: string; 
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
            roundName: 'First Game',
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
                    roundName: 'First Game',
                    hole1par: response.data.Hole1Par, 
                    hole2par: response.data.Hole2Par,
                    hole3par: response.data.Hole3Par,
                    hole4par: response.data.Hole4Par,
                    hole5par: response.data.Hole5Par,
                    hole6par: response.data.Hole6Par,
                    hole7par: response.data.Hole7Par,
                    hole8par: response.data.Hole8Par,
                    hole9par: response.data.Hole9Par,
                    hole10par: response.data.Hole10Par,
                    hole11par: response.data.Hole11Par,
                    hole12par: response.data.Hole12Par,
                    hole13par: response.data.Hole13Par,
                    hole14par: response.data.Hole14Par,
                    hole15par: response.data.Hole15Par,
                    hole16par: response.data.Hole16Par,
                    hole17par: response.data.Hole17Par,
                    hole18par: response.data.Hole18Par
                });
            });
    }

    handleChange(event: any) {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;        
        this.setState({
            [name]: value
        });
        axios.put('http://localhost:51434/api/rounds/addhole', this.state);
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
                <form>
                    <div className="col-lg-2">Hole 1 Par: <input name="hole1par" type="number" /></div>
                    <div className="col-lg-2">Hole 2 Par: <input name="hole2par" type="number" /></div>
                    <div className="col-lg-2">Hole 3 Par: <input name="hole3par" type="number" /></div>
                    <div className="col-lg-2">Hole 4 Par: <input name="hole4par" type="number" /></div>
                    <div className="col-lg-2">Hole 5 Par: <input name="hole5par" type="number" /></div>
                    <div className="col-lg-2">Hole 6 Par: <input name="hole6par" type="number" /></div>
                    <div className="col-lg-2">Hole 7 Par: <input name="hole7par" type="number" /></div>
                    <div className="col-lg-2">Hole 8 Par: <input name="hole8par" type="number" /></div>
                    <div className="col-lg-2">Hole 9 Par: <input name="hole9par" type="number" /></div>
                    <div className="col-lg-2">Hole 10 Par: <input name="hole10par" type="number" /></div>
                    <div className="col-lg-2">Hole 11 Par: <input name="hole11par" type="number" /></div>
                    <div className="col-lg-2">Hole 12 Par: <input name="hole12par" type="number" /></div>
                    <div className="col-lg-2">Hole 13 Par: <input name="hole13par" type="number" /></div>
                    <div className="col-lg-2">Hole 14 Par: <input name="hole14par" type="number" /></div>
                    <div className="col-lg-2">Hole 15 Par: <input name="hole15par" type="number" /></div>
                    <div className="col-lg-2">Hole 16 Par: <input name="hole16par" type="number" /></div>
                    <div className="col-lg-2">Hole 17 Par: <input name="hole17par" type="number" /></div>
                    <div className="col-lg-2">Hole 18 Par: <input name="hole18par" type="number" /></div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}