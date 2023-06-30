import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'
import { styled } from '@mui/material'
import AdminCard from '../../../components/adminCard/AdminCard'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'
import { useMeatballs } from '../../../hooks/useMeatballs'

const AllCharities = () => {
   const { anchorEl, open, handleClick, handleClose } = useMeatballs()
   const charities = useLocation()
   const dataCharity = charities.state.dataCharity || []
   return (
      <Container>
         <AdminCard
            dataCharity={dataCharity}
            dataCategory={ACTION_TYPES.CHARITIES}
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

export default memo(AllCharities)
const Container = styled('div')`
   margin-top: 50px;
   width: 100%;
`
