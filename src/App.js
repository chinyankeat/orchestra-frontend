import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import fire from './fire.js';
import Login from './components/session/Login';
import ListAllTrees from './components/trees/ListAllTrees';
import AddTree from './components/trees/AddTree';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  
  const signOut = () => {
    fire.auth().signOut()
  };

  console.log('logged in?', isLoggedIn);
  return (
    <div className="App">
      <Router>
        
        {!isLoggedIn
          ? (
            <>
              <Switch>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </>
          ) 
          : (
            <>
              <span onClick={signOut}>
                <a href="#">Sign out</a>
              </span>
              <Switch>
                <Route path="/add-tree">
                  <AddTree />
                </Route>
                <Route path="/">
                  <ListAllTrees />
                </Route>
              </Switch>
            </>
          )}
      </Router>
    </div>
  );
}
export default App;