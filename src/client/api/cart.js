import axios from 'axios'

export function getCartOffersButton (data) {
  return axios('https://api.savingsdealz.com/cart/offers-button', {
    method: 'post',
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    console.log(error)
  })
}

export function getCartOffers (data) {
  return axios('https://api.savingsdealz.com/cart/offers', {
    method: 'post',
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    console.log(error)
  })
}

export function getPayLink (data) {
  return axios('https://api.savingsdealz.com/cart/get-pay-link', {
    method: 'post',
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    console.log(error)
  })
}

export function addToCart (data) {
  return axios('https://api.savingsdealz.com/cart/add-offer', {
    method: 'post',
    data: data,
    withCredentials: true
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    console.log(error)
  })
}
