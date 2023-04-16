import React from 'react'
import GalleryCard from './GalleryCard'
import ListCard from './ListCard'

export const Card = ({
   openMeatballs,
   meatballsChangeHandler,
   cardData,
   cardChange,
}) => {
   return (
      <div>
         {cardChange ? (
            <GalleryCard
               openMeatballs={openMeatballs}
               meatballsChangeHandler={meatballsChangeHandler}
               cardData={cardData}
            />
         ) : (
            <ListCard
               openMeatballs={openMeatballs}
               meatballsChangeHandler={meatballsChangeHandler}
               cardData={cardData}
            />
         )}
      </div>
   )
}
