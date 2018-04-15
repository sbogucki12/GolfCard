import * as React from 'react';
import './App.css';
import Test from './components/test';
import { AppProps } from '../src/components/test';

class App extends React.Component<AppProps, {}> {
    constructor(public props: AppProps) {
        super(props)
    };

    render() {
        return (
            <div className="App">
                <Test username={'none'} courseName={'none'}/>        
            </div>
        );
    }
}

export default App;
