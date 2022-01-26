import axios from 'axios'

export function getBrandList(data) {
  return axios('https://api.savingsdealz.com/brand/list', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}
