/* Global Variables */

let baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = ',us&appid=73ce595a0ec8725af0a3bf9dfd38dcc4';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', (e) => {
    let zip = document.getElementById('zip').value;
    getWeather(baseURL, zip, apiKey)
});

const getWeather = async (baseURL, zip, apiKey) => {
    const res = await fetch(baseURL+zip+apiKey)
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log('error', error);
    }
};