import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/projects" component={Projects}/>
                </Router>
            </div>
        );
    }
}

const app = document.getElementById("main");
ReactDOM.render(<App/>, app);
