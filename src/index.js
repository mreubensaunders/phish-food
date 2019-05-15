import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
// import './styles/Main.css';
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import FeedPage from './components/FeedPage'
import AirdropFeed from './components/AirdropFeed'
import DraftsPage from './components/DraftsPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'
import HelloPage from './components/HelloPage'
import SubscribePage from './components/SubscribePage'
import ThanksPage from './components/ThanksPage'
import NotFoundPage from './components/NotFoundPage'
import StackPage from './components/StackPage';
import Anime from 'react-anime';
import Hero from './components/ThemeSwitch';
import {StateProvider, useStateValue} from './AppState';

import 'tachyons'
import './index.css'
//import './dark.css'


import CreateAirdrop from './components/CreateAirdrop';
import ThemeSwitch from './components/ThemeSwitch';

const client = new ApolloClient({ uri: 'https://phish-food-server.herokuapp.com' })
//const [{ theme }] = useStateValue();

const initialState = {
  theme: { primary: 'white' }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme
      };
      
    default:
      return state;
  }
};

ReactDOM.render(
  
  <StateProvider initialState={initialState} reducer={reducer}>  
  <ApolloProvider client={client}>  
    <Router>
      <Fragment>      
        <nav className="pa3 pa4-ns">    
        <NavLink
            className="link dim f6 f5-ns dib mr3 black"
            activeClassName="pink"
            exact={true}
            to="/"
            title="Hello"
          >
            Hello
          </NavLink>         
          <NavLink
            className="link dim f6 f5-ns dib mr3 black"
            activeClassName="pink"
            exact={true}
            to="/feed"
            title="Feed"
          >
            Feed
          </NavLink>         
          {/* <NavLink
          className="link dim f6 f5-ns dib mr3 black"
          activeClassName="pink"
          exact={true}
          to="/stack"
          title="Stack"
        >
          Stack
        </NavLink>     */}
          {/* <NavLink
            className="link dim f6 f5-ns dib mr3 black"
            activeClassName="pink"
            exact={true}
            to="/drafts"
            title="Drafts"
          >
            Drafts
          </NavLink> */}
          {/* <Link
            to="/create"
            className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
          >
            + Add Post
          </Link>          */}
        </nav>
        <div className="fl w-100 pl4 pr4">
          <Switch>
            <Route exact path="/" component={HelloPage} />
            <Route exact path="/feed" component={FeedPage} />
            {/* <Route exact path="/feed" component={AirdropFeed} /> */}
            <Route path="/drafts" component={DraftsPage} />
            <Route path="/create" component={CreatePage} />
            <Route path="/airdrop" component={CreateAirdrop} />
            <Route path="/stack" component={StackPage} />
            <Route path="/thanks" component={ThanksPage} />
            <Route path="/subscribe" component={SubscribePage} />
            <Route path="/post/:id" component={DetailPage} />
            <Route component={NotFoundPage} />
          </Switch>
            
        {/* <Anime scale={[1, 1]} direction={"reverse"} width={'3%'} easing={"easeOutQuad"} loop={true}> */}
        <div className="rs-icon">
          <a className="rs-github" href="https://github.com/arcaneflorist" target="_blank" style={{textDecoration: "none"}}><div className="sec"><i style={{fontSize: '24px'}} class="fab fa-github-alt"></i> </div></a>
        </div>
        {/* </Anime> */}
        
        </div> 
        <ThemeSwitch></ThemeSwitch>   
      </Fragment>
    </Router>
  </ApolloProvider>
  </StateProvider>,
  document.getElementById('root'),
)
