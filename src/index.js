import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IdeasList from './Components/IdeasList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IdeasList />, document.getElementById('root'));
registerServiceWorker();
