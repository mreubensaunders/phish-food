import React, { Component, Fragment } from 'react'
import Post from './Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
// import RewardPage from './RewardPage';
// import subscribeStyle from '../constants/subscribeStyle';

import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import img from '../assets/ME5.png';
import _img from '../assets/smug.png';
import {useStateValue} from '../AppState';

const arcane = false; //dfdsfsd

//https://66.media.tumblr.com/a4df63bf7f9fd8aa2eae34be6a4ce8e2/tumblr_odd74xENUC1tc5gvpo1_250.png

const Hero = () => {  
  return(
  <header class="tc pv4 pv5-ns">
    <img src={img} class="br3 ba b--black-10 h4 w4" alt="avatar"></img>
    <h1 class="f5 f4-ns fw6 black-70">Michael Saunders</h1>    
    <h2 class="f6 black-70 fw2 ttu tracked">Northampton, UK<p style={{color: '#ff80cc'}}>{'{ .NET, React, Vue, GraphQL, AWS }'}</p></h2>
  </header>
  )
};

const _Hero = () => {  
  return(
  <header class="tc pv4 pv5-ns">
    <img src={_img} class="br3 ba b--black-10 h4 w4" alt="avatar"></img>
    <h1 class="f5 f4-ns fw6 black-70">arcaneflorist</h1>    
    <h2 class="f6 black-70 fw2 ttu tracked">Tokyo III <p style={{color: '#ff80cc'}}>{'{ cobwebs && magic }'}</p></h2>
  </header>
  );
};

  export default function HelloPage() {
    const [{ theme }, dispatch] = useStateValue();
    
      return (
          <div>
            
            {theme.primary === "black" ? <_Hero/> :
            <Hero/>            
            }            
            <div className="tc pv4 pv3-ns">
              <div className="ttu tracked">
              <NavLink
              
            className="dash-dash link dim f6 f5-ns dib black"
            activeClassName="pink"
            exact={true}
            to="/subscribe"
            title="Subscribe"
          >
            Contact Me
          </NavLink>                  
              </div>   
              
              
              
            </div>    
               
          </div>   
            
      )
    };