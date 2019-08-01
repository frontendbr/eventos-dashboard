import axios from 'axios';

const server = process.env.REACT_APP_API_URL


export const authInServer = ({ code }) => {
    axios.post(`${server}/auth`, {
        code
      })
      .then(function (response) {
        console.log(response);
      })
}


export const listEvents = () => {
    return axios.get(`${server}/event`)
      .then(function ({ data }) {
          console.log(data.data);
        return data.data;
      })
}
