import * as React from 'react';
import axios from 'axios';

export interface CourseSetState {
    courseName: string; 
    hole1par?: number;
}

export default class ViewCourseSet extends React.Component<{}, CourseSetState> {
    constructor(public props: any, public state: CourseSetState) {
        super(props);
        this.state = {
            courseName: '',
            hole1par: undefined
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

    render() {
        return (
            <div>
                <h1>Course IS set.</h1>
                <h3>You are playing {this.state.courseName}</h3>
                <p><b>Hole 1</b> is a par {this.state.hole1par}.</p>
            </div>
        );
    }
}