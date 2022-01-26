const dataTest = {
    status: true,
    rows: [
        {
            'id': 1,
            'image': '/images/vpn-4.png',
            'name': 'ExpressVPN',
            'title': 'ExpressVPN 1 year premium with 50% off',
            'subtitle': 'License Category: 1 year',
            'url': '/offer-expressvpn-1-year-premium-50-off-1',
            'vendor_url': '/vendor-expressvpn-1',
            'old_price': 1000,
            'price': 55,
            'date': '-50%',
            'comments': 10,
        },
        {
            'id': 2,
            'image': '/images/vpn-5.png',
            'name': 'ExpressVPN',
            'title': 'ExpressVPN 1 year premium with 50% off',
            'url': '/offer-expressvpn-1-year-premium-50-off-1',
            'vendor_url': '/vendor-expressvpn-1',
            'old_price': 1000,
            'price': 55,
            'discount': '-50%',
            'discount_title': 'Take it and get 50% off',
            'description': 'Save 49% on your ExpressVPN plan today'
        },
        {
            'id': 3,
            'image': '/images/vpn-7.png',
            'name': 'ExpressVPN',
            'title': 'ExpressVPN 1 year premium with 50% off',
            'url': '/offer-expressvpn-1-year-premium-50-off-1',
            'vendor_url': '/vendor-expressvpn-1',
            'old_price': 1000,
            'price': 55,
            'discount': '-50%',
            'discount_title': 'Take it and get 50% off',
            'description': 'Save 49% on your ExpressVPN plan today'
        },


    ]
};

const dataTestVpnDeals = {
    "status": 1,
    "rows": [
        {
            "id": "1",
            "image": "https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png",
            "name": "1 Month VPN",
            "url": "\/offer-vpnsecure-1-month-premium-vpn-1",
            "price": "4.97",
            "description": "Save 50%",
            "descriptions": ["Ultra Cheap Shared, VPS, & Dedicated Servers", "Unlimited SSD Storage & Monthly Bandwidth", "No Increased Pricing on Plan Renewal Rates"]
        },
        {
            "id": "2",
            "image": "https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png",
            "name": "6 Month VPN ",
            "url": "\/offer-vpnsecure-6-month-premium-vpn-2",
            "price": "49.95",
            "descriptions": ["Ultra Cheap Shared, VPS, & Dedicated Servers", "Unlimited SSD Storage & Monthly Bandwidth", "No Increased Pricing on Plan Renewal Rates"]
        },
        {
            "id": "3",
            "image": "https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png",
            "name": "12 Month VPN",
            "url": "\/offer-vpnsecure-3-month-premium-vpn-3",
            "price": "79.95",
            "descriptions": ["Ultra Cheap Shared, VPS, & Dedicated Servers", "Unlimited SSD Storage & Monthly Bandwidth", "No Increased Pricing on Plan Renewal Rates"]
        },
        {
            "id": "4",
            "image": "https:\/\/api.savingsdealz.com\/images\/vpn-shazam-logo.png",
            "name": "12 Months VPN",
            "url": "\/offer-vpnshazam-12-months-vpn-4",
            "price": "49.99",
            "descriptions": ["Manage Unlimited Domain Names with cPanel.", "Fast SSD Storage for CMS Website Speeds", "7 Different International Data Centers"]
        },
        {
            "id": "5",
            "image": "https:\/\/api.savingsdealz.com\/images\/vpn-shazam-logo.png",
            "name": "24 Months VPN",
            "url": "\/offer-vpnshazam-24-months-vpn-5",
            "price": "79.99",
            "descriptions": ["Manage Unlimited Domain Names with cPanel.", "Fast SSD Storage for CMS Website Speeds", "7 Different International Data Centers"]
        }
    ]
};

const resultSavePayerEmail = {
    status: 1,
}

export function getTopSuggestions(data) {
    console.log('getTopSuggestions---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTest)
        }, 200)
    })
}

export function getBestVpnDeals(data) {
    console.log('getBestVpnDeals---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestVpnDeals)
        }, 5000)
    })
}


