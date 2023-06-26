import React, { memo } from 'react'
import { styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MyModal from '../../components/UI/modal/Modal'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logoutIcon.svg'
import MyButton from '../../components/UI/Button'
import { signOut } from '../../redux/reducer/auth/authThunk'

const Logout = React.forwardRef(({ open = false, onClose }, ref) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const logOutHandler = () => {
      navigate(dispatch(signOut()))
   }
   const booleanOpen = Boolean(open)
   return (
      <div>
         <MyModal open={booleanOpen} onClose={onClose} ref={ref}>
            <StyledIconContainer>
               <LogoutIcon />
            </StyledIconContainer>
            <StyledTitle>Вы уверены, что хотите выйти?</StyledTitle>
            <div>
               <MyButton
                  onClick={onClose}
                  variant="outlined"
                  hoverbackgroundcolor="#9c04fa"
                  activebackgroundcolor="#44046b"
                  defaultcolor="#8D949E"
                  outlinedbordercolor="#8D949E"
                  outlinedhoverandactivetextcolor="#fff"
                  propswidth="232px"
               >
                  Отмена
               </MyButton>
               <StyledMyButton
                  onClick={logOutHandler}
                  hoverbackgroundcolor="#C5243C"
                  activebackgroundcolor="#E72E49"
                  variant="contained"
                  background="#F91C3D"
                  propswidth="232px"
               >
                  Выйти
               </StyledMyButton>
            </div>
         </MyModal>
      </div>
   )
})

export default memo(Logout)

const StyledTitle = styled('p')`
   text-align: center;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 32px;
   color: #23262f;
   flex: none;
   order: 0;
   flex-grow: 0;
   margin-bottom: 32px;
`
const StyledIconContainer = styled('div')`
   text-align: center;
   margin-bottom: 16px;
`
const StyledMyButton = styled(MyButton)`
   margin-left: 16px;
`
