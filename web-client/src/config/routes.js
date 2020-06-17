import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutClient from '../layouts/LayoutClient';

//Admin Pages
import AdminHome from '../pages/Admin/AdminHome';
import AdminSignIn from '../pages/Admin/AdminSignIn';

//Client Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const routes = [
    {
        path: '/admin',
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/admin',
                component: AdminHome,
                exact: true
            },
            {
                path: '/admin/login',
                component: AdminSignIn,
                exact: true
            },
        ]
    },
    {
        path: '/',
        component: LayoutClient,
        exact: false,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/contact',
                component: Contact,
                exact: true
            },
        ]
    },
];

export default routes;