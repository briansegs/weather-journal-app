/* Global Variables */

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = ',us&appid=73ce595a0ec8725af0a3bf9dfd38dcc4';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// EventListeners
document.getElementById('generate').addEventListener('click', action);

function action (e) {
    let zip = document.getElementById('zip').value;
    let feelings = document.getElementById('feelings').value;

    getWeather(baseURL, zip, apiKey)

    .then(function (data) {
        postData('/add', {temperature: data.main.temp, date: data.dt, feelings: feelings});

        updateUI()
    })




};

const getWeather = async (baseURL, zip, apiKey) => {
    const res = await fetch(baseURL+zip+apiKey)
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log('error', error);
    }
};

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        const newData = await response.json();
        return newData
    }catch(error) {
        console.log('error', error);
    }
};


const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('date').innerHTML = allData[0].date;
      document.getElementById('temp').innerHTML = allData[0].temperature;
      document.getElementById('content').innerHTML = allData[0].userResponse;

    }catch(error){
      console.log("error", error);
    }
  }


