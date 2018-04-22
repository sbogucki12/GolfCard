
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import NewRound from './components/newRound';
import SavedRound from './components/savedRound';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)


const BasicExample = () => (
    <Router>
        <div className="container">
            <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8"><Link to="/"><h1>GolfCard</h1></Link></div>
                <div className="col-lg-2" />
            </div>
            <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-5"><Link to="/newround"><button className="btn btn-warning">New</button></Link></div>

                {/* Use State to make this button conditional*/}
                <div className="col-lg-5"><Link to="/savedround"><button className="btn btn-primary">Saved</button></Link></div>
                <div className="col-lg-1" />
            </div>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/newround" component={NewRound} />
            {/*<Route path="/topics" component={Topics}/>*/}
            <Route path="/savedround" component={SavedRound} />
        </div>
    </Router>
)
export default BasicExample



//const NewRound = () => (
//    <div>
//        <h1>New Round</h1>
//    </div>
//)

//const SavedRound = () => (
//    <div>
//        <h1>Saved Round</h1>
//    </div>
//)

//const Topic = ({ match }) => (
//  <div>
//    <h3>{match.params.topicId}</h3>
//  </div>
//)

//const Topics = ({ match }) => (
//  <div>
//    <h2>Topics</h2>
//    <ul>
//      <li>
//        <Link to={`${match.url}/rendering`}>
//          Rendering with React
//        </Link>
//      </li>
//      <li>
//        <Link to={`${match.url}/components`}>
//          Components
//        </Link>
//      </li>
//      <li>
//        <Link to={`${match.url}/props-v-state`}>
//          Props v. State
//        </Link>
//      </li>
//    </ul>

//    <Route path={`${match.path}/:topicId`} component={Topic}/>
//    <Route exact path={match.path} render={() => (
//      <h3>Please select a topic.</h3>
//    )}/>
//  </div>
//)
