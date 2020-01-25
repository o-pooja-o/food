//making reusable hook
import {useEffect, useState} from 'react';
import zomato from "../api/zomato";
//cut paste everything related to using api results from searchscreen
export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async term => {
      //  console.log('hi there');
        try {

            const response = await zomato.get(`/search?-entity_id=4%entity_type=city&q=${term}`);
            setResults(response.data.restaurants);
        }
        catch (e) {
            setErrorMessage('something went wrong');
        }
    };

    useEffect(()=>{
        searchApi('rolls');
    },[]);


    return [searchApi, results, errorMessage];//trick for reusable hooks


};