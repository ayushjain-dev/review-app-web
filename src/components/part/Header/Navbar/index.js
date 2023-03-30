import React, { useEffect, useState } from 'react';
import { Container } from '@core/layout';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { appRoutes } from '@utils/globalConstants';
import { Text } from '@core/input';
import { Button } from '@core/util';

export default function Navbar() {
	// State
	const [darkTheme, setDarkTheme] = useState(true);

	// Hooks
	useEffect(() => {
		localStorage.setItem('darkTheme', darkTheme);
	}, [darkTheme]);

	return (
		<div className="bg-secondary shadow-md shadow-black">
			<Container className="p-3">
				<div className="flex justify-between items-center text-white">
					<div>
						<Link to={appRoutes.HOME}>
							<img src="/app.png" alt="Movie Review App" className="h-10" />
						</Link>
					</div>
					<div>
						<ul className="flex items-center space-x-4">
							{darkTheme ? (
								<li>
									<button type="button" className="bg-yellowSubtle p-1 rounded" onClick={() => setDarkTheme(false)}>
										<BsFillSunFill className="text-secondary" size={24} />
									</button>
								</li>
							) : (
								<li>
									<button type="button" className="bg-yellowSubtle p-1 rounded" onClick={() => setDarkTheme(true)}>
										<BsFillMoonFill className="text-secondary" size={24} />
									</button>
								</li>
							)}
							<li>
								<Text className="bg-transparent text-xl" placeholder="search" />
							</li>
							<li className="font-semibold text-lg">
								<Button type="link" label="Login" to={appRoutes.SIGNIN} />
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
}
