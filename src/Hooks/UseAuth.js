import React, { useContext, useEffect, useState } from 'react'
import { useFirestore } from './useFirestore';
import { authprovider, getAuth } from './../firebase/firebase';
import { ROL } from '../Constantes';
import { 
    signInWithPopup, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
} from 'firebase/auth';


// constante que maneja las keys donde se almacenaran las credenciales y objetos del usuario
const localStorageFolder = {
    AUTH: 'auth',
    TOKEN: 'token',
}

const authcontext = React.createContext();

const useAuth = () => {
    const initStateUserAuth = localStorage.getItem(localStorageFolder.AUTH) !== null? JSON.parse(localStorage.getItem(localStorageFolder.AUTH)) : {rol: ROL.GUEST};
    
    const auth = getAuthInstance();
    const { storeUserData, getdatauserfromid } = useFirestore();
    
    const [issigned, setIsSigned] = useState(false);
    const [userAuth, setUserAuth] = useState( initStateUserAuth );
    
    useEffect(() => {
        if(userAuth.rol !== ROL.GUEST && localStorage.getItem(localStorageFolder.TOKEN) !== null ) {
            setsession(localStorage.getItem(localStorageFolder.TOKEN), useAuth);
        }
    }, []);

    const signin = () => {
        signInWithPopup(auth, authprovider)
            .then(result => {
                const credentials = GoogleAuthProvider.credentialFromResult(result);
                const token = credentials.accessToken
                const user = result.user
                
                if(setsession(token,user)){
                    console.log('usuario autenticado id:',userAuth.uid)
                    console.log('rol',userAuth.rol)
                }else{
                    console.log('usuario no autenticado')
                }
            })
            .catch(error => {
                const errorcode = error.code
                const errormessage = error.errormessage
                const email = error.customData.email
                const credentials = GoogleAuthProvider.credentialFromError(error)
            })
    }

    const registrarse = async (email, password, name,lastname, phone) => {
        try {
            const usercredentials = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password
            )

            await storeUserData(usercredentials.user.uid, name, lastname, phone)
            
            const newuser={...usercredentials.user,lastname,phone}
            setsession(usercredentials.user.accessToken, newuser)
            console.log('usuario registrado',newuser)
            
            return usercredentials
        } catch (error) {
            throw error
        }
    }

    const logearseEnTuProde = async (email, password) => {
        try{         
            const usercredentials = await signInWithEmailAndPassword(auth, email, password);

            const userdata = await getdatauserfromid(usercredentials.user.uid);
            
            const totaldata = {
                email: usercredentials.user.email,
                uid: usercredentials.user.uid,
                photoURL: usercredentials.user.photoURL,
                displayName: userdata.name,
                lastname: userdata.lastname,
                phone: userdata.phone
            }

            setsession(usercredentials.user.accessToken, totaldata)
            return usercredentials
        }
        catch(error){
            console.log('error',error)
        }
    }
   
    const signedout = () => {
        getAuth().signOut()
        setIsSigned(false)
        localStorage.removeItem(localStorageFolder.TOKEN);
        localStorage.removeItem(localStorageFolder.AUTH);
    }

    const isSigned = () => { return issigned }
    
    const setsession = (token, user) => {
        setIsSigned(true);

        const updateUserAuth = {
            email: user.email,
            name: user.displayName,
            lastname: user.lastname || '',
            phone: user.phone || '',
            image: user.photoURL || '',
            uid: user.uid,
            rol: (user.email === process.env['REACT_APP_ADMIN_USER']? ROL.ADMIN : ROL.USER)
        } 
        setUserAuth(updateUserAuth);

        localStorage.setItem(localStorageFolder.TOKEN, token);
        localStorage.setItem(localStorageFolder.AUTH, JSON.stringify(updateUserAuth));

        return issigned;
    }
    
    return {
        signin,
        signedout,
        isSigned,
        userauth: userAuth,
        registrarse,
        logearseEnTuProde
    }
}

const getAuthInstance = () => {
    const auth = getAuth();

    auth.lenguageCode = 'it'
    //setea el pop up al idioma de la computadora de origen
    return auth;
}

// Componente proveedor de contexto de autenticacion
export const AuthProvider = ({ children }) => {
    const auth = useAuth()

    return (
        <authcontext.Provider value={auth}>
            {children}
        </authcontext.Provider>
    )
}

// Hook para consumir el contexto de autenticacion
export default () => {
    return useContext(authcontext)
}