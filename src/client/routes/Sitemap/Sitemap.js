import React from "react";
import Routes from "../../Routes";
import DynamicSitemap from "react-dynamic-sitemap";
import { Redirect } from "react-router";

export default function Sitemap(props) {
	return (
		// <DynamicSitemap routes={Routes} prettify={true} {...props}/>
		<Redirect to="/compare"/>
	);
}