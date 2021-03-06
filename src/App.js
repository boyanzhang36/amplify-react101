import React from 'react';
import './App.css';
import Todos from './components/Todos';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


class App extends React.Component {
  state = {
    todos: [  // n1: 这是个Database Mock
      {
        id: 1, 
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2, 
        title: 'Feed KK',
        completed: false
      },
      {
        id: 3, 
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>  
        <AmplifySignOut />
      </div>
    );
  }
}

export default withAuthenticator(App);
