import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.Fragment>
        <h1 className='text-center text-capitalize'>Displaying data from jsonplaceholder using axios</h1>
        <div className="container">
            <div className="row">
                <App />
            </div>
        </div>
    </React.Fragment>,
    document.getElementById("root")
)