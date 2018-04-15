import * as React from 'react';
import { AppState } from './test';
import { AppProps } from './test';

export default class ViewCourseSet extends React.Component<AppProps, AppState> {
    constructor(public props: AppProps, public state: AppState) {
        super(props);
    }
    render() {        
        return (
            <div>
                <p>You are playing {this.props.courseName}.</p>
            </div>
        );
    }
}