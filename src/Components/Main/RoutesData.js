import Login from '../../Pages/Login/Login.js';
import Partnership from '../../Pages/Partnership/Partnership.js';
import ContactUs from '../../Pages/ContactUs/ContactUs.js';
import OpenLiveAccount from '../../Pages/OpenLiveAccount/OpenLiveAccount.js';
import OpenDemoAccount from '../../Pages/OpenDemoAccount/OpenDemoAccount.js';

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
        path: "/openLiveAccount",
        element: OpenLiveAccount,
    },
    {
        path: "/openDemoAccount",
        element: OpenDemoAccount,
    },
]