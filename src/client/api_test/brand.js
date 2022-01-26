const dataTest = {
    status: true,
    rows: [
        {
            'id' : 1,
            'name'  : 'ExpressVPN',
        },
        {
            'id' : 2,
            'name'  : 'NordVPN',
        },
        {
            'id' : 3,
            'name'  : 'VPNsecure',
        },
        {
            'id' : 4,
            'name'  : 'VPNium',
        },
        {
            'id' : 5,
            'name'  : 'VPNshazam',
        },
        {
            'id' : 6,
            'name'  : 'VPNmonster',
        },
        {
            'id' : 7,
            'name'  : 'Private internet access',
        },
    ]
};

export function getBrandList(data) {
    console.log('getBrandList---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTest)
        }, 4000)
    })
}
