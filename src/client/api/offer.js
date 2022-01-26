import axios from 'axios';

export function getTopSuggestions(data) {
  return axios('https://api.savingsdealz.com/offer/top-suggestions', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}

export function getBestVpnDeals(data) {
  return axios('https://api.savingsdealz.com/offer/best-vpn-deals', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}

export function getRecomendationOffers(data) {
  return axios('https://api.savingsdealz.com/offer/recommendations', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}

export function getOfferInfo(data) {
  return axios('https://api.savingsdealz.com/offer/info', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}

export function getOfferList(data) {
  return axios('https://api.savingsdealz.com/offer/list', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}

export function savePayerEmail(data) {
  return axios('https://api.savingsdealz.com/order/payer_email', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}
