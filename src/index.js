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
// import Hero from './components/Hero';

import 'tachyons'
import './index.css'
import CreateAirdrop from './components/CreateAirdrop';

const client = new ApolloClient({ uri: 'http://localhost:4000' })

ReactDOM.render(
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
            to="/Feed"
            title="Feed"
          >
            Feed
          </NavLink>         
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
            <Route path="/thanks" component={ThanksPage} />
            <Route path="/subscribe" component={SubscribePage} />
            <Route path="/post/:id" component={DetailPage} />
          </Switch>
            
        
        <footer className="footer">
          <a className="rs-github" href="https://github.com/arcaneflorist" target="_blank" style={{textDecoration: "none"}}><div className="sec"><i class="fab fa-github-alt"></i>  arcaneflorist</div></a>
        </footer>
        </div>    
      </Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
