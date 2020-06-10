import React, { PureComponent } from 'react';

import './HomePage.scss';

// // import Router
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import Introduction from '../../components/Introduction';
import AuthenticationContainer from './../../components/AuthenticationContainer';
import Contact from '../../components/Contact';
import Messaging from '../../components/Messaging';

class HomePage extends PureComponent {
	render() {
		const token = localStorage.getItem('feathers-jwt');
		return (
			<Router>
				<div className="HomePage">
					{/* HEADER */}
					<Header {...this.props} />
					<Switch>
						<div className='App__background'>
							<Route exact path="/" component={Introduction}/>
							<Route path="/authentication" component={AuthenticationContainer} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/contact" component={Contact}/>
							{token ? (<Route exact path="/chat" component={Messaging} />):(<Redirect to='/authentication/signin'/>)}
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
