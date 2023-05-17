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
import {
   postRequestLentaBooking,
   postRequestLentaPresent,
} from '../../service/lenta.service'

const MEATBALLS_EXPECT_CONTENT = [
   {
      id: '1',
      icon: Lock,
      title: 'Забронировать',
      clickHandler: async (id) => {
         await postRequestLentaBooking(id, false)
      },
   },
   {
      id: '2',
      icon: Ananim,
      title: 'Забронировать анонимно',
      clickHandler: async (id) => {
         await postRequestLentaBooking(id, true)
      },
   },
   {
      id: '3',
      icon: Present,
      title: 'Добавить в мои подарки',
      clickHandler: async (id) => {
         await postRequestLentaPresent(id)
      },
   },
   {
      id: '4',
      icon: Dislike,
      title: 'Пожаловаться',
      clickHandler: async (id) => {
         console.log(id)
      },
   },
]
const MEATBALLS_RESERVE_CONTENT = [
   {
      id: '3',
      icon: Present,
      title: 'Добавить в мои подарки',
      clickHandler: async (id) => {
         await postRequestLentaPresent(id)
      },
   },
   {
      icon: OpenLock,
      title: 'Снять бронь',
      clickHandler: (id) => {
         console.log(id)
      },
   },
   {
      icon: Dislike,
      title: 'Пожаловаться',
      clickHandler: (id) => {
         console.log(id)
      },
   },
]
const MEATBALLS_BOOK_CONTENT = [
   {
      id: '3',
      icon: Present,
      title: 'Добавить в мои подарки',
      clickHandler: async (id) => {
         await postRequestLentaPresent(id)
      },
   },
   {
      icon: OpenLock,
      title: 'Снять бронь',
      clickHandler: (id) => {
         console.log(id)
      },
   },
]

export default function Cards({
   id,
   friendPhoto,
   fullName,
   holidayName,
   wishName,
   photo,
   img,
   date,
   reserve,
   expectation,
   openMeatballs,
   meatballsChangeHandler,
   changeCard,
   reserveHandler,
   bookChange,
   sentRequestById,
}) {
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()

   return (
      <Card
         changeCard={changeCard}
         sx={{ width: changeCard ? '349px' : '533px' }}
      >
         <CardActionArea key={id} changeCard={changeCard}>
            {changeCard ? (
               ''
            ) : (
               <ListCardMedia>
                  <ListImg src={img} alt="" />
               </ListCardMedia>
            )}

            <CardContent>
               <CardHeader>
                  <HeaderAvatar>
                     <ImgIcon src={friendPhoto} alt="" />
                     <UserName>{fullName}</UserName>
                  </HeaderAvatar>
                  <UserBirthDate>{holidayName}</UserBirthDate>
               </CardHeader>

               <TitleImg>
                  <p>{wishName}</p>
                  {changeCard ? (
                     <CardMedia openMeatballs={openMeatballs}>
                        <Img
                           src={img}
                           alt=""
                           onClick={() => sentRequestById(id)}
                        />
                     </CardMedia>
                  ) : (
                     ''
                  )}
               </TitleImg>
               <p>{photo}</p>

               <CardActions openMeatballs={openMeatballs}>
                  <span>{date}</span>
                  {bookChange ? (
                     <Meatballs
                        arrayIcon={MEATBALLS_BOOK_CONTENT}
                        open={open}
                        handleClose={handleClose}
                        handleClick={handleClick}
                        anchorEl={anchorEl}
                        id={id}
                     />
                  ) : (
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
                                 reserveHandler={reserveHandler}
                                 id={id}
                              />
                           </>
                        ) : (
                           <>
                              <ImgIcon src={friendPhoto} />
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
                  )}
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
   display: 'flex',
   width: '349px',
}))
const CardActionArea = styled(MuiCardActionArea)(({ changeCard }) => ({
   padding: '0',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   letterSpacing: '0.02em',
   fontWeight: 500,
   display: changeCard ? '' : 'flex',
   justifyContent: changeCard ? '' : 'space-between',
   width: changeCard ? '' : '524px',
}))
const CardHeader = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: 0,
   margin: 0,
   width: '317px',
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
   width: '315px',
   heght: '153px',
   borderRadius: '6px',
   margin: '12px 0',
}))
const TitleImg = styled('div')(() => ({
   padding: '0',
   margin: '0',
   p: {
      padding: '14px 0',
      fontSize: '14px',
      color: '#020202',
   },
}))
const CardMedia = styled('div')(() => ({
   width: '312px',
   heght: '153px',
}))
const CardActions = styled(MuiCardActions)(({ openMeatballs }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '338px',
   margin: openMeatballs ? '9px 0' : '0',
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
