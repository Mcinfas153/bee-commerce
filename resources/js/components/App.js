import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar';
import Register from './Register';

function App() {
    return (
        <div className="app">
            <TopBar />
            <Register />
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
