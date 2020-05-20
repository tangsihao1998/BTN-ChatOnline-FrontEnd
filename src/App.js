import React from 'react';


import HomePage from './pages/HomePage';

import { BrowserRouter as Router,Route,Switch }  from 'react-router-dom'
import { withRouter } from 'react-router'

// Scroll To Top Component
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
const Scroll = withRouter(ScrollToTop);

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Scroll>
            <Switch>
              <Route exact path='/' component={HomePage} />
            </Switch>
          </Scroll>
        </div>
      </Router>
    );
  }
}

export default App;
