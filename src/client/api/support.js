import axios from 'axios'

export function sendSupportForm(data) {
  return axios('https://api.savingsdealz.com/support/add', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}
