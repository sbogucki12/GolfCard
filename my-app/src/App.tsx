import * as React from 'react';
import './App.css';
import Test from './components/test';
import { TestProps } from '../src/components/test';

class App extends React.Component<TestProps, {}> {  
    constructor(public props: TestProps, public state: {}) {
        super(props)
    }
    render() {
        return (
            <div className="App">
                <Test courseName={'none'} />        
            </div>
        );
    }
}

export default App;
