import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import Users from "./components/Users/Users";
import Courses from "./components/Courses/Coureses";

class App extends Component {
  render() {
    return (
     
      
      <div className="App">
        <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Users</NavLink></li>
                            <li><NavLink to="/courses">courses</NavLink></li>
                        </ul>
                    </nav>
                </header>
        <h1>hello</h1>
        <Route path="/" component={Users} />
        <Route path="/courses" component={Courses} />
        
      </div>
      
    );
  }
}

export default App;
