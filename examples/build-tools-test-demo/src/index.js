
import React from "react";
import {HashRouter,Route} from "react-router-dom";

import {startApplication} from "@/globals/app";
import BasicLayout from "@/layouts/BasicLayout";
import HomePage from "@/pages/HomePage";
import TestPage from "@/pages/TestPage";


startApplication(()=>(
	<HashRouter>
		<BasicLayout>
			<Route path="/" component={HomePage}/>
			<Route path="/test" component={TestPage}/>
		</BasicLayout>
	</HashRouter>
));

