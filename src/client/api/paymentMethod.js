import axios from 'axios'

export function getPaymentMethods(data) {
  return axios('https://api.savingsdealz.com/payment-method/list', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}
