import React from 'react'
import axios from "axios";
function Demo() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '593a518e59msh31aa9356440ad74p1853ffjsncc549ec7f34a',
            'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
        }
    };

    fetch('https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product?url=https%3A%2F%2Fwww.walmart.com%2Fip%2FMedia-Remote-for-PlayStation-5%2F381848762', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return (
        <div>Demo</div>
    )
}

export default Demo