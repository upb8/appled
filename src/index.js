import React from 'react';
import ReactDOM from 'react-dom';
import Search from './screens/Search';
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Search />, document.getElementById('root'));
serviceWorker.unregister();
