import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@config/AppRoutes';
import { ThemeProvider } from '@theme/index';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<AppRoutes />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
