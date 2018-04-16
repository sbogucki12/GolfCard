import * as React from 'react';
import axios from '../../node_modules/axios';
import ViewCourseSet from './viewCourseSet';
import ViewCourseNotSet from './viewCourseNotSet';

export interface TestState {
     courseSet: boolean;
}

export default class Test extends React.Component<{}, TestState> {
    constructor(public props: {}, public state: TestState) {
        super(props);
        this.state = {            
            courseSet: false
        };
    }

    onSetCourse() {
        axios.get('http://localhost:51434/api/rounds/First%20Game')
            .then(() => {
                if (this.state.courseSet === false) {
                    this.setState({
                        courseSet: true
                    });
                } else {
                    this.setState({
                        courseSet: false
                    });
                }
                
            });
    }

    render() {
        const isCourseSet = this.state.courseSet;
        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.onSetCourse()}>Change Course</button>
                {isCourseSet ? (<ViewCourseSet />) : (<ViewCourseNotSet />)}
            </div>
        );
    }  
}
