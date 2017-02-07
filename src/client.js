/**
 * Created by DzEN on 11/21/2016.
 */
import React      from 'react';
import ReactDOM   from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App        from './components/App';
import configureStore from './configureStore';

ReactDOM.render(<Provider store={configureStore()}>
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <IndexRoute component={App}/>
  </Router>
</Provider>,
  document.getElementById('react-view'));
