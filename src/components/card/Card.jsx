import {
   CardActions as MuiCardActions,
   CardActionArea as MuiCardActionArea,
   Card as MuiCard,
   CardContent as MuiCardContent,
   styled,
} from '@mui/material'
import Ananim from '../../assets/icons/anonim.svg'
import Lock from '../../assets/icons/key.svg'
import Present from '../../assets/icons/present.svg'
import Dislike from '../../assets/icons/dislake.svg'
import OpenLock from '../../assets/icons/lock.svg'
import { useMeatballs } from '../../hooks/useMeatballs'
import {
   postRequestLentaPresent,
   postRequestLentaBooking,
   deleteRequestLentaBooking,
   getRequestLentaCard,
} from '../../service/lenta.service'
import Meatballs from '../UI/Meatballs'
import useToastBar from '../../hooks/useToastBar'

export default function Cards({
   id,
   icon,
   reserveUserImage,
   userName,
   birthDate,
   title,
   img,
   date,
   navigateToCharityDetails,
   openMeatballs,
   userId,
   meatballsselecthandler,
   changeCard,
   bookChange,
   charityMeatballs,
   charityMeatballsHandler,
   state,
   requestById,
   reserve,
   isAnonymous,
}) {
   const { showToast } = useToastBar()
   const MEATBALLS_EXPECT_CONTENT = [
      {
         id: '1',
         icon: Lock,
         title: 'Забронировать',
         clickHandler: async (id) => {
            if (MEATBALLS_EXPECT_CONTENT[0].id === '1') {
               try {
                  postRequestLentaBooking(id, false)
                  getRequestLentaCard()
                  showToast('success', 'Успешно', 'Запрос успешно отправлен')
               } catch (error) {
                  showToast('error', 'Ошибка', 'При загрузке произошла ошибка')
               }
            }
         },
      },
      {
         id: '2',
         icon: Ananim,
         title: 'Забронировать анонимно',
         clickHandler: async (id) => {
            if (MEATBALLS_EXPECT_CONTENT[1].id === '2') {
               await postRequestLentaBooking(id, false)
            }
            return getRequestLentaCard()
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
   const MEATBALLS_LENTA_CONTENT = [
      {
         id: '1',
         icon: Present,
         title: 'Добавить в мои подарки',
         clickHandler: async () => {},
      },
      {
         id: '2',
         icon: OpenLock,
         title: 'Снять бронь',
         clickHandler: async (id) => {
            try {
               await deleteRequestLentaBooking(id)
               getRequestLentaCard()
               showToast('success', 'Успешно', 'Запрос успешно отправлен')
            } catch (error) {
               showToast('error', 'Ошибка', 'При загрузке произошла ошибка')
            }
         },
      },
      {
         id: '3',
         icon: Dislike,
         title: 'Пожаловаться',
         clickHandler: async () => {},
      },
   ]
   const MEATBALLS_BOOK_CONTENT = [
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
         clickHandler: (id) => {
            console.log(id)
         },
      },
   ]
   const MEATBALLS_CHARITY_CONTENT = [
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
         icon: Lock,
         title: 'Забронировать',
         id: '1',
      },
      {
         icon: Ananim,
         title: 'Забронировать анонимно',
         id: '2',
      },
   ]
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()
   return (
      <Card
         key={id}
         changecard={changeCard.toString()}
         sx={{ width: changeCard ? '349px' : '533px' }}
      >
         <CardActionArea changecard={changeCard}>
            {changeCard ? (
               ''
            ) : (
               <ListCardMedia>
                  <ListImg src={img} alt="image" />
               </ListCardMedia>
            )}
            <CardContent>
               <NavigationContainer
                  onClick={() => navigateToCharityDetails(id, userId)}
               >
                  <CardHeader>
                     <HeaderAvatar>
                        <ImgIcon src={icon} alt="green iguana" />
                        <UserName>{userName}</UserName>
                     </HeaderAvatar>
                     <UserBirthDate>{birthDate}</UserBirthDate>
                  </CardHeader>

                  <TitleImg>
                     {changeCard ? '' : <h4>{title}</h4>}
                     {charityMeatballsHandler && (
                        <CharityContainer>
                           <NameImg>{title}</NameImg>
                           <p>{state}</p>
                        </CharityContainer>
                     )}
                     {changeCard ? (
                        <CardMedia openMeatballs={openMeatballs}>
                           <h4>{title}</h4>
                           <Img
                              src={img}
                              alt="images"
                              onClick={() => requestById(id)}
                           />
                        </CardMedia>
                     ) : (
                        ''
                     )}
                  </TitleImg>
               </NavigationContainer>
               <CardActions openmeatballs={toString(openMeatballs)}>
                  <span>{date}</span>
                  {charityMeatballsHandler ? (
                     <FooterAvatar>
                        {charityMeatballs ? (
                           <>
                              <Button>
                                 {reserve ? 'Забронирован' : 'В ожидании'}
                              </Button>
                              <Meatballs
                                 arrayIcon={MEATBALLS_CHARITY_CONTENT}
                                 open={open}
                                 id={id}
                                 meatballsselecthandler={meatballsselecthandler}
                                 handleClose={handleClose}
                                 handleClick={handleClick}
                                 anchorEl={anchorEl}
                                 display={reserve}
                              />
                           </>
                        ) : (
                           <>
                              <ImgIcon src={icon} />
                              <Button>
                                 {reserve ? 'Забронирован' : 'В ожидании'}
                              </Button>
                              <Meatballs
                                 arrayIcon={MEATBALLS_LENTA_CONTENT}
                                 open={open}
                                 id={id}
                                 meatballsselecthandler={meatballsselecthandler}
                                 handleClose={handleClose}
                                 handleClick={handleClick}
                                 anchorEl={anchorEl}
                                 display={reserve}
                              />
                           </>
                        )}
                     </FooterAvatar>
                  ) : (
                     <div>
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
                              {reserveUserImage !== null && !isAnonymous ? (
                                 <>
                                    <ImgIcon src={reserveUserImage} />
                                    <Button>
                                       {reserve ? 'Забронирован' : 'В ожидании'}
                                    </Button>
                                    <Meatballs
                                       arrayIcon={
                                          reserve
                                             ? MEATBALLS_LENTA_CONTENT
                                             : MEATBALLS_EXPECT_CONTENT
                                       }
                                       open={open}
                                       id={id}
                                       meatballsselecthandler={
                                          meatballsselecthandler
                                       }
                                       handleClose={handleClose}
                                       handleClick={handleClick}
                                       anchorEl={anchorEl}
                                    />
                                 </>
                              ) : (
                                 <>
                                    <Button>
                                       {reserve
                                          ? 'Забронирован анонимно'
                                          : 'В ожидании'}
                                    </Button>

                                    <Meatballs
                                       arrayIcon={
                                          reserve
                                             ? MEATBALLS_LENTA_CONTENT
                                             : MEATBALLS_EXPECT_CONTENT
                                       }
                                       open={open}
                                       id={id}
                                       meatballsselecthandler={
                                          meatballsselecthandler
                                       }
                                       handleClose={handleClose}
                                       handleClick={handleClick}
                                       anchorEl={anchorEl}
                                    />
                                 </>
                              )}
                           </FooterAvatar>
                        )}
                     </div>
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
}))
const CardActionArea = styled(MuiCardActionArea)(({ changecard }) => ({
   padding: '0',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   letterSpacing: '0.02em',
   fontWeight: 500,
   display: changecard ? '' : 'flex',
   justifyContent: changecard ? '' : 'space-between',
   width: changecard ? '' : '524px',
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
   // justifyContent: 'space-between',
   alignItems: 'center',
   width: '176px',
}))
const ImgIcon = styled('img')(() => ({
   width: '36px',
   marginRight: '8px',
}))
const UserName = styled('h2')(() => ({
   fontSize: '13px',
   color: '#020202',
}))
const UserBirthDate = styled('a')(() => ({
   fontWeight: 400,
   fontSize: '13px',
   color: '#0BA360',
}))
const NameImg = styled('h4')(() => ({
   padding: '16px 0 12px',
   fontWeight: 500,
   fontSize: '14px',
   color: '#020202',
}))
const Img = styled('img')(() => ({
   width: '315px',
   height: '170px',
   borderRadius: '6px',
   margin: '12px 0',
   // objectFit: 'contain',
}))
const TitleImg = styled('div')(() => ({
   padding: '0',
   margin: '0',
   h4: {
      padding: '14px 0',
      fontSize: '14px',
      color: '#020202',
   },
}))
const CardMedia = styled('div')(() => ({
   width: '312px',
   heght: '153px',
}))
const CardActions = styled(MuiCardActions)(({ openmeatballs }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '316px',
   margin: openmeatballs ? '9px 0' : '0',
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
   width: '200px',
}))
const Button = styled('div')(() => ({
   border: 'none',
   background: '#fff',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '14px',
   color: '#636C84',
}))
const CardContent = styled(MuiCardContent)(({ changecard }) => ({
   display: changecard ? '' : 'flex',
   flexDirection: changecard ? '' : 'column',
   width: changecard ? '300px' : '355px',
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
const NavigationContainer = styled('div')(() => ({
   cursor: 'pointer',
}))
const CharityContainer = styled('div')(() => ({
   display: 'flex',
   maxWidth: '300px',
   alignItems: 'center',
   justifyContent: 'space-between',
   h3: {
      maxWidth: '70%',
   },
   p: {
      maxWidth: '30%',
   },
}))
