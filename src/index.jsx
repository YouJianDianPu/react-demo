'use strict';

//引入
//react
import React from 'react';
//react-dom
import { render } from 'react-dom';
//react-router
import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';

//页面
import Home from 'page/home/index.jsx';

//路由
//render router
render(
	<Router history={hashHistory}>
		<Route path="/">
			<IndexRedirect to="home" />
			<Route path="home">
				<IndexRedirect to="index" />
				<Route path="index" component={Home} />
			</Route>
		</Route>
	</Router>,

	document.getElementById('app')
);