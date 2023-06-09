import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, PageNotFound } from '@page/index';
import { Signin, Signup, VerifyOtp, CreateNewPassword, ForgotPassword } from '@page/Auth';
import { appRoutes } from '@utils/globalConstants';
import { PrivateRoute } from '@config/AppRoutes/PrivateRoute';
import { Header } from '@part/index';

export function AppRoutes() {
	return (
		<>
			<Header />
			<Routes>
				{/* Public Routes */}
				<Route path={appRoutes.SIGNIN} element={<Signin />} />
				<Route path={appRoutes.SIGNUP} element={<Signup />} />
				<Route path={appRoutes.FORGOT_PASSWORD} element={<ForgotPassword />} />
				<Route path={appRoutes.VERIFICATION} element={<VerifyOtp />} />
				<Route path={appRoutes.CREATE_NEW_PASSWORD} element={<CreateNewPassword />} />
				<Route path={appRoutes.PAGE_NOT_FOUND} element={<PageNotFound />} />
				<Route path="*" element={<PageNotFound />} />

				{/* Private Routes */}
				<Route
					path={appRoutes.HOME}
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
}

export default AppRoutes;
