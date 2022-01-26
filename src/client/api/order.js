import axios from 'axios'

export function getAccountOrders(data) {
  return axios('https://api.savingsdealz.com/order/list', {
      method: 'post',
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}
