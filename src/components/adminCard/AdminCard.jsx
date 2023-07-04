import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { Button, Menu, MenuItem, styled } from '@mui/material'
import Meatballs from '../UI/Meatballs'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'
import TrashIcon from '../../assets/icons/deleteIcon.svg'
import Pencil from '../../assets/icons/pencil.svg'
import { ACTION_TYPES } from '../../utlis/constants/constnats'
import HolidayMeatballs from '../UI/HolidayMeatballs'

const AdminCard = ({
   dataCategory,
   dataWishlist,
   dataHolidays,
   dataCharity,
   meatballsContent,
   handleClick,
   handleClose,
   display,
   open,
   anchorEl,
   setSearchParams,
   handleNavigate,
   changecard,
   icon,
   reserveHandler,
   editChangeHandler,
}) => {
   const [currentId, setCurrentId] = React.useState(0)
   const [currentData, setCurrentData] = React.useState({})

   const [currentWishData, setCurrentWishData] = React.useState({})

   const handleClickMenuItem = React.useCallback(
      (title, func, currentId) => {
         handleClose()

         if (typeof func === 'function') {
            if (title === 'Редактировать') {
               func(setSearchParams, currentData, currentId)
            }
            if (currentId) {
               func(currentId, { ...currentData, currentId }, currentId)
            }
         }
      },
      [dataHolidays, currentId]
   )

   const handleClickMenuDetail = (title, func, currentId) => {
      handleClickMenuItem(title, func, currentId)
   }

   return (
      <div>
         <CardContainer>
            {dataCategory === ACTION_TYPES.WISHLIST &&
               dataWishlist?.map((item) => {
                  return (
                     <StyledCard
                        onClick={() => setCurrentWishData(item)}
                        key={item.id}
                        changecard={changecard}
                     >
                        <StyledCardMedia
                           component="img"
                           changecard={changecard}
                           image={item.image}
                           alt="card img"
                        />
                        <ListCardInfo changecard={changecard}>
                           <StyledCardContent>
                              <Title>{item.name}</Title>
                              <StyledBirthDate>
                                 {item.holidayName}
                              </StyledBirthDate>
                           </StyledCardContent>
                           <StyledCardActions>
                              {changecard ? (
                                 <WishFooterActions changecard={changecard}>
                                    <p>{item.date}</p>
                                    <MeatBallssContainer
                                       changecard={changecard}
                                    >
                                       <StyledWishStatus>
                                          {item.isReserved ? (
                                             <div>
                                                <img src={icon} alt="" />
                                                Забронирован
                                             </div>
                                          ) : (
                                             'В ожидании'
                                          )}
                                       </StyledWishStatus>

                                       <MeatBalls changecard={changecard}>
                                          <StyledButton
                                             id="demo-positioned-button"
                                             aria-controls={
                                                open
                                                   ? 'demo-positioned-menu'
                                                   : undefined
                                             }
                                             aria-haspopup="true"
                                             aria-expanded={
                                                open ? 'true' : undefined
                                             }
                                             onClick={handleClick}
                                             sx={{ margin: '2px' }}
                                          >
                                             <MeatballsIcon />
                                          </StyledButton>
                                          <Menu
                                             id="demo-positioned-menu"
                                             aria-labelledby="demo-positioned-button"
                                             anchorEl={anchorEl}
                                             open={open}
                                             onClose={handleClose}
                                             anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                             }}
                                             transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                             }}
                                          >
                                             <MenuItem
                                                onClick={() => {
                                                   handleClose()
                                                   editChangeHandler(
                                                      currentWishData
                                                   )
                                                }}
                                             >
                                                <img
                                                   src={Pencil}
                                                   alt="#"
                                                   style={{
                                                      marginRight: '10px',
                                                   }}
                                                />
                                                Редакитровать
                                             </MenuItem>
                                             <MenuItem
                                                onClick={() => {
                                                   reserveHandler(
                                                      currentWishData.id
                                                   )
                                                   handleClose()
                                                }}
                                             >
                                                <img
                                                   src={TrashIcon}
                                                   alt="#"
                                                   style={{
                                                      marginRight: '10px',
                                                   }}
                                                />
                                                Удалить
                                             </MenuItem>
                                          </Menu>
                                       </MeatBalls>
                                    </MeatBallssContainer>
                                 </WishFooterActions>
                              ) : (
                                 <WishFooterActions changecard={changecard}>
                                    <StyledWishActions>
                                       <div>
                                          <StyledWishStatus>
                                             {item.isReserved ? (
                                                <div>
                                                   <img
                                                      src={item.icon}
                                                      alt=""
                                                   />
                                                   Забронирован
                                                </div>
                                             ) : (
                                                'В ожидании'
                                             )}
                                          </StyledWishStatus>
                                       </div>

                                       <p>{item.date}</p>
                                    </StyledWishActions>
                                    <MeatBallssContainer
                                       changecard={changecard}
                                    >
                                       <MeatBalls changecard={changecard}>
                                          <StyledButton
                                             id="demo-positioned-button"
                                             aria-controls={
                                                open
                                                   ? 'demo-positioned-menu'
                                                   : undefined
                                             }
                                             aria-haspopup="true"
                                             aria-expanded={
                                                open ? 'true' : undefined
                                             }
                                             onClick={handleClick}
                                             sx={{ margin: '2px' }}
                                          >
                                             <MeatballsIcon />
                                          </StyledButton>
                                          <Menu
                                             id="demo-positioned-menu"
                                             aria-labelledby="demo-positioned-button"
                                             anchorEl={anchorEl}
                                             open={open}
                                             onClose={handleClose}
                                             anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                             }}
                                             transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                             }}
                                          >
                                             <MenuItem
                                                onClick={() => {
                                                   handleClose()
                                                   editChangeHandler(item)
                                                }}
                                             >
                                                <img
                                                   src={Pencil}
                                                   alt="#"
                                                   style={{
                                                      marginRight: '10px',
                                                   }}
                                                />
                                                Редакитровать
                                             </MenuItem>
                                             <MenuItem
                                                onClick={() => {
                                                   reserveHandler(item.id)
                                                   handleClose()
                                                }}
                                             >
                                                <img
                                                   src={TrashIcon}
                                                   alt="#"
                                                   style={{
                                                      marginRight: '10px',
                                                   }}
                                                />
                                                Удалить
                                             </MenuItem>
                                          </Menu>
                                       </MeatBalls>
                                    </MeatBallssContainer>
                                 </WishFooterActions>
                              )}
                           </StyledCardActions>
                        </ListCardInfo>
                     </StyledCard>
                  )
               })}
            {dataCategory === ACTION_TYPES.HOLIDAYS &&
               dataHolidays?.map((item) => {
                  return (
                     <StyledCardHoliday key={item.id}>
                        <HolidaysImage
                           component="img"
                           height="149"
                           image={item.image}
                           onClick={() =>
                              typeof handleNavigate === 'function'
                                 ? handleNavigate(item.id)
                                 : null
                           }
                           alt="card img"
                           sx={{ cursor: 'pointer' }}
                        />

                        <HolidaysCardInfo>
                           <StyledCardContent>
                              <Title>{item.name}</Title>
                           </StyledCardContent>

                           <StyledCardActionsHoliday>
                              <p>{item.date}</p>
                              <MeatBallssContainer>
                                 <HolidayMeatballs
                                    display={display}
                                    arrayIcon={meatballsContent}
                                    handleClick={(e) => {
                                       handleClick(e)
                                       setCurrentId(item.id)
                                       setCurrentData({
                                          date: item.date,
                                          image: item.image,
                                          name: item.name,
                                       })
                                    }}
                                    handleClose={handleClose}
                                    open={open}
                                    anchorEl={anchorEl}
                                    handleClickMenuItem={handleClickMenuDetail}
                                 />
                              </MeatBallssContainer>
                           </StyledCardActionsHoliday>
                        </HolidaysCardInfo>
                     </StyledCardHoliday>
                  )
               })}

            {dataCategory === ACTION_TYPES.CHARITIES &&
               dataCharity?.map((item) => (
                  <StyledCharityCard key={item.id}>
                     <CardMedia
                        component="img"
                        height="149"
                        image={item.image}
                        alt="card img"
                     />

                     <StyledCardContentCharity>
                        <Title>{item.name}</Title>
                        <StyledStatus>{item.state}</StyledStatus>
                     </StyledCardContentCharity>

                     <StyledCardActionsCharity>
                        <StyledDate>{item.date}</StyledDate>
                        <MeatBallssContainer>
                           <StyledIcon src={item.reservePhoto} />
                           <StyledExpectation>
                              {item.isReserve ? (
                                 <p>Забронирован</p>
                              ) : (
                                 <p>В ожидании</p>
                              )}
                           </StyledExpectation>
                           <Meatballs
                              currentId={currentId}
                              display={display}
                              arrayIcon={meatballsContent}
                              handleClick={handleClick}
                              handleClose={handleClose}
                              open={open}
                              anchorEl={anchorEl}
                              editChangeHandler={editChangeHandler}
                              data={item}
                           />
                        </MeatBallssContainer>
                     </StyledCardActionsCharity>
                  </StyledCharityCard>
               ))}
         </CardContainer>
      </div>
   )
}

