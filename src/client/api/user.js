import axios from 'axios'

export function getAccountInfo(data) {
  return axios('https://api.savingsdealz.com/account/info', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}

export function checkSession() {
  return axios('https://api.savingsdealz.com/account/session', {
      method: "get",
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}

export function sendSignIn(data) {
  return axios('https://api.savingsdealz.com/account/signin', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    });
}

export function sendLogout() {
  return axios('https://api.savingsdealz.com/account/logout', {
      method: "post",
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    });
}

export function sendRegister(data) {
  return axios('https://api.savingsdealz.com/account/register', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    });
}
