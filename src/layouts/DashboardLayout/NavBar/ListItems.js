import BallotIcon from '@material-ui/icons/Ballot';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';

const ListItems = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/ERPStep',
    icon: BallotIcon,
    title: 'ERPStep'
  },
  {
    href: '/app/productionReport',
    icon: AssignmentIcon,
    title: 'production report'
  },
  {
    href: '/app/moveItem',
    icon: LocalShippingIcon,
    title: 'move Item'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Customers'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error'
  }
];


export default ListItems;