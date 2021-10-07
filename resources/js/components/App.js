import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

function App() {
    return (
        <div className="app">
            <Login />
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
