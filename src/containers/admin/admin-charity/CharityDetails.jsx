import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import DetailedPage from '../../DetailedPage '
import { getOneAdminCharityById } from '../../../redux/admin-charity/adminCharityThunk'
import { deleteAdminCharityRequest } from '../../../service/charityAdminService'
import useToastBar from '../../../hooks/useToastBar'
import Snackbar from '../../../components/button/SnackBar'

const AdminCharityDetails = () => {
   const oneCharity = useSelector((state) => state.adminCharity.oneCharity)
   const { id } = useParams()
   const { showToast } = useToastBar()
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getOneAdminCharityById(id))
   }, [])
   const navigate = useNavigate()
   const navigateToEditPage = (id) => {
      return navigate(`/admin/charity/${id}/add_charity`, {
         state: { oneCharity },
      })
   }
   const deleteCharityHandler = async (id) => {
      try {
         await deleteAdminCharityRequest(id)
         return navigate('/admin/charity')
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }
   return (
      <>
         <Snackbar />
         <div>
            <DetailedPage
               profileDetails={oneCharity}
               adminCharity
               handleClick={navigateToEditPage}
               onClick={deleteCharityHandler}
            />
         </div>
      </>
   )
}

export default AdminCharityDetails
