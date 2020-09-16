import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Nomatch from "./components/Nomatch/Nomatch";
import Post from "./components/Post/Post";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Posts />
					</Route>
					<Route exact path="/post/:postId">
						<Post />
					</Route>
					<Route path="*">
						<Nomatch />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
