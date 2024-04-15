const authService = {
	isAuthenticated: () => {
		// Mock logic: check if user is authenticated
		// For demonstration purposes, let's assume the user is authenticated if there is a token in localStorage
		return sessionStorage.getItem('token') !== null;
	},
	logout: () => {
		// Mock logic: perform logout
		// For demonstration purposes, let's remove the token from localStorage
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('refreshToken');
	},
};

export default authService;
