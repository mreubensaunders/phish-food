import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { DRAFTS_QUERY } from './DraftsPage'




class SubscripePage extends Component {
  state = {
    email: null,
    content: null,
    focus1: 'b--black-10',
    focus2: 'b--black-10'
  }

  render() {
    return (
        <div style={{backgroundColor: 'orange'}}>
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
                  const { email, content } = this.state                  
                  await createSub({
                    variables: { email, content },
                  })
                  this.props.history.replace('/thanks')
                }}
              >
                <div className="tc pv4 pv5-ns">
              <div className="ttu tracked">
              drop me a line _<i class="fas fa-feather"></i>
              </div>
              
                </div>  
                <input
                  autoFocus
                  className={`w-100 mv2 br1 pa3 ${this.state.focus1} bw1`}
                  onChange={e => this.setState({ email: e.target.value })}
                  onFocus={e => this.setState({ focus1: 'b--black-20' })}
                  onBlur={e => this.setState({ focus1: 'b--black-10' })}
                  placeholder="your email address"
                  type="text"
                  value={this.state.email}
                />            
                <textarea
                  className={`db w-100 ba bw1 ${this.state.focus2} br1 pa3 mb2`}
                  cols={50} 
                  onChange={e => this.setState({ content: e.target.value})}
                  onFocus={e => this.setState({ focus2: 'b--black-20' })}
                  onBlur={e => this.setState({ focus2: 'b--black-10' })}                  
                  placeholder="message..."
                  rows={8}
                  value={this.state.content}
                />
                <input
                  className={`pa3 bg-black-10 bn ${this.state.email && this.state.content &&                    
                    'dim pointer'}`}
                  disabled={!this.state.email && !this.state.content}
                  type="submit"
                  value="send"
                />
                <a className="f7 pa3 pointer cancel" onClick={this.props.history.goBack}>
                  or cancel
                </a>
              </form>
            </div>
          )
        }}
      </Mutation>
      </div>
    )
  }

}

const SUBSCRIPTION_MUTATION = gql`
  mutation CreateSubsriptionMutation($email: String!, $content: String!) {
    createSub(email: $email, content: $content) {
      id
      email      
      content
    }
  }
`

const SUB_QUERY = gql`
  query SubQuery {
    subs {
      id
      email
      content
    }
  }
`


export default withRouter(SubscripePage)
