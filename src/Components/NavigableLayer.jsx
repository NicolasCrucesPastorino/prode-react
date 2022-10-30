import { Navbar } from './Navbar';

export const NavigableLayer = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};
