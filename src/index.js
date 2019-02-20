import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Comments from './Comments';
import Search from './Search';

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
				</ul>
				<hr />
				<Route exact path="/" component={Home} />
				<Route exact path="/comments" component={Comments} />
				<Route exact path="/search" component={Search} />
			</div>
		</Router>
	)
};

ReactDOM.render(<App />, document.getElementById('root'));