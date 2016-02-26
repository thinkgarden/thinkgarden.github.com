

### Basis Useage with Router and Route

    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos} />
    </Router>

Routeer is the container that contains Route. Route dedicate path.

### Navigating with Link


### Nested Routes

Lets nest our About and Repos components inside of App so that we can share the navigation with all screens in the app. We do it in two steps:

First, let the App Route have children, and move the other routes underneath it.

    // index.js
    // ...
    render((
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          {/* make them children of `App` */}
          <Route path="/repos" component={Repos}/>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    ), document.getElementById('app'))

Next, render children inside of App.

    // modules/App.js
    // ...
      render() {
        return (
          <div>
            <h1>Ghettohub Issues</h1>
            <ul role="nav">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/repos">Repos</Link></li>
            </ul>

            {/* add this */}
            {this.props.children}

          </div>
        )
      }
    // ...

Alright, now go click the links and notice that the App component continues to render while the child route's component gets swapped around as this.props.children :)

React Router is constructing your UI like this:

    // at /about
    <App>
      <About/>
    </App>

    // at /repos
    <App>
      <Repos/>
    </App>



### Adding a Route with Parameters

    <Route path="/repos/:userName/:repoName" component={Repo}/>

 Note that the parameter name in the route path becomes the property name in the component. Both repoName and userName are available on this.props.params of your component.


### Index Routes
