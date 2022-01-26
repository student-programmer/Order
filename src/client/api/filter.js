import axios from 'axios'

export function getFilterList(data) {
  return axios('https://api.savingsdealz.com/filter/list', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}
