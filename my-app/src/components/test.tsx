import * as React from 'react';

export interface AppProps { username: string; }
export interface AppState { courseName: string; }

export default class Test extends React.Component<AppProps, AppState> {
    constructor(public props: AppProps) {
        super(props);
        this.state = {
            courseName: 'CourseName'
        };
    }

    onChangeCourseName() {
        if (this.state.courseName === 'CourseName') {
            this.setState({
                courseName: 'NewCourseName'
            });
        } else {
            this.setState({
                courseName: 'CourseName'
            });
        }        
    }

    render() {
        return ( 
            <div>
                <p>Hello {this.props.username}</p>
                <p>You are playing {this.state.courseName}</p>
                <p/>
                <button className="btn btn-primary" onClick={() => this.onChangeCourseName()}>Change Course</button>
            </div>
        );
    }
}