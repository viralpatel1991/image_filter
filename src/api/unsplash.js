import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 89169be73a96a38f1e40927765f8d64ce48ab5cfdfa0a910854b3fb437978f6f'
    }
});