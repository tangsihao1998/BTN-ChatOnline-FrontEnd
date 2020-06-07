import React, { PureComponent } from 'react';

import './HomePage.scss';

// // import Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
// import Messaging from '../../components/Messaging';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import Introduction from '../../components/Introduction';
import AuthenticationContainer from './../../components/AuthenticationContainer';


class HomePage extends PureComponent {
	render() {
		return (
			<Router>
				<div className="HomePage">
					{/* HEADER */}
					<Header {...this.props} />
					<Switch>
						<div className='App__background'>
							<Route exact path="/" component={Introduction}/>
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/authentication" component={AuthenticationContainer} />
							{/* <Route exact path="/" component={Messaging} /> */}
						</div>
					</Switch>
					{/* FOOTER */}
					<Footer {...this.props} />
				</div>
			</Router>
		);
	}
}

export default HomePage;
