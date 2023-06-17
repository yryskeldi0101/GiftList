import { matchRoutes, useLocation } from 'react-router-dom'

const pathConfig = [
   { path: '/user/lenta/*' },
   { path: '/user/friends/*' },
   { path: '/user/wishlist/*' },
   { path: '/user/holidays/*' },
   { path: '/user/bookedPage/*' },
   { path: '/user/charity/*' },
   { path: '/admin/users/*' },
   { path: '/admin/charity/*' },
   { path: '/admin/mailing/*' },
   { path: '/admin/complaints/*' },
   { path: '/admin/charity/*' },
]

export const useCurrentPath = () => {
   const location = useLocation()
   const route = matchRoutes(pathConfig, location)
   if (route) {
      const [routeObject] = route
      return routeObject.pathnameBase
   }
   return '/'
}
