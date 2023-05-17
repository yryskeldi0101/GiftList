import React from 'react'
import AdminCard from '../../../components/adminCard/AdminCard'
import { useMeatballs } from '../../../hooks/useMeatballs'
import { dataHolidays } from '../../../utlis/constants/constnats'
import Edit from '../../../assets/icons/EditIcon.svg'
import Delete from '../../../assets/icons/deleteIcon.svg'

const meatballsContent = [
   {
      icon: Edit,
      title: 'Редактировать',
   },
   {
      icon: Delete,
      title: 'Удалить',
   },
]

const MyHolidaysCard = () => {
   const { open, anchorEl, handleClick, handleClose } = useMeatballs()

   return (
      <div>
         <AdminCard
            dataCategory="holidays"
            dataWishlist
            dataHolidays={dataHolidays}
            dataCharity
            meatballsContent={meatballsContent}
            handleClick={handleClick}
            handleClose={handleClose}
            open={open}
            anchorEl={anchorEl}
         />
      </div>
   )
}

export default MyHolidaysCard
