import {
   CardActionArea as MuiCardActionArea,
   CardActions as MuiCardActions,
   Card as MuiCard,
   styled,
   Typography as MuiTypography,
   CardContent as MuiCardContent,
   CardMedia,
} from '@mui/material'
import Meatballs from '../UI/Meatballs'
import Ananim from '../../assets/icons/anonim.svg'
import Lock from '../../assets/icons/key.svg'
import Present from '../../assets/icons/present.svg'
import Dislike from '../../assets/icons/dislake.svg'
import OpenLock from '../../assets/icons/lock.svg'
import { useMeatballs } from '../../hooks/useMeatballs'

const MEATBALLS_EXPECT_CONTENT = [
   {
      icon: Lock,
      title: 'Забронировать',
   },
   {
      icon: Ananim,
      title: 'Забронировать анонимно',
   },
   {
      icon: Present,
      title: 'Добавить в мои подарки',
   },
   {
      icon: Dislike,
      title: 'Пожаловаться',
   },
]
const MEATBALLS_RESERVE_CONTENT = [
   {
      icon: Present,
      title: 'Добавить в мои подарки',
   },
   {
      icon: OpenLock,
      title: 'Снять бронь',
   },
   {
      icon: Dislike,
      title: 'Пожаловаться',
   },
]

export default function ListCard({
   id,
   icon,
   userName,
   birthDate,
   title,
   img,
   date,
   reserve,
   expectation,
   openMeatballs,
   meatballsChangeHandler,
}) {
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()

   return (
      <Card>
         <CardActionArea key={id}>
            <CardMedia>
               <Img src={img} alt="" />
            </CardMedia>

            <CardContent>
               <CardHeader>
                  <HeaderAvatar>
                     <ImgIcon src={icon} alt="avatar" />
                     <UserName>{userName}</UserName>
                  </HeaderAvatar>
                  <UserBirthDate>{birthDate}</UserBirthDate>
               </CardHeader>

               <Typography gutterBottom variant="h5" component="div">
                  {title}
               </Typography>

               <CardActions>
                  <span>{date}</span>
                  <FooterAvatar>
                     {openMeatballs ? (
                        <>
                           <Button
                              type="submit"
                              onClick={meatballsChangeHandler}
                           >
                              {expectation}
                           </Button>
                           <Meatballs
                              arrayIcon={MEATBALLS_EXPECT_CONTENT}
                              open={open}
                              handleClose={handleClose}
                              handleClick={handleClick}
                              anchorEl={anchorEl}
                           />
                        </>
                     ) : (
                        <>
                           <ImgIcon src={icon} />
                           <Button
                              type="submit"
                              onClick={meatballsChangeHandler}
                           >
                              {reserve}
                           </Button>
                           <Meatballs
                              arrayIcon={MEATBALLS_RESERVE_CONTENT}
                              open={open}
                              handleClose={handleClose}
                              handleClick={handleClick}
                              anchorEl={anchorEl}
                           />
                        </>
                     )}
                  </FooterAvatar>
               </CardActions>
            </CardContent>
         </CardActionArea>
      </Card>
   )
}
const Card = styled(MuiCard)(() => ({
   padding: '16px 4px 4px 16px',
   background: '#FFFFFF',
   border: '1px solid #FFFFFF',
   borderRadius: '8px',
   width: '533px',
   height: '138px',
   margin: '16px 20px ',
}))
const CardActionArea = styled(MuiCardActionArea)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   margin: 0,
   padding: 0,
   width: '517px',
}))
const CardContent = styled(MuiCardContent)(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: '341px',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   letterSpacing: '0.02em',
   padding: 0,
}))
const CardHeader = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))
const HeaderAvatar = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '176px',
}))
const ImgIcon = styled('img')(() => ({
   width: '36px',
   marginRight: '10px',
   margin: '0',
}))
const UserName = styled('h2')(() => ({
   fontWeight: 500,
   fontSize: '16px',
   color: '#020202',
   margin: '0',
}))
const UserBirthDate = styled('a')(() => ({
   fontWeight: 400,
   fontSize: '13px',
   color: '#0BA360',
}))
const Typography = styled(MuiTypography)(() => ({
   fontSize: '14px',
   padding: '0',
   margin: '14px 0',
}))
const Img = styled('img')(() => ({
   width: '156px',
   height: '118px',
   borderRadius: '6px',
}))
const CardActions = styled(MuiCardActions)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '360px',
   margin: '0',
   padding: '0',
   span: {
      fontWeight: '400',
      fontSize: '14px',
      color: '#636C84',
   },
}))
const FooterAvatar = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))
const Button = styled('button')(() => ({
   border: 'none',
   background: '#fff',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '14px',
   color: '#636C84',
}))
