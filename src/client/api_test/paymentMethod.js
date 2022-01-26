import axios from 'axios'

//const dataTest = {
//    status: true,
//    rows: [
//    ]
//};
//
const dataTest = {
    status: true,
    rows: [
        {
            'id' : 2,
            'image': '/images/bitcoin.png',
            'name'  : 'Bitcoin',
        },
        {
            'id' : 1,
            'image': 'https://api.savingsdealz.com/images/paypal-logo.svg',
            'name'  : 'Paypal',
        },
        {
            'id' : 3,
            'image': 'https://api.savingsdealz.com/images/gopay.png',
            'name'  : 'Credit or debit card',
        },
        {
            'id' : 4,
            'image': 'https://api.savingsdealz.com/images/pm.png',
            'name'  : 'PerfectMoney',
        },
    ]
};

export function getPaymentMethods(data) {
    console.log('getPaymentMethods---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTest)
        }, 200)
    })
}
