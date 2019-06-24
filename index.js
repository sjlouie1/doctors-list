import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'
 
library.add(faBriefcaseMedical)

// main app
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('app'));