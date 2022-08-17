import React, {useContext, useState} from 'react'
import { authprovider, createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from './../firebase/firebase'
const authcontext=React.createContext();

const useAuth = () => {
    const auth = getAuth()
    auth.lenguageCode = 'it'
    //setea el pop up al idioma de la computadora de origen
    const [issigned, setissigned] = useState(false)
    const [userauth, setuserauth] = useState({})
    
    
    const signin = () => {
        signInWithPopup(auth,authprovider)
            .then(result => {
                const credentials = GoogleAuthProvider.credentialFromResult(result);
                const token = credentials.accessToken
                const user = result.user
                localStorage.setItem('token',token)
                setissigned(true)
                setuserauth({
                    ...userauth,
                    email: user.email,
                    name: user.displayName,
                    image: user.photoURL,
                    uid: user.uid

                })
                console.log(token)
                console.log(user)
            })
            .catch(error => {
                const errorcode = error.code
                const errormessage = error.errormessage
                const email = error.customData.email
                const credentials = GoogleAuthProvider.credentialFromError(error)

            })
    }
    const registrarse = async (email,password) =>{
        try{
           const usercredentials=await createUserWithEmailAndPassword(auth,email,password) 
        } catch (error){
            throw error
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
    }


}
export const AuthProvider = ({children})=> {
    const auth = useAuth()

    return (
        <authcontext.Provider value = {auth}>
            {children}
        </authcontext.Provider>
    )
}
export default  () => {

    return useContext(authcontext)
}