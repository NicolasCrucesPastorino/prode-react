import ProdeUsuario from "../Components/prode_v2/components/ProdeUsuario";
import AuthConsumer from "../Hooks/UseAuth";

export const TuProde = () => {
  const { userauth } = AuthConsumer();
  return (
    <section>
      <h1>
        Prode de <span>{userauth.displayName}</span>
      </h1>
      <ProdeUsuario uid={userauth.uid} isEditable={true} />
    </section>
  );
};
