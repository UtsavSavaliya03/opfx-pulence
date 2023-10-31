/*
 * @file: index.js
 * @description: It Contain rest functions for api call .
 * @author: Poonam
 */

import axios from 'axios';
import { ToastsStore } from 'react-toasts';


var config = {
    headers: { 'Content-Type': 'multipart/form-data' },
};

var baseUrl = process.env.REACT_APP_BASE_URL;

const handleError = (err, hideError) => {
    let message = ''
    if (err) {
        message = err && err.error && err.error.message
        if (!message) message = err.message
        if (!message) message = 'Server Error'
    }
    if (!hideError) ToastsStore.error(message);
}

class ApiClient {
    static post(urlLink, params, base = '') {
        let url = baseUrl + urlLink
        if (base) url = base + urlLink

        return new Promise(function (fulfill, reject) {
            axios
                .post(url, params, config)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {
                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data)
                        fulfill({ ...eres.data, success: false });
                    } else {
                        ToastsStore.error('Network Error');
                        reject(error);
                    }
                });
        });
    }
}

export default ApiClient;
