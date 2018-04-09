import * as React from 'react';
import './App.css';
import Test from './components/test';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Test username={'steve'} />        
            </div>
        );
    }
}

export default App;
