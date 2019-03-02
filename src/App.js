import React, { Component } from 'react';
import './App.css';
// IMPORT:
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const addUser = gql`
  mutation addUser($firstName: String!, $lastName: String!) {
    addUser(firstName: $firstName, lastName: $lastName) {
      id
    }
  }
`
const getUsers = gql`
  query getUsers {
    getUsers {
      id
      firstName
      lastName
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
              return (
                <div key={item.id}>
                  {item.firstName}&nbsp;
                  {item.lastName}
                </div>
              )
            })

          }}
        </Query>
      </div>
    );
  }
}

export default App;
