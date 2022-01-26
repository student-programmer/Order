const dataTestAccountInfo = {
    status: true,
    row: {
        'id'           : 1,
        'name'         : 'ExpressVPN',
        'image'        : '/images/vpn-4.png',
        'title'        : 'ExpressVPN 1 year premium with 50% off',
        'category'     : 'VPN',
        'descriptions' : [
            {
                'title' : '48 Countries To Choose From',
                'text'  : '<p>Our secure vpn access servers are monitored.  They’re access controlled & we are the only ones that operate them — no one else.  They do not permanently store IP addresses nor do they store logs.  Each server supports all popular protocols including: OpenVPN, HTTP Proxy, Smart DNS, Obfuscation & SSH SOCKS. With the very best server locations and low ping times, you will always find a fast server close to you.</p>'
            },
            {
                'title' : 'No Logs Ever',
                'text'  : '<p>We take your privacy very seriously. We do not store any logs of the websites you visit, we never will and never have. If required we will move jurisdictions and go above and beyond for you.</p>'
            },
            {
                'title' : 'Bypass Internet Censorship',
                'text'  : '<p>Many Countries including United Kingdom, France, Germany, East Asia, Central Asia, The Middle East/North Africa, Australia and many more employ internet censorship or filtering.  By using VPNSecure you can take back your freedom and enjoy un-restricted internet. In heavily restricted regions we offer obfuscation (Stealth VPN) built right into our hand crafted VPN client.</p>'
            },
            {
                'title' : 'Choose Cipher Strength',
                'text'  : '<p>Depending on your use case, you may want to encrypt your internet connection but also get the best speed available.  We give you the option to choose your encryption cipher, from a low cipher of 64bits, to high encryption using AES-256. This gives you the freedom and ability to choose the type of connection you prefer. </p>'
            },
            {
                'title' : 'Meta Search',
                'text'  : '<p>Meta Search is a metasearch engine, with the aim of protecting the privacy of its users. Metasearch does not share users IP addresses or search history with the search engines from which it gathers results. Meta Search will proxy results from leading search engines, so you don\'t have too. It\'s the privacy search engine, included in all premium VPN plans.</p>'
            },

        ]
    }
};

export function getVendorInfo(data) {
    console.log('getVendorInfo---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestAccountInfo)
        }, 200)
    })
}

const dataTestCompareList = {"status":1,"rows":[{"id":"1","name":"VPNSecure.me","image":"https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png","user_used":"2588"},{"id":"2","name":"VPNShazam.com","image":"https:\/\/api.savingsdealz.com\/images\/vpn-shazam-logo.png","user_used":"786"},{"id":"3","name":"Ivacy.com","image":"https:\/\/api.savingsdealz.com\/images\/vpn-ivacy-logo.jpg","user_used":"181"},{"id":"4","name":"NordVPN.com","image":"https:\/\/api.savingsdealz.com\/images\/vpn-nordvpn-logo.png","user_used":"2554"}]};

export function getVendorsList(data) {
    console.log('getCompareList---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestCompareList)
        }, 3000)
    })
}

const dataTestCompareInfo = {
    status: true,
    info: [
        {
            id: 1,
            name: 'Surfhark',
            image: '/images/vpn-2.png'
        },
        {
            id: 2,
            name: 'PrivateVPN',
            image: '/images/vpn-3.png'
        },
        {
            id: 3,
            name: 'VPN',
            image: '/images/vpn-4.png'
        },
    ],
    rows: [
        {
            'title' : 'Company',
            'type'  : 'image',
            'cells' : [
                '/images/vpn-2.png',
                '/images/vpn-3.png',
                '/images/vpn-4.png'
            ],
        },
        {
            'title' : 'Technoly',
            'type'  : 'text',
            'cells' : [
                'L2TP',
                'L2TP',
                'L2TP',
            ],
        },
        {
            'title' : 'Number of devices per license',
            'type'  : 'text',
            'cells' : [
                '2',
                '7',
                '4',
            ],
        },
        {
            'title' : 'Country',
            'type'  : 'dropdown',
            'cells' : [
                [
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                    'USA',
                    'Germany',
                    'Poland',
                ],
                ['USA', 'Germany', 'Poland'],
                ['USA', 'Germany', 'Poland'],
            ],
        },
        {
            'title' : 'Number of servers',
            'type'  : 'text',
            'cells' : [
                '150',
                '100',
                '500',
            ],
        },
        {
            'title' : 'Mobile app',
            'type'  : 'checkbox',
            'cells' : [
                '1',
                '1',
                '1',
            ],
        },
        {
            'title' : 'Keep logs',
            'type'  : 'checkbox',
            'cells' : [
                '1',
                '0',
                '0',
            ],
        },
        {
            'title' : 'Switch Kill',
            'type'  : 'checkbox',
            'cells' : [
                '0',
                '1',
                '1',
            ],
        },
    ]
};

export function getCompareVendorsInfo(data) {
    console.log('getCompareVendorsInfo---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestCompareInfo)
        }, 200)
    })
}
