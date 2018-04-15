import * as React from 'react';
//import axios from '../../node_modules/axios';
import ViewCourseSet from './viewCourseSet';
import ViewCourseNotSet from './viewCourseNotSet';

export interface TestProps {
    courseName: string;
}

export interface TestState {
     courseSet: boolean;
}

export default class Test extends React.Component<TestProps, TestState> {
    constructor(public props: TestProps, public state: TestState) {
        super(props);
        this.state = {            
            courseSet: false
        };
    }

    onChangeCourseName() {
        this.setState({
            courseSet: true
        });
    }

    render() {
        const isCourseSet = this.state.courseSet;
        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.onChangeCourseName()}>Change Course</button>
                {isCourseSet ? (<ViewCourseSet />) : (<ViewCourseNotSet />)}
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