import React from 'react'
import GalleryCard from './GalleryCard'
import ListCard from './ListCard'

export const Card = ({
   id,
   icon,
   userName,
   birthDate,
   title,
   img,
   date,
   reserve,
   expectation,
   openMeatballs,
   meatballsChangeHandler,
   cardData,
   cardChange,
}) => {
   return (
      <div>
         {cardChange ? (
            <GalleryCard
               id={id}
               icon={icon}
               userName={userName}
               birthDate={birthDate}
               title={title}
               img={img}
               date={date}
               reserve={reserve}
               expectation={expectation}
               openMeatballs={openMeatballs}
               meatballsChangeHandler={meatballsChangeHandler}
               cardData={cardData}
            />
         ) : (
            <ListCard
               id={id}
               icon={icon}
               userName={userName}
               birthDate={birthDate}
               title={title}
               img={img}
               date={date}
               reserve={reserve}
               expectation={expectation}
               openMeatballs={openMeatballs}
               meatballsChangeHandler={meatballsChangeHandler}
               cardData={cardData}
            />
         )}
      </div>
   )
}
