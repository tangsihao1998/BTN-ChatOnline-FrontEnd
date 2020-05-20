import axios from 'axios';

const api = axios.create ({
    baseURL: 'https://chatonline-backend.herokuapp.com/api/v1/user',
    timeout: 1000,
});

const setAuthToken = (token) => {
    if(token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else {
        delete api.defaults.headers.common['Authorization'];
    }
}

export default {
    api,
    setAuthToken
}
// setAuthToken;