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
            if (query.loading) {
              return 'Loading...'
            }

            return query.data.getUsers.map(item => {
              return <div>{item.firstName}</div>
            })

          }}
        </Query>
      </div>
    );
  }
}

export default App;
