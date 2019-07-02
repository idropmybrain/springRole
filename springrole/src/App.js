import React, { Component } from 'react';
// import logo from './logo.svg';

import Loadable from 'react-loadable';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import './App.css';



const LoadingComponent = ({ isLoading, isError, ...props }) => {
  console.log(props);
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return (
      <div>
        Sorry, unable to load the page
      </div>
    );
  }
  return null;
};

// const Bio = Loadable({
//   loader: () => import('./Components/Bio/bio'),
//   loading: LoadingComponent,
// });

const SpringRole = Loadable({
  loader: () => import('./Components/SpringRole/index'),
  loading: LoadingComponent,
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path={'/bio'} component={Bio} /> */}
          <Route path={'/'} component={SpringRole} />
        </Switch>
      </Router>
    );
  }
}

export default App;
