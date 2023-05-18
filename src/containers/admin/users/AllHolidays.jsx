import React from 'react'
import { useLocation } from 'react-router-dom'
import { styled } from '@mui/material'
import { useMeatballs } from '../../../hooks/useMeatballs'
import AdminCard from '../../../components/adminCard/AdminCard'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'

const AllHolidays = () => {
   const { anchorEl, open, handleClick, handleClose } = useMeatballs()
   const holidays = useLocation()
   const dataHolidays = holidays.state || []
   return (
      <Container>
         <AdminCard
            dataHolidays={dataHolidays}
            dataCategory={ACTION_TYPES.HOLIDAYS}
            anchorEl={anchorEl}
            open={open}
            handleClick={handleClick}
            handleClose={handleClose}
            meatballsContent={[]}
         />
      </Container>
   )
}

export default AllHolidays

const Container = styled('div')`
   margin-top: 50px;
   max-width: 1170px;
`
