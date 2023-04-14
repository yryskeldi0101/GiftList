import {
   CardActionArea,
   CardActions as MuiCardActions,
   Card as MuiCard,
   styled,
} from '@mui/material'
import Meatballs from '../UI/Meatballs'
import Ananim from '../../assets/icons/anonim.svg'
import Lock from '../../assets/icons/key.svg'
import Present from '../../assets/icons/present.svg'
import Dislike from '../../assets/icons/dislake.svg'
import { useMeatballs } from '../../hooks/useMeatballs'

const MEATBALLS_CONTENT = [
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

const DATA_DUMMY = [
   {
      id: Math.random(),
      icon: 'https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png',
      userName: 'Аида Каримова',
      birthDate: 'День рождения',
      title: 'Темный шокалад',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      date: '12.04.2022',
      reserve: 'Забронировать',
      expectation: 'Ожидание',
   },
]
export default function Card({ expect, onChange }) {
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()

   return (
      <StyledCard>
         {DATA_DUMMY.map((item) => (
            <CardActionArea key={item.id}>
               <CardHeader>
                  <HeaderAvatar>
                     <ImgIcon src={item.icon} alt="green iguana" />
                     <UserName>{item.userName}</UserName>
                  </HeaderAvatar>
                  <UserBirthDate>{item.birthDate}</UserBirthDate>
               </CardHeader>
               <TitleImg>
                  <p>{item.title}</p>
                  <CardMedia>
                     <Img src={item.img} alt="" />
                  </CardMedia>
               </TitleImg>
               <CardActions>
                  <span>{item.date}</span>
                  <FooterAvatar>
                     {expect ? (
                        <Button type="submit" onClick={onChange}>
                           {item.expectation}
                        </Button>
                     ) : (
                        <>
                           <ImgIcon src={item.icon} />
                           <Button type="submit" onClick={onChange}>
                              {item.reserve}
                           </Button>
                        </>
                     )}
                     <Meatballs
                        arrayIcon={MEATBALLS_CONTENT}
                        open={open}
                        handleClose={handleClose}
                        handleClick={handleClick}
                        anchorEl={anchorEl}
                     />
                  </FooterAvatar>
               </CardActions>
            </CardActionArea>
         ))}
      </StyledCard>
   )
}

const StyledCard = styled(MuiCard)(() => ({
   padding: '16px',
   background: '#FFFFFF',
   border: '1px solid #FFFFFF',
   borderRadius: '8px',
   width: '349px',
   margin: '2rem',
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
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '19px',
   letterSpacing: '0.02em',
   color: '#020202',
}))
const UserBirthDate = styled('a')(() => ({
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '13px',
   lineHeight: '16px',
   letterSpacing: '0.02em',
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
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '130%',
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
   width: '349px',
   margin: '0',
   padding: '0',
   span: {
      fontFamily: 'Inter',
      fontFtyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '17px',
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
