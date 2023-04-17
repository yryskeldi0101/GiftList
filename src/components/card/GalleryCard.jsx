import {
   CardActionArea as MuiCardActionArea,
   CardActions as MuiCardActions,
   Card as MuiCard,
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

export default function GalleryCard({
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
            <CardHeader>
               <HeaderAvatar>
                  <ImgIcon src={icon} alt="green iguana" />
                  <UserName>{userName}</UserName>
               </HeaderAvatar>
               <UserBirthDate>{birthDate}</UserBirthDate>
            </CardHeader>

            <TitleImg>
               <p>{title}</p>
               <CardMedia>
                  <Img src={img} alt="" />
               </CardMedia>
            </TitleImg>

            <CardActions>
               <span>{date}</span>
               <FooterAvatar>
                  {openMeatballs ? (
                     <>
                        <Button type="submit" onClick={meatballsChangeHandler}>
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
                        <Button type="submit" onClick={meatballsChangeHandler}>
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
         </CardActionArea>
      </Card>
   )
}

const Card = styled(MuiCard)(() => ({
   padding: '16px',
   background: '#FFFFFF',
   border: '1px solid #FFFFFF',
   borderRadius: '8px',
   width: '349px',
   margin: '2rem',
}))
const CardActionArea = styled(MuiCardActionArea)(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   letterSpacing: '0.02em',
   fontWeight: 500,
}))

const CardHeader = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '16px',
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
   width: '349px',
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
