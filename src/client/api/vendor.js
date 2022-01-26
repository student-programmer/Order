import axios from 'axios'

export function getVendorInfo(data) {
  return axios('https://api.savingsdealz.com/vendor/info', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}

export function getVendorsList(data) {
  return axios('https://api.savingsdealz.com/vendor/list', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}

export function getCompareVendorsInfo(data) {
  return axios('https://api.savingsdealz.com/vendor/compare/info', {
      method: 'post',
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}
