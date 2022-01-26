import axios from 'axios'

export function sendSupportForm(data) {
    let result = axios.post('/contact-us/add', data).then(function (response) {
        return response;
    }).catch(function (error) {
        console.log(error);
    });
    return result;
}