const dataTestRecomendationDeals = {
    "status": 1,
    "rows": [{
        "id": "1",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png",
        "name": "1 Month VPN",
        "url": "\/offer-vpnsecure-1-month-premium-vpn-1",
        "price": "4.97",
        "descriptions": ["48 Countries To Choose From", "No Logs Ever", "Bypass Internet Censorship", "Choose Cipher Strength", "Meta Search"]
    }, {
        "id": "2",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png",
        "name": "6 Month VPN ",
        "url": "\/offer-vpnsecure-6-month-premium-vpn-2",
        "price": "24.97",
        "descriptions": ["48 Countries To Choose From", "No Logs Ever", "Bypass Internet Censorship", "Choose Cipher Strength", "Meta Search"]
    }, {
        "id": "3",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png",
        "name": "12 Month VPN",
        "url": "\/offer-vpnsecure-3-month-premium-vpn-3",
        "price": "39.97",
        "descriptions": ["48 Countries To Choose From", "No Logs Ever", "Bypass Internet Censorship", "Choose Cipher Strength", "Meta Search"]
    }, {
        "id": "4",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpn-shazam-logo.png",
        "name": "12 Months VPN",
        "url": "\/offer-vpnshazam-12-months-vpn-4",
        "price": "24.9",
        "descriptions": ["Supercharged VPN", "Unlimited servers switching", "5 simultaneous connections", "Absolutely no logs policy", "Powerful online protection"]
    }, {
        "id": "5",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpn-shazam-logo.png",
        "name": "24 Months VPN",
        "url": "\/offer-vpnshazam-24-months-vpn-5",
        "price": "39.9",
        "descriptions": ["Supercharged VPN", "Unlimited servers switching", "5 simultaneous connections", "Absolutely no logs policy", "Powerful online protection"]
    }, {
        "id": "6",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpn-ivacy-logo.jpg",
        "name": "6 months VPN",
        "url": "\/offer-ivacy-6-months-vpn-6",
        "price": "15",
        "descriptions": ["Stay Secure with Ivacy VPN", "256-Bit Encryption", "Public Wi-Fi Security", "No Logs Policy", "Enjoy Buffer-free Streaming"]
    }, {
        "id": "7",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpn-ivacy-logo.jpg",
        "name": "2 year VPN",
        "url": "\/offer-ivacy-2-year-vpn-7",
        "price": "30",
        "descriptions": ["Stay Secure with Ivacy VPN", "256-Bit Encryption", "Public Wi-Fi Security", "No Logs Policy", "Enjoy Buffer-free Streaming"]
    }, {
        "id": "8",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpn-ivacy-logo.jpg",
        "name": "5 year VPN",
        "url": "\/offer-ivacy-5-year-vpn-8",
        "price": "50",
        "descriptions": ["Stay Secure with Ivacy VPN", "256-Bit Encryption", "Public Wi-Fi Security", "No Logs Policy", "Enjoy Buffer-free Streaming"]
    }, {
        "id": "9",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpn-nordvpn-logo.png",
        "name": "1 month VPN",
        "url": "\/offer-nordvpn-1-month-9",
        "price": "8",
        "descriptions": ["Secure Internet", "Servers everywhere", "NordLynx for top speed", "No logs", "Security for all your devices"]
    }, {
        "id": "10",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpn-nordvpn-logo.png",
        "name": "1 year VPN",
        "url": "\/offer-nordvpn-1-year-10",
        "price": "58",
        "descriptions": ["Secure Internet", "Servers everywhere", "NordLynx for top speed", "No logs", "Security for all your devices"]
    }, {
        "id": "11",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpn-nordvpn-logo.png",
        "name": "2 year VPN",
        "url": "\/offer-nordvpn-2-year-11",
        "price": "83",
        "descriptions": ["Secure Internet", "Servers everywhere", "NordLynx for top speed", "No logs", "Security for all your devices"]
    }, {
        "id": "12",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpn-nordvpn-logo.png",
        "name": "3 year VPN",
        "url": "\/offer-nordvpn-3-year-12",
        "price": "95",
        "descriptions": ["Secure Internet", "Servers everywhere", "NordLynx for top speed", "No logs", "Security for all your devices"]
    }]
};

export function getRecomendationOffers(data) {
    console.log('getRecomendationOffers---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestRecomendationDeals)
        }, 2000)
    })
}


const dataTestAccountInfo = {
    "status": 1,
    "row": {
        "id": "1",
        "category": "VPN",
        "ribbon": "BEST VALUE",
        "image": "https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png",
        "url": "\/offer-vpnsecure-1-month-premium-vpn-1",
        "vendor_url": "\/vendor-vpn-vpnsecure-1",
        "name": "VPNSecure.me",
        "title": "1 Month VPN",
        "price": "4.97",
        "old_price": "9.95",
        "discount": "-50%",
        "description": "VPNsecure 1 month premium 50% Off",
        "discount_title": "Take it and get 50% off",
        "user_used": "1187"
    }
};

