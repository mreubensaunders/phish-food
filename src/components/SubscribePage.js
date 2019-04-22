import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { DRAFTS_QUERY } from './DraftsPage'

class SubscripePage extends Component {
  state = {
    email: ''    
  }

  render() {
    return (
      <Mutation
        mutation={SUBSCRIPTION_MUTATION}
        update={(cache, { data }) => {
          const { subs } = cache.readQuery({ query: SUB_QUERY })
          cache.writeQuery({
            query: SUB_QUERY,
            data: { subs: subs.concat([data.createSub]) },
          })
        }}
      >
        {(createSub, { data, loading, error }) => {
          return (
            <div className="pa4 flex justify-center bg-white">
              <form
                onSubmit={async e => {
                  e.preventDefault()
                  const { email } = this.state
                  await createSub({
                    variables: { email },
                  })
                  this.props.history.replace('/thanks')
                }}
              >
                <h1>Enter your email address!</h1>
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ email: e.target.value })}
                  placeholder="email address"
                  type="text"
                  value={this.state.email}
                />            
                <input
                  className={`pa3 bg-black-10 bn ${this.state.email &&                    
                    'dim pointer'}`}
                  disabled={!this.state.email}
                  type="submit"
                  value="Create"
                />
                <a className="f6 pointer" onClick={this.props.history.goBack}>
                  or cancel
                </a>
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }

}

const SUBSCRIPTION_MUTATION = gql`
  mutation CreateSubsriptionMutation($email: String!) {
    createSub(email: $email) {
      id
      email
    }
  }
`

const SUB_QUERY = gql`
  query SubQuery {
    subs {
      id
      email
    }
  }
`


export default withRouter(SubscripePage)
