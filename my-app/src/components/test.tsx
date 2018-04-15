import * as React from 'react';
import axios from '../../node_modules/axios';
import ViewCourseSet from './viewCourseSet';
import ViewCourseNotSet from './viewCourseNotSet';

export interface AppProps {
    username: string;
    courseName: string;
}

export interface AppState {
    courseName: string;
    holeNumber?: number;
    holePar?: number;
    holeScore?: number;
    courseSet: boolean;
}

export default class Test extends React.Component<AppProps, AppState> {
    constructor(public props: AppProps, public state: AppState) {
        super(props);
        this.state = {
            courseName: 'CourseName',
            holeNumber: undefined,
            holePar: undefined,
            holeScore: undefined,
            courseSet: false
        };
    }

    onChangeCourseName() {
        axios.get('http://localhost:51434/api/rounds/First%20Game')
            .then((response) => {
                this.setState({
                    courseName: response.data.CourseName,
                    courseSet: true
                });
            });
    }

    render() {
        const isCourseSet = this.state.courseSet;
        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.onChangeCourseName()}>Change Course</button>
                {isCourseSet ? (<ViewCourseSet username={'steve'} courseName={this.state.courseName} />) : (<ViewCourseNotSet username={'steve'} courseName={'none'} />)}
            </div>
        );
    }  
}
//<div>
//    <p>Hello {this.props.username}</p>
//    if (this.state.courseName == "Not Set") {
//        <p>Please enter name of course.</p>
//    }
//    else {
//        <p>You are playing {this.state.courseName}</p>
//        <p />
//        <button className="btn btn-primary" onClick={() => this.onChangeCourseName()}>Change Course</button>

//        }
//</div> 