import {
   CardActionArea as MuiCardActionArea,
   CardActions as MuiCardActions,
   Card as MuiCard,
   CardContent as MuiCardContent,
   styled,
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
      id: '1',
   },
   {
      icon: Ananim,
      title: 'Забронировать анонимно',
      id: '2',
   },
   // {
   //    icon: Present,
   //    title: 'Добавить в мои подарки',
   //    id: '3',
   // },
   // {
   //    icon: Dislike,
   //    title: 'Пожаловаться',
   //    id: '4',
   // },
]
const MEATBALLS_RESERVE_CONTENT = [
   {
      icon: Present,
      title: 'Добавить в мои подарки',
      id: '1',
   },
   {
      icon: OpenLock,
      title: 'Снять бронь',
      id: '2',
   },
   {
      icon: Dislike,
      title: 'Пожаловаться',
      id: '3',
   },
]

export default function Cards({
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
   changeCard,
}) {
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()

   return (
      <Card sx={{ width: changeCard ? '349px' : '530px' }}>
         <CardActionArea key={id}>
            {changeCard ? (
               ''
            ) : (
               <ListCardMedia>
                  <ListImg src={img} alt="image" />
               </ListCardMedia>
            )}

            <CardContent>
               <CardHeader>
                  <HeaderAvatar>
                     <ImgIcon src={icon} alt="green iguana" />
                     <UserName>{userName}</UserName>
                  </HeaderAvatar>
                  <UserBirthDate>{birthDate}</UserBirthDate>
               </CardHeader>

               <TitleImg>
                  <p>{title}</p>
                  {changeCard ? (
                     <CardMedia>
                        <Img src={img} alt="" />
                     </CardMedia>
                  ) : (
                     ''
                  )}
               </TitleImg>

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
                              arrayIcon={MEATBALLS_RESERVE_CONTENT}
                              open={open}
                              handleClose={handleClose}
                              handleClick={handleClick}
                              anchorEl={anchorEl}
                           />
                        </>
                     ) : (
                        <>
                           <ImgIcon src={icon} alt="icons" />
                           <Button
                              type="submit"
                              onClick={meatballsChangeHandler}
                           >
                              {reserve}
                           </Button>
                           <Meatballs
                              arrayIcon={MEATBALLS_EXPECT_CONTENT}
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
   padding: '16px',
   background: '#FFFFFF',
   border: '1px solid #FFFFFF',
   borderRadius: '8px',
}))
const CardActionArea = styled(MuiCardActionArea)(({ changeCard }) => ({
   padding: '0',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   letterSpacing: '0.02em',
   fontWeight: 500,
   display: changeCard ? '' : 'flex',
   justifyContent: changeCard ? '' : 'space-between',
}))

const CardHeader = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: 0,
   margin: 0,
   width: '347px',
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
}))
const UserName = styled('h2')(() => ({
   fontSize: '16px',
   color: '#020202',
}))
const UserBirthDate = styled('a')(() => ({
   fontWeight: 400,
   fontSize: '13px',
   color: '#0BA360',
}))
const Img = styled('img')(() => ({
   width: '348px',
   heght: '153px',
   borderRadius: '6px',
   margin: '12px 0',
}))
const TitleImg = styled('div')(() => ({
   padding: '0',
   margin: '0',
   p: {
      fontSize: '14px',
      color: '#020202',
   },
}))
const CardMedia = styled('div')(() => ({
   width: '317px',
   heght: '153px',
}))
const CardActions = styled(MuiCardActions)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '370px',
   margin: '0',
   padding: '0',
   span: {
      fontWeight: 400,
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
const CardContent = styled(MuiCardContent)(({ changeCard }) => ({
   display: changeCard ? '' : 'flex',
   flexDirection: changeCard ? '' : 'column',
   width: changeCard ? '300px' : '355px',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   letterSpacing: '0.02em',
   margin: '0',
   padding: '0',
}))
const ListCardMedia = styled('div')(() => ({
   width: '146px',
   heght: '106px',
}))
const ListImg = styled('img')(() => ({
   width: '156px',
   height: '118px',
   borderRadius: '6px',
}))
