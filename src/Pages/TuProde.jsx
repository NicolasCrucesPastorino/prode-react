import ProdeUsuario from "../Components/prode_v2/components/ProdeUsuario";
import AuthConsumer from "../Hooks/UseAuth";
import { daysLeftToCloseProde } from "../utils/dateUtils";

export const TuProde = () => {
  const { userauth } = AuthConsumer();
  const diasHataCerrarProde = daysLeftToCloseProde();
  const isEditable = diasHataCerrarProde > 0;

  return (
    <section>
      <header>
        <h1>
          Prode de <span>{userauth.displayName}</span>
        </h1>
        <p>Dias restantes para Jugar {diasHataCerrarProde}</p>
      </header>

      <ProdeUsuario uid={userauth.uid} isEditable={isEditable} />
    </section>
  );
};
