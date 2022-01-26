import axios from 'axios'

const dataTestAccountInfo = {
    status: true,
    row: {
        'email' : 'test@test.com',
        'password': '**********'
    }
};

export function getAccountInfo(data) {
    console.log('getAccountInfo---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestAccountInfo)
        }, 200)
    })
}

const dataTest = {
    status  : 0,
    row : {
        'email' : 'sdfsdf@sdfsdf.sdf',
        'id'    : 2222
    }
};

export function checkSession() {
    console.log('checkSession---->')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTest)
        }, 1000)
    })
}



const dataTestLogin = {
    status : 1,
    user   : {
        'email' : 'sdfsdf@sdfsdf.sdf',
        'id'    : 2222
    }
};

export function sendSignIn(data) {
    console.log('sendSignIn--->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestLogin)
        }, 3000)
    })
}

const dataTestLogout = {
    status : 1
};

export function sendLogout() {
    console.log('sendLogout--->')
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestLogout)
        }, 3000)
    })
}

const dataTestSignup = {
    status: 1,
    user   : {
        'email' : 'sdfsdf@sdfsdf.sdf',
        'id'    : 2222
    },
    error: {
    }
};

export function sendRegister(data) {
    console.log('sendRegister----->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTestSignup)
        }, 1000)
    })
}