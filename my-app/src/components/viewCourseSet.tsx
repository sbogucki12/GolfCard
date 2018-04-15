import * as React from 'react';
import axios from 'axios';

export interface CourseSetState {
    courseName: string;
}

export default class ViewCourseSet extends React.Component<{}, CourseSetState> {
    constructor(public props: {}, public state: CourseSetState) {
        super(props);
    }

    onChangeCourseName() {
        axios.get('http://localhost:51434/api/rounds/First%20Game')
            .then((response) => {
                this.setState({
                    courseName: response.data.CourseName                    
                });
            });
    }

    render() {        
        return (
            <div>
                <p>You are playing {this.state.courseName}.</p>
            </div>
        );
    }
}