import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import Comments from './views/Comments';
import Search from './views/Search';
import Songs from './views/Songs';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const App = () => {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/comments">Comments</Link>
					</li>
					<li>
						<Link to="/search">Search</Link>
					</li>
					<li>
						<Link to="/songs">Songs</Link>
					</li>
				</ul>
				<hr />
				<Route exact path="/" component={Home} />
				<Route exact path="/comments" component={Comments} />
				<Route exact path="/search" component={Search} />
				<Route path="/songs" component={Songs} />
			</div>
		</Router>
	)
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer/*, initialState */, composeEnhancers(
	applyMiddleware(thunk)
));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));