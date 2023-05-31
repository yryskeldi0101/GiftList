import LentaIcon from '../../assets/svg/lenta.svg'
import FriendsIcon from '../../assets/svg/friends.svg'
import BronIcon from '../../assets/svg/bronIcons.svg'
import CharityIcon from '../../assets/svg/charityIcons.svg'
import CompolaintsIcon from '../../assets/svg/complaints.svg'
import ListIcon from '../../assets/svg/listIcon.svg'
import MyHolidays from '../../assets/svg/myholidays.svg'
import MailingIcon from '../../assets/svg/mailing.svg'
import UserIcon from '../../assets/icons/UserIcon.svg'
import OutIcon from '../../assets/icons/outIcon.svg'

export const sideBarRoles = {
   ADMIN: [
      {
         title: 'Пользователи',
         path: 'users',
         id: '1',
         icon: FriendsIcon,
      },
      {
         title: 'Благотворительность',
         path: 'charityAdmin',
         id: '2',
         icon: CharityIcon,
      },
      {
         title: 'Жалобы',
         path: 'complaints',
         id: '3',
         icon: CompolaintsIcon,
      },
      {
         title: 'Рассылка',
         path: 'mailing',
         id: '4',
         icon: MailingIcon,
      },
   ],
   USER: [
      {
         title: 'Лента',
         path: 'lenta',
         id: '5',
         icon: LentaIcon,
      },
      {
         title: 'Друзья',
         path: 'friends',
         id: '6',
         icon: FriendsIcon,
      },
      {
         title: 'Список желаний',
         path: 'wishlist',
         id: '7',
         icon: ListIcon,
      },
      {
         title: 'Забронированные',
         path: 'bookedPage',
         id: '8',
         icon: BronIcon,
      },
      {
         title: 'Мои праздники',
         path: 'holidays',
         id: '9',
         icon: MyHolidays,
      },
      {
         title: 'Благотворительность',
         path: 'charity',
         id: '10',
         icon: CharityIcon,
      },
   ],
}

export const stateArray = [
   {
      name: 'Все',
      id: '1',
   },
   {
      name: 'Б/У',
      id: '2',
   },
   {
      name: 'Новое',
      id: '3',
   },
]

export const countriesArray = [
   {
      name: 'Кыргызстан',
      id: '1',
   },
   {
      name: 'Азербайджан',
      id: '2',
   },
   {
      name: 'Россия',
      id: '3',
   },
   {
      name: 'Казахстан',
      id: '4',
   },
   {
      name: 'Узбекистан',
      id: '5',
   },
   {
      name: 'Таджикистан',
      id: '6',
   },
]
export const categoryArray = [
   {
      name: 'Книги',
      id: '1',
   },
   {
      name: 'Электроника',
      id: '2',
   },

   {
      name: 'Одежда',
      id: '3',
   },
]
export const subcategoryArray = [
   {
      name: 'Драма',
      id: '1',
   },
   {
      name: 'Литература',
      id: '2',
   },
   {
      name: 'Фантастика',
      id: '3',
   },
   {
      name: 'Apple',
      id: '4',
   },
   {
      name: 'Samsung',
      id: '5',
   },
   {
      name: 'Honor',
      id: '6',
   },
   {
      name: 'Рубашки',
      id: '7',
   },
   {
      name: 'Брюки',
      id: '8',
   },
   {
      name: 'Аксессуары',
      id: '9',
   },
]
export const UserMenuData = [
   { name: 'Профиль', icon: UserIcon, id: '1' },
   { name: 'Выйти', icon: OutIcon, id: '2' },
]
export const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
}
export const INITIAL_PATH = {
   ADMIN: {
      admin: '/admin',
      users: 'users/',
      profile: 'users/:id/user_detail/',
      allWishes: 'users/:id/user_detail/wishes',
      allHolidays: 'users/:id/user_detail/holidays',
      allCharities: 'users/:id/user_detail/charities',
      charityAdmin: 'charityAdmin',
      complaints: 'complaints',
      mailing: 'mailing/',
      mailing_detail: 'mailing/:id/mailing_detail',
      not_found: '*',
   },
   USER: {
      user: '/user',
      lenta: 'lenta',
      friends: 'friends',
      wishlist: 'wishlist',
      bookedPage: 'bookedPage',
      holidays: 'holidays/',
      holiday_details: 'holidays/:id/details',
      charity: 'charity/',
      charity_details: 'charity/:id/:userId/charity_details',
      add_charity: 'charity/add_charity',
      edit_charity: 'charity/:id/edit_charity',
      book_charity: 'charity/:id/book_charity',
      not_found: '*',
   },
   GUEST: {
      main: '/',
      error: '*',
   },
}

export const dataHolidays = [
   {
      id: Math.random(),
      // birthDate: "День рождения",
      title: 'День матери',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      date: '12.04.2022',
   },
   {
      id: Math.random(),
      // birthDate: "День рождения",
      title: 'День матери',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      date: '12.04.2022',
   },
   {
      id: Math.random(),
      // birthDate: "День рождения",
      title: 'День матери',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      date: '12.04.2022',
   },
   {
      id: Math.random(),
      // birthDate: "День рождения",
      title: 'День матери',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      date: '12.04.2022',
   },
   {
      id: Math.random(),
      // birthDate: "День рождения",
      title: 'День матери',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      date: '12.04.2022',
   },
   {
      id: Math.random(),
      // birthDate: "День рождения",
      title: 'День матери',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      date: '12.04.2022',
   },
]
export const ACTION_TYPES = {
   WISHLIST: 'WISHLIST',
   HOLIDAYS: 'HOLIDAYS',
   CHARITIES: 'CHARITIES',
}
export const CLIENT_ID =
   '501085102732-5k18u9vmnsp6d8qh5ll82tudpk0jnqbn.apps.googleusercontent.com'

export const STORAGE_KEYS = {
   GIFTLIST_AUTH: 'GIFTLIST_AUTH',
}
