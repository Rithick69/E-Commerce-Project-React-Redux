// withAuth.js
// import React from 'react';
// import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authService from './authService';

const Auth = (WrappedComponent) => {
	const AuthComponent = (props) => {
		// const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

		const { isAuthenticated } = authService;

		if (!isAuthenticated()) {
			// Redirect to login page or perform any other action
			return <Redirect to="/login" />;
		}

		return <WrappedComponent {...props} />;
	};

	return AuthComponent;
};

export default Auth;
