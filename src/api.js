import axios from 'axios';

// Configure the baseURL so that I don't have to keep passing it around
const api = axios.create({
    baseURL: 'http://contact-book-api.test/api',
});

// Here I set up all the default headers so that I don't have to repeat myself
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api
