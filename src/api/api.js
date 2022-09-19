import axios from 'axios';

export default axios.create({
  baseURL: 'https://luchs-api.herokuapp.com/'
});