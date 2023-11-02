import Login from '../../Pages/Login/Login.js';
import Partnership from '../../Pages/Partnership/Partnership.js';
import ContactUs from '../../Pages/ContactUs/ContactUs.js';
import OpenAccount from '../../Pages/OpenAccount/OpenAccount.js';

export const RoutesData = [
    {
        path: "/",
        element: Login,
    },
    {
        path: "/partnership",
        element: Partnership,
    },
    {
        path: "/contactUs",
        element: ContactUs,
    },
    {
        path: "/openAccount",
        element: OpenAccount,
    },
]