import React, { Component } from 'react';
import './App.css';
// IMPORT:
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const getUsers = gql`
  query getUsers {
    getUsers {
      id
      firstName
    }
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={getUsers}>
          {query => {
            console.log('QUERY', query)
            return 'Hello'
          }}
        </Query>
        Hello
      </div>
    );
  }
}

export default App;
