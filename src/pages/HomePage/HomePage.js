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
import Contact from '../../components/Contact';


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
							<Route path="/authentication" component={AuthenticationContainer} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/contact" component={Contact}/>

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
