import React, { Component } from 'react'
import Anime from 'react-anime';
import { Query, Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { FEED_QUERY } from './FeedPage'

export default class Like extends Component {

  constructor()
  {
    super();
    // let randomTestNum = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    this.state = {count: 0, clicked: false};
  }

  increaseCount() {    
    this.setState(state => ({
        count: this.state.count += 1,
        clicked: true
    }));
  }

  handleClick = () => { if(!this.state.clicked) this.increaseCount(); }
  //this._renderAction(this.props.post)

  render() {
    // let title = this.props.post.title
    // if (this.props.isDraft) {
    //   title = `${title} (Draft)`
    // }

    return (            
      <div className="like-container">
        {this.state.clicked ? 
        (<Anime delay={(e, i) => i * 100}
        scale={[.1, 1]}>
        <div className="like" style={{backgroundColor: '#ff80cc', borderColor: '#ff80cc'}} onClick={this.handleClick}><i style={{color: 'white'}} class="far fa-heart"></i></div>
        </Anime>) : (<div className="like" onClick={this.handleClick}><i class="far fa-heart"></i></div>)}
        
        <div className="like-count">{this.state.count}</div>        
      </div>
    )
  }
}

// _renderAction = ({ id, published }) => {
//     const likeMutation = (
//       <Mutation
//         mutation={LIKE_MUTATION}
//         update={(cache, { data }) => {          
//           const { feed } = cache.readQuery({ query: FEED_QUERY })
//           cache.writeQuery({
//             query: FEED_QUERY,
//             data: { feed: feed.concat([data.like]) },
//           })          
//         }}
//       >
//       {(like, { data, loading, error }) => {
//         return (
//           <a
//             className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
//             onClick={async () => {
//               await like({
//                 variables: { id },
//               })
//               this.props.history.replace('/')
//             }}
//           >
//             Publish
//           </a>
//         )
//       }}
//     </Mutation>
// )};

const LIKE_MUTATION = gql`
  mutation PublishMutation($id: ID!) {
    publish(id: $id) {
      id
      published
    }
  }
`