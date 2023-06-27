import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'
import { styled } from '@mui/material'
import { useMeatballs } from '../../../hooks/useMeatballs'
import AdminCard from '../../../components/adminCard/AdminCard'
import { ACTION_TYPES } from '../../../utlis/constants/constnats'

const AllHolidays = () => {
   const { anchorEl, open, handleClick, handleClose } = useMeatballs()
   const holidays = useLocation()
   const dataHolidays = holidays.state.dataHoliday || []
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
            display={true}
         />
      </Container>
   )
}

export default memo(AllHolidays)

const Container = styled('div')`
   margin-top: 50px;
   width: 100%;
`
