import  React, { Component } from 'react'; 

export default class AddRoundName extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);                 

        fetch('http://localhost:51434/api/rounds', {
            method: 'POST', 
            body: data
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Enter Name for This Round</label>
                    <input id="roundName" name="roundName" type="text" />

                    <button>Send data!</button>
                </form>
            </div>           
        );
    }
}

