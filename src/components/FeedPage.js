import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import Loading from './Loading'
import LoadingAlt from './LoadingAlt'

export default class FeedPage extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                {/* <div>Loading ...</div>  */}
                <LoadingAlt></LoadingAlt>
                <Loading/>
              </div>
            )
          }//<---MAKE THIS AND (ERROR) INTO COMPONENTS

          if (error) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>An unexpected error occured.</div>
              </div>
            )
          }

          return (
            <Fragment>
            {/* <div className="fl w-100 pl4 pr4">
              <Hero/>
            </div> */}
              <h1 className="pink">Feed</h1>
              {data.feed &&
                data.feed.map(post => (
                  <Post
                    key={post.id}
                    post={post}
                    refresh={() => refetch()}
                    isDraft={!post.published}
                    time={Date.now().toString()}
                  />
                ))}
              {this.props.children}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      content
      title
      published
    }
  }
`
