import { styled } from '@mui/material'
import { useUploadAvatar } from '../../hooks/useUploadAvatar'
import { ReactComponent as AddPhoto } from '../../assets/icons/AddPhoto.svg'

const AvatarUpload = ({ valid, photo, ...rest }) => {
   const { handleAvatarChange } = useUploadAvatar()

   return (
      <CenteredDiv>
         <label id="file" {...rest}>
            <input
               id="file"
               hidden
               accept="image/*"
               type="file"
               onChange={handleAvatarChange}
            />

            <div>
               {(photo && <StyledImg src={photo} alt="" />) || (
                  <Container valid={valid}>
                     <AddPhoto />
                     <Text>Нажмите для добавления фотографии</Text>
                  </Container>
               )}
            </div>
         </label>
      </CenteredDiv>
   )
}
export default AvatarUpload

const CenteredDiv = styled('div')({
   display: 'flex',
   justifyContent: 'center',
})

const StyledImg = styled('img')({
   width: '217px',
   height: '247px',
})

const Container = styled('div')(({ valid }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   width: '217px',
   height: '217px',
   background: '#F6F6F9',
   border: `1px solid ${valid ? 'red' : '#DCDCE4'}`,
   borderRadius: '8px',
   margin: '32px',
}))

const Text = styled('p')({
   fontFamily: 'Inter',
   fontWeight: 400,
   fontSize: '12px',
   lineHeight: '16px',
   display: 'flex',
   alignItems: 'center',
   textAlign: 'center',
   color: '#8E8EA9',
   padding: '16px',
})
