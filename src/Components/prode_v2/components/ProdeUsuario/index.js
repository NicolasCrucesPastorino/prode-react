import ProdeUsuarioLogic from './ProdeUsuarioLogic';
import ProdeUsuarioProviderLayer from '../ProdeUsuarioProviderLayer';
import { getprodeporid } from '../../../../database/services/prodeService';

const ProdeUsuario = ({ uid, isEditable }) => (
	<ProdeUsuarioProviderLayer uid={uid} prodeFontFunction={getprodeporid}>
		<ProdeUsuarioLogic isEditable={isEditable} />
	</ProdeUsuarioProviderLayer>
);

export default ProdeUsuario;
