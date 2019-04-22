import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { DRAFTS_QUERY } from './DraftsPage'

const AIRDROP_QUERY = gql`
  query AirdropQuery {
    airdrops {
      id
      name
    }
  }
`


class CreateAirdrop extends Component {
  state = {
    name: '',    
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_AIRDROP_MUTATION}
        update={(cache, { data }) => {
          const { airdrops } = cache.readQuery({ query: AIRDROP_QUERY })
          cache.writeQuery({
            query: AIRDROP_QUERY,
            data: { airdrops: airdrops.concat([data.createAirdrop]) },
          })
        }}
      >
        {(createAirdrop, { data, loading, error }) => {
          return (
            <div className="pa4 flex justify-center bg-white">
              <form
                onSubmit={async e => {
                  e.preventDefault()
                  const { name } = this.state
                  await createAirdrop({
                    variables: { name },
                  })                  
                }}
              >
                <h1>+ Airdrop</h1>
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ name: e.target.value })}
                  placeholder="you mention it..."
                  type="text"
                  value={this.state.name}
                />               
                <input
                  className={`pa3 bg-black-10 bn ${this.state.name &&
                    'dim pointer'}`}
                  disabled={!this.state.name}
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

const CREATE_AIRDROP_MUTATION = gql`
  mutation CreateAirdropMutation($name: String!) {
    createAirdrop(name: $name) {
      id
      name
    }
  }
`

export default withRouter(CreateAirdrop)
