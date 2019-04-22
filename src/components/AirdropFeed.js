import React, { Component, Fragment } from 'react'
import Post from './Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

const AIRDROP_FEED = gql`
{
  airdrops{
    name
  }
}
`

export default class AirdropFeed extends Component {
  render() {
    return (
      <Query query={AIRDROP_FEED}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>Loading ...</div>
              </div>
            )
          }

          if (error) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>An unexpected error occured.</div>
              </div>
            )
          }

          return (
            <Fragment>
              <h1>Feed</h1>
              {data.airdrops &&
                data.airdrops.map(airdrop => (                  
                  <div key={airdrop.id}>
                    {airdrop.name}
                  </div>
                ))}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}


