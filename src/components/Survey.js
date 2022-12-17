import React, { useEffect, useState } from 'react'
import axios from "axios";
function Survey() {
    const [Data, setData] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/search',
        params: {
            query: 'pattaya',
            limit: '30',
            offset: '0',
            units: 'km',
            location_id: '1',
            currency: 'USD',
            sort: 'relevance',
            lang: 'en_US'
        },
        headers: {
            'X-RapidAPI-Key': '593a518e59msh31aa9356440ad74p1853ffjsncc549ec7f34a',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };


    useEffect(() => {
        axios.request(options).then(function (response) {
            setData(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    console.log(Data.data);
    // console.log(Data.text)
    return (

        <h1>Deepak</h1>

    )
}

export default Survey