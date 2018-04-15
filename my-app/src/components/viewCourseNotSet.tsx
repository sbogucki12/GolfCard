import * as React from 'react';
import { AppState } from './test';
import { AppProps } from './test';

export default class ViewCourseNotSet extends React.Component<AppProps, AppState> {
    constructor(public props: AppProps, public state: AppState) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>Please enter course name. </p>
            </div>
        );
    }
}