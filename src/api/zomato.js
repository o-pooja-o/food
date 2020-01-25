import axios from 'axios';

export default axios.create(
    {
        baseURL:'https://developers.zomato.com/api/v2.1',
        headers:{
            'user-key':'fdd2f4af640529533c7f9e9269283953' //authorization
        }
    }
);