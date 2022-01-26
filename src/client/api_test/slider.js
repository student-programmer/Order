import axios from 'axios'

const dataTest = {"status":true,"rows":[{"id":1,"image":"https:\/\/api.savingsdealz.com\/images\/slider\/slide-1.png"},{"id":2,"image":"https:\/\/api.savingsdealz.com\/images\/slider\/slide-2.png"},{"id":3,"image":"https:\/\/api.savingsdealz.com\/images\/slider\/slide-3.png"},{"id":4,"image":"https:\/\/api.savingsdealz.com\/images\/slider\/slide-4.png"},{"id":5,"image":"https:\/\/api.savingsdealz.com\/images\/slider\/slide-5.png"}]};

export function getSliderList(data) {
    console.log('getSliderList---->', data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dataTest)
        }, 2000)
    })
}