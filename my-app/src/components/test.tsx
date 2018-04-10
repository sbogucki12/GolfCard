import * as React from 'react';
import axios from '../../node_modules/axios';

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
                <p>Hello {this.props.username}</p>
                <p>You are playing {this.state.courseName}</p>
                <p/>
                <button className="btn btn-primary" onClick={() => this.onChangeCourseName()}>Change Course</button>
            </div>
        );
    }
}