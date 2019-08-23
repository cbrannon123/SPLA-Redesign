const BASE_URL = 'https://api.airtable.com/v0/app5zXjw0a903c9TP/Resources?api_key=keyfKHA319Zt6OqfN';

export function getAllResources(){
    return fetch(BASE_URL, {mode: "cors"}).then(res => res.json());
}

export function getLocalResources(location){
    console.log(`${BASE_URL}?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
    return fetch(`${BASE_URL}?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`, {mode: "cors"}).then(res => res.json());
}