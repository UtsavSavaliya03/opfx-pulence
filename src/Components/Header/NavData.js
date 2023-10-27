export const NavbarData = [
    {
        title: 'Payments',
        url: '/payments',
        activeUrl: ['/payments'],
    },
    {
        title: 'Instruments',
        activeUrl: ['/forex', '/metal', '/crypto'],
        children: [
            {
                title: 'Forex',
                url: '/forex'
            },
            {
                title: 'Metal',
                url: '/metal'
            },
            {
                title: 'Crypto',
                url: '/crypto'
            },
        ]
    },
    {
        title: 'Platform',
        activeUrl: ['/mt4', '/mt5'],
        children: [
            {
                title: 'MT 4',
                url: '/mt4'
            },
            {
                title: 'MT 5',
                url: '/mt5'
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
        activeUrl: ['/contactUs', '/aboutUs', '/openAccount'],
        children: [
            {
                title: 'Open Account',
                url: '/openAccount'
            },
            {
                title: 'Contact Us',
                url: '/contactUs'
            },
            {
                title: 'Asbout Us',
                url: '/aboutUs'
            },
        ]
    },
]