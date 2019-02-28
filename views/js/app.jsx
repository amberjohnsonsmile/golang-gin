import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    if (this.loggedIn) {
      return (<LoggedIn />)
    } else {
      return (<Home />)
    }
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-8 col-xs-offset-2 jumbotron text-center">
          <h1>Jokeish</h1>
          <p>A load of Dad jokes</p>
          <p>Sign in to get access</p>
        </div>
      </div>
    )
  }
}
