import React from 'react';
import ReactDOM from 'react-dom';
import Search from './screens/Search';
import Navigation from './navigation'
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navigation />, document.getElementById('root'));
serviceWorker.unregister();
