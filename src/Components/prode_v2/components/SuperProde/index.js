import AuthConsumer from "../../../../Hooks/UseAuth";
import ProdeUsuarioProviderLayer from "../ProdeUsuarioProviderLayer";
import SuperProdeLogic from "./SuperProdeLogic";
import { getsuperprodeporid } from "../../../../database/services/superProdeService";

const SuperProde = () => {
  const { userauth } = AuthConsumer();

  return (
    <ProdeUsuarioProviderLayer
      uid={userauth.uid}
      prodeFontFunction={getsuperprodeporid}
    >
      <SuperProdeLogic />
    </ProdeUsuarioProviderLayer>
  );
};

export default SuperProde;
