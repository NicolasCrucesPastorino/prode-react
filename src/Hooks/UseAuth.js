import React, { useContext, useState } from 'react'
import { authprovider, createUserWithEmailAndPassword, signInWithEmailAndPassword ,getAuth, GoogleAuthProvider, signInWithPopup } from './../firebase/firebase'
import { useFirestore } from './useFirestore';
const authcontext = React.createContext();

const useAuth = () => {
    const auth = getAuth()
    const {storeUserData,getdatauserfromid}=useFirestore()

    auth.lenguageCode = 'it'
    //setea el pop up al idioma de la computadora de origen
    const [issigned, setissigned] = useState(false)
    const [userauth, setuserauth] = useState({rol:'user'})

    const setsession = (token, user) => {
        console.log(token,user)
        localStorage.setItem('token', token)
        console.log('proces' , process.env['REACT_APP_ADMIN_USER'])
        if(user.email===process.env['REACT_APP_ADMIN_USER']){
            user.rol='admin'
        }else{
            user.rol='user'
        }
        setissigned(true)
        setuserauth({
            email: user.email,
            name: user.displayName,
            lastname: user.lastname?user.lastname:'',
            phone: user.phone?user.phone:'',
            image: user.photoURL,
            uid: user.uid,
            rol: user.rol

        })
        return useAuth? true : false
    }


    const signin = () => {
        signInWithPopup(auth, authprovider)
            .then(result => {
                const credentials = GoogleAuthProvider.credentialFromResult(result);
                const token = credentials.accessToken
                const user = result.user
                
                if(setsession(token,user)){
                    console.log('usuario autenticado id:',userauth.uid)
                    console.log('rol',userauth.rol)
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
    const registrarse = async (email, password,name,lastname,phone) => {
        try {
            const usercredentials = await createUserWithEmailAndPassword(auth, email, password,)
            storeUserData(usercredentials.user.uid,name,lastname,phone).then()
            const newuser={...usercredentials.user,lastname,phone}
            setsession(usercredentials.user.accessToken, newuser)
            console.log('usuario registrado',newuser)
            return usercredentials
        } catch (error) {
            throw error
        }
    }

    const logearseEnTuProde = async (email,password) => {
        try{
            
            const usercredentials = await signInWithEmailAndPassword(auth,email,password)
            const userdata = await getdatauserfromid(usercredentials.user.uid)
            const totaldata = {...usercredentials.user,displayName:userdata.name,lastname:userdata.lastname,phone:userdata.phone}
            setsession(usercredentials.user.accessToken, totaldata)
            console.log('usuarioactivo', userauth)
            return usercredentials
        }
        catch(error){
            console.log('error',error)
        }
    }
   

    const signedout = () => {
        getAuth().signOut()
        setissigned(false)
        localStorage.removeItem('token')

    }

    const isSigned = () => {

        return issigned

    }
    return {
        signin,
        signedout,
        isSigned,
        userauth,
        registrarse,
        logearseEnTuProde
    }


}
export const AuthProvider = ({ children }) => {
    const auth = useAuth()

    return (
        <authcontext.Provider value={auth}>
            {children}
        </authcontext.Provider>
    )
}
export default () => {

    return useContext(authcontext)
}