export default AdminCard

const StyledButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      padding: '10px',
      width: '20px',
      background: 'transparent',
   },
}))

const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   gap: 40px;
`
const StyledCard = styled(Card)(({ changecard }) => ({
   padding: '20px',
   width: changecard ? '349px' : '533px',
   display: changecard ? '' : 'flex',
   justifyContent: changecard ? '' : 'space-betweeen',
   alignItems: changecard ? '' : '',
}))
const StyledCharityCard = styled(Card)(() => ({
   padding: '20px',
   display: 'flex',
   flexDirection: 'column',
   width: '355px',
   marginBottom: '20px',
}))
const StyledCardContentCharity = styled('div')(() => ({
   margin: '16px 0',
   display: 'flex',
   justifyContent: 'space-between',
}))
const StyledCardActionsCharity = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))
const HolidaysCardInfo = styled('div')(() => ({
   marginTop: '15px',
}))
const StyledCardHoliday = styled(Card)(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: '355px',
   padding: '15px',
}))
const HolidaysImage = styled(CardMedia)(() => ({
   width: '310px',
   borderRadius: '20px',
}))
const StyledCardActionsHoliday = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))
const StyledCardMedia = styled(CardMedia)(({ changecard }) => ({
   width: changecard ? '317px' : '146px',
   height: changecard ? '149px' : '102px',
   borderRadius: changecard ? '6px' : ' 6px',
   marginRight: changecard ? '' : '14px',
   marginBottom: changecard ? '16px' : '',
}))
const StyledCardContent = styled(CardMedia)(({ changecard }) => ({
   padding: changecard ? '16px 0' : '0 0 16px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))
const ListCardInfo = styled(CardMedia)(({ changecard }) => ({
   width: changecard ? '' : '330px',
   display: changecard ? '' : 'flex',
   flexDirection: changecard ? '' : 'column',
}))

const Title = styled('div')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 130%;
   color: #000000;
`

