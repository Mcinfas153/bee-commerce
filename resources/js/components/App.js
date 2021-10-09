import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar';
import Login from './Login';

function App() {
    return (
        <div className="app">
            <TopBar />
            <Login />
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
