/**
* @file 电商落地页入口文件
* @author xishengbo(xishengbo@baidu.com)
*/

import React from 'react'
import { HashRouter, Route, hashHistory, Switch,Link} from 'react-router-dom'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>router相关学习</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox/4455">inbox/4455</Link></li>
          <li><Link to="/inbox">inbox</Link></li>
          <li><Link to="/">Defalt</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Default = React.createClass({
  render() {
    return <h3>Default</h3>
  }
})

const Inbox = ({ match }) => (
  <div>
    <h3>{match.params.indexId || "Welcome to your Inbox"}</h3>
  </div>
);


const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

React.render((
    <HashRouter history={hashHistory}>
        <div>
            <App/>
            <Switch>
                <Route exact path="/" component={Default} />
                <Route path="/about" component={About} />
                <Route path="/inbox/:indexId" component={Inbox} />
                <Route path="/inbox" component={Inbox} />
            </Switch>
        </div>
    </HashRouter>
), document.body);
