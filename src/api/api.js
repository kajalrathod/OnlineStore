import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID KEVbrij3dLQ28seDOd0w2AUe_JUHAicD-NJMxY9XGsk'
    }
})