export function getOfferInfo(data) {
    console.log('getOfferInfo---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestAccountInfo)
        }, 200)
    })
}


const dataTestVendorVpn = {
    "status": 1,
    "rows": [
        {
            "id": "1",
            "category": "VPN",
            "image": "/images\/vpnsecure-logo.png",
            "url": "\/offer-vpnsecure-1-month-premium-vpn-1",
            "vendor_id": "1",
            "vendor_url": "\/vendor-vpn-vpnsecure-1",
            "name": "VPNSecure.me",
            "title": "1 Month VPN",
            "price": "4.97",
            "old_price": "9.95",
            "discount": "-50%",
            "description": "VPNsecure 1 month premium 50% Off",
            "discount_title": "Take it and get 50% off",
            "user_used": "1187"
        },
        {
            "id": "2",
            "category": "VPN",
            "image": "/images\/vpnsecure-logo.png",
            "url": "\/offer-vpnsecure-6-month-premium-vpn-2",
            "vendor_id": "1",
            "vendor_url": "\/vendor-vpn-vpnsecure-1",
            "name": "VPNSecure.me",
            "title": "6 Month VPN ",
            "price": "49.95",
            "old_price": null,
            "discount": null,
            "description": null,
            "discount_title": null,
            "user_used": null
        },
        {
            "id": "3",
            "category": "VPN",
            "image": "/images\/vpnsecure-logo.png",
            "url": "\/offer-vpnsecure-3-month-premium-vpn-3",
            "vendor_id": "1",
            "vendor_url": "\/vendor-vpn-vpnsecure-1",
            "name": "VPNSecure.me",
            "title": "12 Month VPN",
            "price": "79.95",
            "old_price": null,
            "discount": null,
            "description": null,
            "discount_title": null,
            "user_used": null
        },
        {
            "id": "4",
            "category": "VPN",
            "image": "/images\/vpn-shazam-logo.png",
            "url": "\/offer-vpnshazam-12-months-vpn-4",
            "vendor_id": "2",
            "vendor_url": "\/vendor-vpn-vpnshazam-2",
            "name": "VPNShazam.com",
            "title": "12 Months VPN",
            "price": "49.99",
            "old_price": null,
            "discount": null,
            "description": null,
            "discount_title": null,
            "user_used": null
        },
        {
            "id": "5",
            "category": "VPN",
            "image": "/images\/vpn-shazam-logo.png",
            "url": "\/offer-vpnshazam-24-months-vpn-5",
            "vendor_id": "2",
            "vendor_url": "\/vendor-vpn-vpnshazam-2",
            "name": "VPNShazam.com",
            "title": "24 Months VPN",
            "price": "79.99",
            "old_price": null,
            "discount": null,
            "description": null,
            "discount_title": null,
            "user_used": null
        }
    ]
}

