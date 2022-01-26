import axios from 'axios'

const dataTest = {"status":1,"rows":[{"id":"1","category":"VPN","image":"https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png","url":"\/offer-vpnsecure-1-month-premium-vpn-1","vendor_url":"\/vendor-vpn-vpnsecure-1","name":"VPNSecure.me","title":"1 Month VPN","price":"4.97","old_price":"9.95","discount":"-50%","description":"VPNsecure 1 month premium 50% Off","discount_title":"Take it and get 50% off","user_used":"1187","quantity":1,"tax":0},{"id":"2","category":"VPN","image":"https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png","url":"\/offer-vpnsecure-6-month-premium-vpn-2","vendor_url":"\/vendor-vpn-vpnsecure-1","name":"VPNSecure.me","title":"6 Month VPN ","price":"24.97","old_price":"49.95","discount":"-50%","description":"VPNsecure 6 month premium 50% Off","discount_title":"Take it and get 50% off","user_used":"569","quantity":1,"tax":0},{"id":"3","category":"VPN","image":"https:\/\/api.savingsdealz.com\/images\/vpnsecure-logo.png","url":"\/offer-vpnsecure-3-month-premium-vpn-3","vendor_url":"\/vendor-vpn-vpnsecure-1","name":"VPNSecure.me","title":"12 Month VPN","price":"39.97","old_price":"79.95","discount":"-50%","description":"VPNsecure 12 month premium 50% Off","discount_title":"Take it and get 50% off","user_used":"832","quantity":1,"tax":0},{"id":"4","category":"VPN","image":"https:\/\/api.savingsdealz.com\/images\/vpn-shazam-logo.png","url":"\/offer-vpnshazam-12-months-vpn-4","vendor_url":"\/vendor-vpn-vpnshazam-2","name":"VPNShazam.com","title":"12 Months VPN","price":"24.9","old_price":"49.99","discount":"-50%","description":"VPNshazam 12 month premium 50% Off","discount_title":"Take it and get 50% off","user_used":"371","quantity":1,"tax":0}]};

const dataTestBtn = {"status":1,"rows":[{"id":"1","quantity":1},{"id":"2","quantity":1},{"id":"3","quantity":1},{"id":"4","quantity":1}]};

const editResult = {
    status : 1,
    errors: [
        'Thing don\'t appear',
        'Error 707'
    ]
}

const linkToPayResult = {
    status : 1,
    paylink: 'https://google.com'
}

const formData = {
    status: 1,
    paylink: {"PAYEE_ACCOUNT":"U24703959","PAYEE_NAME":"VPN","PAYMENT_ID":1,"PAYMENT_AMOUNT":10,"PAYMENT_UNITS":"USD","STATUS_URL":"","PAYMENT_URL":"https:\/\/api.savingsdealz.com\/pay\/pm\/callback","PAYMENT_URL_METHOD":"POST","NOPAYMENT_URL":"https:\/\/api.savingsdealz.com\/pay\/pm\/canceled","NOPAYMENT_URL_METHOD":"POST"}
}

export function getCartOffersButton(data) {
    console.log('getCartOffersButton---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestBtn)
        }, 200)
    })
}

export function getCartOffers(data) {
    console.log('getCartOffers---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTest)
        }, 200)
    })
}

export function addToCart(data) {
    // console.log('addToCart---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(editResult)
        }, 200)
    })
}

export function getPayLink(data) {
    console.log('getPayLink---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(formData)
        }, 200)
    })
}
