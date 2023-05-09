import { useGoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import MyButton from '../UI/Button'
import { ReactComponent as GoogleIcon } from '../../assets/icons/GoogleBlack.svg'
import {
   postAuthGoogle,
   getGoogleApis,
} from '../../redux/reducer/auth/authThunk'

export const SignInGoogle = () => {
   const dispatch = useDispatch()

   const login = useGoogleLogin({
      onSuccess: async (response) => {
         dispatch(getGoogleApis(response))
         dispatch(postAuthGoogle(response))
      },
   })
   const handleClick = (event) => {
      event.preventDefault()
      login()
   }

   return (
      <div>
         <MyButton
            variant="contained"
            background="#f1f1f1"
            propswidth="482px"
            hoverbackgroundcolor="#d6d5d5"
            activebackgroundcolor="#d6d6d6"
            defaultcolor="black"
            onClick={handleClick}
            type="button"
         >
            <GoogleIcon />
            Продолжить с Google
         </MyButton>
      </div>
   )
}
