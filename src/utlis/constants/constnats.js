import LentaIcon from '../../assets/svg/lenta.svg'
import FriendsIcon from '../../assets/svg/friends.svg'
import BronIcon from '../../assets/svg/bronIcons.svg'
import CharityIcon from '../../assets/svg/charityIcons.svg'
import CompolaintsIcon from '../../assets/svg/complaints.svg'
import ListIcon from '../../assets/svg/listIcon.svg'
import MyHolidays from '../../assets/svg/myholidays.svg'
import MailingIcon from '../../assets/svg/mailing.svg'

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
   },
   {
      name: 'Б/У',
   },
   {
      name: 'Новое',
   },
]

export const countriesArray = [
   {
      name: 'Кыргызстан',
   },
   {
      name: 'Азербайджан',
   },
   {
      name: 'Россия',
   },
   {
      name: 'Казахстан',
   },
   {
      name: 'Узбекистан',
   },
   {
      name: 'Таджикистан',
   },
]
export const categoryArray = [
   {
      name: 'Книги',
   },
   {
      name: 'Электроника',
   },

   {
      name: 'Одежда',
   },
]
export const subcategoryArray = [
   {
      name: 'Драма',
   },
   {
      name: 'Литература',
   },
   {
      name: 'Фантастика',
   },
   {
      name: 'Apple',
   },
   {
      name: 'Samsung',
   },
   {
      name: 'Honor',
   },
   {
      name: 'Рубашки',
   },
   {
      name: 'Брюки',
   },
   {
      name: 'Аксессуары',
   },
]

const options = [
   {
      title: 'Электроника',
      id: 1,
   },
   {
      title: 'Одежда',
      id: 2,
   },
   {
      title: 'Школа',
      id: 3,
   },
   {
      title: 'Дом и сад',
      id: 4,
   },
   {
      title: 'Овувь',
      id: 5,
   },
   {
      title: 'Транспорт',
      id: 6,
   },
]
export default options
