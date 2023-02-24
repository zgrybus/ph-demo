import React from 'react';
import { Outlet } from "react-router-dom";

export const Layout = () => (
	<div>
		Our layout
		<Outlet />
	</div>
)