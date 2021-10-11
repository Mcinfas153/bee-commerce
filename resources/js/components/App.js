import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import TopBar from './TopBar';
import Login from './Login'
import Register from './Register';
import Home from './Home';
import TopNav from './TopNav';
import Navbar from './Navbar';
import Footer from './Footer'

function App() {
    return (
        <Router>
            <div className="app">
                <TopBar />
                <TopNav />
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