const StyledBirthDate = styled('div')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 13px;
   line-height: 16px;
   color: #0ba360;
   padding-left: 86px;
`

const StyledCardActions = styled('div')(({ changecard }) => ({
   display: changecard ? 'flex' : '',
   alignItems: changecard ? 'center' : '',
   justifyContent: changecard ? 'centspace-betweener' : '',
   width: '100%',
   p: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#636c84',
   },
}))

const StyledDate = styled('h3')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #636c84;
   min-width: 100px;
`

const StyledExpectation = styled('div')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #636c84;
`

const StyledStatus = styled('div')(() => ({
   fontWeight: 400,
   fontsize: '14px',
   color: '#fd5200',
   marginRight: '20px',
}))
const StyledWishStatus = styled('div')(() => ({
   fontsize: '14px',
   color: '#636C84',
   marginRight: '20px',
}))
const MeatBallssContainer = styled('div')(({ changecard }) => ({
   display: 'flex',
   justifyContent: changecard ? 'space-between' : 'flex-end',
   alignItems: 'center',
}))
const WishFooterActions = styled('div')(({ changecard }) => ({
   display: 'flex',
   justifyContent: changecard ? 'space-between' : '',
   flexDirection: changecard ? '' : 'column',
   alignItems: changecard ? 'center' : '',
}))
const StyledWishActions = styled('div')(({ changecard }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: changecard ? '' : '0 0 28px',

   '& div': {
      display: 'flex',
      gap: '10px',
   },
   '& img': {
      width: '20px',
      height: '20px',
   },
}))
const StyledIcon = styled('img')`
   width: 40px;
   height: 40px;
   border-radius: 100%;
   object-fit: contain;
`
const MeatBalls = styled('div')(() => ({}))
