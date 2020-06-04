import React, { Component } from 'react';

// import library
import jwt_decode from 'jwt-decode';
// import React-Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
// import Axios
import Axios from './axios';
// import Redux
import { connect } from 'react-redux';
import actions from './redux/actions';
// import components
import HomePage from './pages/HomePage';
import client from './feathers';

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

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {};
  }


	componentDidMount() {
		// Try to authenticate with the JWT stored in localStorage
		client.authenticate().catch(() => this.setState({ login: null }));

		// if (localStorage.jwtToken) {
		// 	Axios.setAuthToken(localStorage.jwtToken);
		// 	const decoded = jwt_decode(localStorage.jwtToken);
		// 	this.props.setCurrentUser(decoded);
		// }
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Scroll>
						<Switch>
							<Route path="/" component={HomePage} />
						</Switch>
					</Scroll>
				</div>
			</Router>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (currentUser) => dispatch(actions.setCurrentUser(currentUser)),
	setError: (error) => dispatch(actions.setError(error)),
});

const mapStateToProps = (state) => ({
	// currentUser: selectors.getCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
