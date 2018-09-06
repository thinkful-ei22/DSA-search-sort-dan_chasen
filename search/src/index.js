import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './components/search';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Search />, document.getElementById('root'));
registerServiceWorker();
