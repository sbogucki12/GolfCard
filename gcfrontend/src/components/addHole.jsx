import  React, { Component } from 'react'; 

export default class AddHole extends Component {
    render() {
        return 
        <div>
            <form>
                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-4" />
                        <div className="col-lg-4">
                            <label htmlFor="hole1par">Hole 1 Par</label>
                            <input type="number" className="form-control" id="hole1par" placeholder="Enter par" />
                        </div>
                        <div className="col-lg-4" />
                    </div>
                    <div className="row">
                        <div className="col-lg-4" />
                        <div className="col-lg-4">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div className="col-lg-4" />
                    </div>
                </div>
            </form>            
        </div>
    }
}