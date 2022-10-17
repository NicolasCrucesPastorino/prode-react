import ProdeUsuarioLogic from "./ProdeUsuarioLogic";
import ProdeUsuarioProviderLayer from "./ProdeUsuarioProviderLayer";

const ProdeUsuario = ({ uid }) => (
  <ProdeUsuarioProviderLayer uid={uid}>
    <ProdeUsuarioLogic />
  </ProdeUsuarioProviderLayer>
);

export default ProdeUsuario;
