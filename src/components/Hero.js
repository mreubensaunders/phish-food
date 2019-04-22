import React, { Component } from 'react'

class Hero extends Component {
  state = {
    title: '',
    content: ''    
  }

  render() {
    return (
        <div className="hero-container">
            <div className="hero">
                <div className="info">
                    <h1>Frijjj</h1>
                </div>
                <div className="info">
                    <h3></h3>
                </div>
                <div className="footer-container">
                    <div className="footer">
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

// const CREATE_DRAFT_MUTATION = gql`
//   mutation CreateDraftMutation($title: String!, $content: String!) {
//     createDraft(title: $title, content: $content) {
//       id
//       title
//       content
//     }
//   }
// `

export default Hero;