import React, { Component, Fragment, useState } from 'react'
import {
  Redirect
} from 'react-router-dom'
import Anime from 'react-anime';

export default class NotFoundPage extends Component {  

  state = {
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }
    render() {
      return (          
        this.state.redirect
      ? <Redirect to="/" />
      :            
      <Anime opacity={[0, 1]} translateY={'5em'} delay={(e, i) => i * 10}>
            <div className="tc pv4 pv5-ns">
              <div className="ttu tracked">
              <p style={{color: '#ff80cc'}}>ヾ(。￣□￣)ﾂ 404!</p>
              </div>              
            </div>    
        </Anime>
        
      )
    }
};