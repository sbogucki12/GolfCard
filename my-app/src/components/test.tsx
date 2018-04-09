import * as React from 'react';

export interface AppProps { username: string; }

export default class Test extends React.Component<AppProps> {
    constructor(public props: AppProps) {
        super(props);
    }

    render() {
        return ( 
            <div>
                <p>Hello {this.props.username}</p>
            </div>
        );
    }
}