const dataTestVendorBundle = {
    status: true,
    rows: [
        {
            'id': 1,
            'category': 'bundle',
            'image': '/images/bundle1.png',
            'offerUrl': '/vendor-express-1',
            'availability': '1',
            'brands': [
                {
                    id: 1,
                    vendorUrl: '/vendor-vpn-1',
                    name: 'VPN.com'
                },
                {
                    id: 2,
                    vendorUrl: '/vendor-vpn-2',
                    name: 'Uptobox.com'
                },
                {
                    id: 3,
                    vendorUrl: '/vendor-vpn-3',
                    name: 'Xfantasy.tv'
                },
                {
                    id: 4,
                    vendorUrl: '/vendor-vpn-4',
                    name: 'zbigz.com'
                },
            ],
            'title': '4 in 1 service - 1 month premium',
            'old_price': 1000,
            'price': 55,
            'discount': '-50%',
            'discount_title': 'Take it and get 50% off',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi',
            'subdescription': 'NordVPN 1 year premium with 50% off'
        },
        {
            'id': 2,
            'category': 'bundle',
            'image': '/images/bundle1.png',
            'url': '/vendor-express-1',
            'availability': '1',
            'brands': [
                {
                    id: 1,
                    vendorUrl: '/vendor-vpn-1',
                    name: 'VPN.com'
                },
                {
                    id: 2,
                    vendorUrl: '/vendor-vpn-2',
                    name: 'Uptobox.com'
                },
                {
                    id: 3,
                    vendorUrl: '/vendor-vpn-3',
                    name: 'Xfantasy.tv'
                },
                {
                    id: 4,
                    vendorUrl: '/vendor-vpn-4',
                    name: 'zbigz.com'
                },
            ],
            'title': '4 in 1 service - 1 month premium',
            'old_price': 1000,
            'price': 55,
            'discount': '-50%',
            'discount_title': 'Take it and get 50% off',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi',
            'subdescription': 'NordVPN 1 year premium with 50% off'
        },
        {
            'id': 3,
            'category': 'bundle',
            'image': '/images/bundle1.png',
            'url': '/vendor-express-1',
            'availability': '0',
            'brands': [
                {
                    id: 1,
                    vendorUrl: '/vendor-vpn-1',
                    name: 'VPN.com'
                },
                {
                    id: 2,
                    vendorUrl: '/vendor-vpn-2',
                    name: 'Uptobox.com'
                },
                {
                    id: 3,
                    vendorUrl: '/vendor-vpn-3',
                    name: 'Xfantasy.tv'
                },
                {
                    id: 4,
                    vendorUrl: '/vendor-vpn-4',
                    name: 'zbigz.com'
                },
            ],
            'title': '4 in 1 service - 1 month premium',
            'old_price': 1000,
            'price': 55,
            'discount': '-50%',
            'discount_title': 'Take it and get 50% off',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi',
            'subdescription': 'NordVPN 1 year premium with 50% off'
        },
        {
            'id': 4,
            'category': 'bundle',
            'image': '/images/bundle1.png',
            'url': '/vendor-express-1',
            'availability': '1',
            'brands': [
                {
                    id: 1,
                    vendorUrl: '/vendor-vpn-1',
                    name: 'VPN.com'
                },
                {
                    id: 2,
                    vendorUrl: '/vendor-vpn-2',
                    name: 'Uptobox.com'
                },
                {
                    id: 3,
                    vendorUrl: '/vendor-vpn-3',
                    name: 'Xfantasy.tv'
                },
                {
                    id: 4,
                    vendorUrl: '/vendor-vpn-4',
                    name: 'zbigz.com'
                },
            ],
            'title': '4 in 1 service - 1 month premium',
            'old_price': 1000,
            'price': 55,
            'discount': '-50%',
            'discount_title': 'Take it and get 50% off',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi',
            'subdescription': 'NordVPN 1 year premium with 50% off'
        },
        {
            'id': 5,
            'category': 'bundle',
            'image': '/images/bundle1.png',
            'url': '/vendor-express-1',
            'availability': '1',
            'brands': [
                {
                    id: 1,
                    vendorUrl: '/vendor-vpn-1',
                    name: 'VPN.com'
                },
                {
                    id: 2,
                    vendorUrl: '/vendor-vpn-2',
                    name: 'Uptobox.com'
                },
                {
                    id: 3,
                    vendorUrl: '/vendor-vpn-3',
                    name: 'Xfantasy.tv'
                },
                {
                    id: 4,
                    vendorUrl: '/vendor-vpn-4',
                    name: 'zbigz.com'
                },
            ],
            'title': '4 in 1 service - 1 month premium',
            'old_price': 1000,
            'price': 55,
            'discount': '-50%',
            'discount_title': 'Take it and get 50% off',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi',
            'subdescription': 'NordVPN 1 year premium with 50% off'
        },
        {
            'id': 6,
            'category': 'bundle',
            'image': '/images/bundle1.png',
            'url': '/vendor-express-1',
            'availability': '1',
            'brands': [
                {
                    id: 1,
                    vendorUrl: '/vendor-vpn-1',
                    name: 'VPN.com'
                },
                {
                    id: 2,
                    vendorUrl: '/vendor-vpn-2',
                    name: 'Uptobox.com'
                },
                {
                    id: 3,
                    vendorUrl: '/vendor-vpn-3',
                    name: 'Xfantasy.tv'
                },
                {
                    id: 4,
                    vendorUrl: '/vendor-vpn-4',
                    name: 'zbigz.com'
                },
            ],
            'title': '4 in 1 service - 1 month premium',
            'old_price': 1000,
            'price': 55,
            'discount': '-50%',
            'discount_title': 'Take it and get 50% off',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi',
            'subdescription': 'NordVPN 1 year premium with 50% off'
        },

    ]
};

export function getOfferList(data) {
    console.log('getOfferList---->', data)

    let rows = data['searchData']['category'] == 'vpn' ? dataTestVendorVpn : dataTestVendorBundle

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(rows)
        }, 2000)
    })
}

export function savePayerEmail(data) {
    console.log('save payer email---->', data)

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resultSavePayerEmail)
        }, 2000)
    })
}
