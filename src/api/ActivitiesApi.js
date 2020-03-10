import axios from 'axios';

export default {
  getActivities (params) {
    return axios.get(
      `https://api.musement.com/api/v3/venues/164/activities`,
      {
        params,
        headers: {
          "accept-language": "it",
          "content-type": "application/json",
          "x-musement-currency": "EUR",
          "x-musement-version": "3.4.0"
        }
      }
      )
  }
}