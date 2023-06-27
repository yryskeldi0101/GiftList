import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'
import { styled } from '@mui/material'
import AdminCard from '../../../components/adminCard/AdminCard'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'
import { useMeatballs } from '../../../hooks/useMeatballs'

const AllGifts = () => {
   const { anchorEl, open, handleClick, handleClose } = useMeatballs()
   const wishList = useLocation()
   const dataWishList = wishList.state.dataWishList || []
   return (
      <Container>
         <AdminCard
            dataWishlist={dataWishList}
            dataCategory={ACTION_TYPES.WISHLIST}
            anchorEl={anchorEl}
            open={open}
            handleClick={handleClick}
            handleClose={handleClose}
            meatballsContent={[]}
            display={true}
         />
      </Container>
   )
}

export default memo(AllGifts)

const Container = styled('div')`
   margin-top: 50px;
   width: 100%;
`
