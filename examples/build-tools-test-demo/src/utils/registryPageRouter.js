import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";


//将页面注册为路由
export default function registryPageRouter({ component, ...routeProps }) {
	const renderTarget = document.createElement("div");
	document.body.appendChild(renderTarget);
	ReactDOM.render((
		<HashRouter>
			<Route {...routeProps} component={component} />
		</HashRouter>
	), renderTarget);
};