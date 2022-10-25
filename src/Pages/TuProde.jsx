import ProdeUsuario from "../Components/prode_v2/components/ProdeUsuario";
import AuthConsumer from "../Hooks/UseAuth";

export const TuProde = () => {
  const { userauth } = AuthConsumer();
  const fechaLimite = '2022-11-20:00:00:000Z' //'2021-06-11T00:00:00.000Z';
  const isEditable = (Date(fechaLimite) - Date.now() > 0)

  return (
    <section>
      <h1>
        Prode de <span>{userauth.displayName}</span>
      </h1>
      
      <ProdeUsuario uid={userauth.uid} isEditable={isEditable} />
    </section>
  );
};
