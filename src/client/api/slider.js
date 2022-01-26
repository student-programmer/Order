import axios from 'axios'

export function getSliderList(data) {
  return axios('https://api.savingsdealz.com/slider/list', {
      method: "post",
      data: data,
      withCredentials: true
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      console.log(error);
    })
}
