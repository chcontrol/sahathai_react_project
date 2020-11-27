import BallotIcon from '@material-ui/icons/Ballot';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FaceIcon from '@material-ui/icons/Face';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import HomeIcon from '@material-ui/icons/Home';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

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

const ListItems2 = [
    {
        Icon: BarChartIcon,
        menutitle: 'Dashboard',
        href: '/app/dashboard',
    },
    {
        Icon: BallotIcon,
        menutitle: 'ERPStep',
        href: '/app/ERPStep',
    },
    {
        Icon: FindInPageIcon,
        menutitle: 'Search Report',
        href: '/app/SerachReport',
    },
    {
        Icon: MonetizationOnIcon,
        menutitle: 'ขายในประเทศ',
        submenu: [
            {
                href: '/app/DomesticBacklog',
                Icon: AssignmentIcon,
                title: 'รายงานค้างส่งในประเทศ'
            },
            {
                href: '/app/DomesticItemStock',
                Icon: AssignmentIcon,
                title: 'รายงาน Item คงเหลือ(คลังย่อย)'
            },
            {
                href: '/app/2',
                Icon: AssignmentIcon,
                title: 'รายงาน Item Invoice'
            },
            {
                href: '/app/3',
                Icon: AssignmentIcon,
                title: 'รายงานใบมัดจำ'
            },
            {
                href: '/app/4',
                Icon: AssignmentIcon,
                title: 'Ledger Posted Local Sales Report'
            },
            {
                href: '/app/5',
                Icon: AssignmentIcon,
                title: 'รายงาน DO ที่ยังไม่เปิด INV'
            },
        ]
    },
    {
        Icon: MonetizationOnOutlinedIcon,
        menutitle: 'ขายต่างประเทศ',
        submenu: [
            {
                href: '/app/productionReport',
                Icon: AssignmentIcon,
                title: 'Production report'
            },
        ]
    },
    {
        Icon: AttachMoneyIcon,
        menutitle: 'การเงิน',
        submenu: [
            {
                href: '/app/productionReport',
                Icon: AssignmentIcon,
                title: 'รายงานค้างส่งในประเทศ'
            },
        ]
    },
    {
        Icon: OfflinePinIcon,
        menutitle: 'QC',
        submenu: [
            {
                href: '/app/productionReport',
                Icon: AssignmentIcon,
                title: 'Production report'
            },
        ]
    },
    {
        Icon: HomeIcon,
        menutitle: 'คลัง',
        submenu: [
            {
                href: '/app/productionReport',
                Icon: AssignmentIcon,
                title: 'Production report'
            },
        ]
    },
    {
        Icon: HomeWorkIcon,
        menutitle: 'ผลิต',
        submenu: [
            {
                href: '/app/productionReport',
                Icon: AssignmentIcon,
                title: 'Production report'
            },
            {
                href: '/app/productionMatlTrans',
                Icon: AssignmentIcon,
                title: 'Production MatlTrans'
            },
            {
                href: '/app/moveItem',
                icon: LocalShippingIcon,
                title: 'move Item'
            },
        ]
    },
    {
        Icon: LocalAtmIcon ,
        menutitle: 'ตุ้นทุน',
        submenu: [
            {
                href: '/app/productionReport',
                Icon: AssignmentIcon,
                title: 'Production report'
            },
            {
                href: '/app/productionMatlTrans',
                Icon: AssignmentIcon,
                title: 'Production MatlTrans'
            },
            {
                href: '/app/moveItem',
                icon: LocalShippingIcon,
                title: 'move Item'
            },
        ]
    },
    {
        Icon: FaceIcon,
        menutitle: 'การจัดการผู้ใช้งาน',
        submenu: [
            {
                href: '/app/account',
                icon: UserIcon,
                title: 'Account'
            },
            {
                href: '/app/users',
                icon: PeopleAltIcon,
                title: 'Users'
            },
        ]
    },
];


export default ListItems2;