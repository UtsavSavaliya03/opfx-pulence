export const NavbarData = [
    {
        title: 'Payments',
        url: '/',
        activeUrl: ['/payments'],
    },
    {
        title: 'Instruments',
        activeUrl: ['/forex', '/metal', '/crypto'],
        children: [
            {
                title: 'Forex',
                url: '/'
            },
            {
                title: 'Metal',
                url: '/'
            },
            {
                title: 'Crypto',
                url: '/'
            },
        ]
    },
    {
        title: 'Platform',
        activeUrl: ['/mt4', '/mt5'],
        children: [
            {
                title: 'MT 4',
                url: '/'
            },
            {
                title: 'MT 5',
                url: '/'
            },
        ]
    },
    {
        title: 'Partnership',
        url: '/partnership',
        activeUrl: ['/partnership'],
    },
    {
        title: 'More',
        activeUrl: ['/contactUs', '/aboutUs', '/openLiveAccount', '/openDemoAccount'],
        children: [
            {
                title: 'Open Live Account',
                url: '/openLiveAccount'
            },
            {
                title: 'Open Demo Account',
                url: '/openDemoAccount'
            },
            {
                title: 'Contact Us',
                url: '/contactUs'
            },
            {
                title: 'Asbout Us',
                url: '/'
            },
        ]
    },
]