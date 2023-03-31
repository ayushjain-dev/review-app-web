import React from 'react';
import { Container } from '@core/layout';
import { Text } from '@core/input';
import { Button } from '@core/util';

export function CreateNewPassword() {
	return (
		<div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
			<Container>
				<form className="bg-secondary rounded p-6 w-96 space-y-6">
					<h1 className="text-yellowSubtle text-center text-xl font-semibold">Create New Password</h1>
					<Text type="password" className="bg-transparent" placeholder="********" />
					<Button label="Save" />
				</form>
			</Container>
		</div>
	);
}

export default CreateNewPassword;
