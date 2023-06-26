import React, { useEffect, useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomProfile from '../../components/UI/CustomProfile'
import useToastBar from '../../hooks/useToastBar'
import { getProfileRequest } from '../../service/profileService'

const Profile = () => {
   const { showToast } = useToastBar()
   const [profileData, setProfileData] = useState([])
   const navigate = useNavigate()
   const navigateToProfileEditHandler = () => {
      navigate(`/user/profile/${profileData.id}/edit_profile`)
   }

   const getProfile = async () => {
      try {
         const { data } = await getProfileRequest()
         return data
      } catch (error) {
         return showToast(
            'error',
            'Ошибка',
            'Что-то пошло не так повторите попытку позже'
         )
      }
   }

   useEffect(() => {
      async function getData() {
         const data = await getProfile()
         setProfileData(data)
      }

      getData()
   }, [])

   return (
      <div>
         <CustomProfile
            variant={true}
            onNavigate={navigateToProfileEditHandler}
            profileData={profileData}
         />
      </div>
   )
}

export default memo(Profile)
