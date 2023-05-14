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
   {
      icon: Present,
      title: 'Добавить в мои подарки',
   },
   {
      icon: Dislike,
      title: 'Пожаловаться',
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
]
const MEATBALLS_CHARITY_CONTENT = [
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
   navigateToCharityDetails,
   openMeatballs,
   userId,
   meatballsChangeHandler,
   meatballsSelectHandler,
   changeCard,
   reserveHandler,
   bookChange,
   charityMeatballs,
   charityMeatballsHandler,
   state,
}) {
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()
   return (
      <Card
         changecard={changeCard.toString()}
         sx={{ width: changeCard ? '349px' : '533px' }}
      >
         <CardActionArea key={id} changecard={changeCard.toString()}>
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
                     {charityMeatballsHandler && (
                        <CharityContainer>
                           <h3>{title}</h3>
                           <p>{state}</p>
                        </CharityContainer>
                     )}
                     {changeCard ? (
                        <CardMedia openMeatballs={openMeatballs}>
                           <Img src={img} alt="images" />
                        </CardMedia>
                     ) : (
                        ''
                     )}
                  </TitleImg>
               </NavigationContainer>

               <CardActions openmeatballs={openMeatballs}>
                  <span>{date}</span>
                  {charityMeatballsHandler ? (
                     <FooterAvatar>
                        {charityMeatballs ? (
                           <>
                              <Button onClick={meatballsChangeHandler}>
                                 {reserve ? 'Забронирован' : 'В ожидании'}
                              </Button>
                              <Meatballs
                                 arrayIcon={MEATBALLS_CHARITY_CONTENT}
                                 open={open}
                                 id={id}
                                 meatballsselecthandler={meatballsSelectHandler}
                                 handleClose={handleClose}
                                 handleClick={handleClick}
                                 anchorEl={anchorEl}
                                 reserveHandler={reserveHandler}
                                 display={reserve}
                              />
                           </>
                        ) : (
                           <>
                              <ImgIcon src={icon} />

                              <Button onClick={meatballsChangeHandler}>
                                 {reserve ? 'Забронирован' : 'В ожидании'}
                              </Button>
                              <Meatballs
                                 arrayIcon={MEATBALLS_CHARITY_CONTENT}
                                 open={open}
                                 id={id}
                                 meatballsselecthandler={meatballsSelectHandler}
                                 handleClose={handleClose}
                                 handleClick={handleClick}
                                 anchorEl={anchorEl}
                                 reserveHandler={reserveHandler}
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
                              reserveHandler={reserveHandler}
                           />
                        ) : (
                           <FooterAvatar>
                              {openMeatballs ? (
                                 <>
                                    <Button onClick={meatballsChangeHandler}>
                                       {expectation}
                                    </Button>
                                    <Meatballs
                                       arrayIcon={MEATBALLS_EXPECT_CONTENT}
                                       open={open}
                                       id={id}
                                       meatballsSelectHandler={
                                          meatballsSelectHandler
                                       }
                                       handleClose={handleClose}
                                       handleClick={handleClick}
                                       anchorEl={anchorEl}
                                       reserveHandler={reserveHandler}
                                    />
                                 </>
                              ) : (
                                 <>
                                    <ImgIcon src={icon} />
                                    <Button onClick={meatballsChangeHandler}>
                                       {reserve}
                                    </Button>
                                    <Meatballs
                                       arrayIcon={MEATBALLS_EXPECT_CONTENT}
                                       open={open}
                                       id={id}
                                       handleClose={handleClose}
                                       handleClick={handleClick}
                                       anchorEl={anchorEl}
                                       reserveHandler={reserveHandler}
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
const CardActions = styled(MuiCardActions)(({ openmeatballs }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '338px',
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
