import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api',
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + App.apiToken
    }
    //timeout: 10000
});

const client = {
    getClients() {
        return apiClient.get('/client');
    },
    getClient(id) {
        return apiClient.get('/client/' + id);
    },
    postClient(client) {
        return apiClient.post('/client', client);
    },
    updateClient(id, client) {
        return apiClient.patch('/client/' + id, client);
    },
    destroyClient(id) {
        return apiClient.delete('/client/' + id);
    }
};

export default {
    client
};
