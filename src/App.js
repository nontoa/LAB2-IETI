import React, { Component } from 'react';

import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./Login"
import TodoApp from "./TodoApp"
export default class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          isLoggedIn: true
      }

  }

  render() {
      
      const LoginView = () => (
          <Login />
      );
      const TodoView = () => (
          <TodoApp />
      )

      return (

          <Router>
              <div className="App">

                  <div>
                      <Switch>
                          <Route exact path="/" component={LoginView} />
                          <Route path="/todo" component={TodoView} />
                      </Switch>
                  </div>
                  
              </div>
          </Router>
      );
  }

}
