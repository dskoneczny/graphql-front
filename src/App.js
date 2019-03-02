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
  addUser = (mutation) => () => {
    mutation({
      variables: {
        firstName: "John",
        lastName: "Doe"
      },
      // optimisticUpdate
      refetchQueries: ['getUsers']
    })
  }
  render() {
    return (
      <div className="App">
        <Mutation mutation={addUser}>
          {mutation => {
            return <button onClick={this.addUser(mutation)}>Dodaj uzytkownika</button>
          }}
        </Mutation>
        <div style={{marginTop: 100}}>
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
      </div>
    );
  }
}

export default App;
