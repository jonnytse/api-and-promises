// FETCH API DATA WITH FETCH API

fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => {
        // all clever code
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

async function getCountries() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    console.log(data);
}

getCountries();

// GET DATA WITH AXIOS

axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => console.log(response.data));

async function getCountriesAxios() {
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    console.log(response.data);
}
getCountriesAxios();

// GET https://api.nasa.gov/planetary/apod
// oXj5PnRzPch835WTgoThSVfQdftEDm8WsqJsM4e4

async function getNasaImage() {
    const params = {
        api_key: "oXj5PnRzPch835WTgoThSVfQdftEDm8WsqJsM4e4"
    }
    const response = await axios.get("https://api.nasa.gov/planetary/apod", { params });
    console.log(response.data);
    // Put the image onto the page.
    const img = document.createElement('img')
    img.src = response.data.url
    document.getElementById('catpic').appendChild(img); 
}
getNasaImage();





async function getMarsWeather() {
    const params = {
        api_key: "oXj5PnRzPch835WTgoThSVfQdftEDm8WsqJsM4e4"
    }    
    const result = await axios.get("https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0", { params });
    const JSO = result.data;
    const sols = JSO.sol_keys;

    const dataArray = sols.map(key => {
        return{
            sol: key,
            ...result.data[key]
        }
    })
    console.log(dataArray);

    // const image = document.createElement('image');
    // image.src = JSO;
    // document.getElementById('pic').appendChild(image);
}
getMarsWeather();



// https://ollieswatches.com

// WATCHES Collection - /watches

// HTTP Verbs:
// - Get
// - Post
// - Put
// - Patch
// - Delete

// RESTful actions - JSON API
// ------------------
// INDEX : GET /watches
// - Get all the watches

// SHOW : GET /watches/{id}
// - Get one watch

// CREATE : POST /watches
// - Create one watch

// UPDATE : PUT/PATCH /watches/{id}
// - Updates one watch

// DESTROY : DELETE /watches/{id}
// - Deletes one watch 