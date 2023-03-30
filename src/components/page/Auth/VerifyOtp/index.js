/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@core/layout';
import { Text } from '@core/input';
import { Button } from '@core/util';

export function VerifyOtp() {
	// state
	const [activeOtpIndex, setActiveOtpIndex] = useState(0);
	const inputRef = useRef();

	// constants
	const otpLength = 6;
	const [otp, setOtp] = useState(new Array(otpLength).fill(''));

	// function
	const handleOtpChange = ({ target }, i) => {
		const { value } = target;
		const renderOtp = [...otp];
		renderOtp[i] = value.substring(0, 1);
		setOtp([...renderOtp]);
		setActiveOtpIndex(i + 1);
	};

	// hooks
	useEffect(() => {
		inputRef.current?.focus();
	}, [activeOtpIndex]);

	return (
		<div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
			<Container>
				<form className="bg-secondary rounded p-6 w-96 space-y-6">
					<div className="space-y-1">
						<h1 className="text-yellowSubtle text-center text-xl font-semibold">Please Verify OTP</h1>
						<p className="text-darkSubtle text-center text-sm">OTP has been sent to your email</p>
					</div>
					<div className="flex justify-evenly space-x-5">
						{otp.map((num, i) => {
							return (
								<Text
									inputRef={activeOtpIndex === i ? inputRef : null}
									onChange={(e) => handleOtpChange(e, i)}
									value={otp[i] || ''}
									type="number"
									className="w-9 h-9 bg-transparent text-center font-semibold number-input-style"
									key={i}
								/>
							);
						})}
					</div>
					<Button label="Verify" />

					<div className="flex justify-end text-sm">
						<Button type="button" label="Resend OTP" className="text-darkSubtle hover:text-white" />
					</div>
				</form>
			</Container>
		</div>
	);
}

export default VerifyOtp;
