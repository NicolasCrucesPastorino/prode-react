import { useProde } from './useProde';
import prodeContext from './prodeContext';
import { useContext } from 'react';

export const ProdeProvider = ({ prode = {}, puntos, children }) => {
	const prodehook = useProde(prode, puntos);
	return (
		<prodeContext.Provider value={prodehook}>
			{children}
		</prodeContext.Provider>
	);
};

const ConsumerProdeContext = () => useContext(prodeContext);

export default ConsumerProdeContext;
