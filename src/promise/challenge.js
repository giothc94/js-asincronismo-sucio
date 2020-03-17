const fetch = require("../utils/fetchData");

const API = "https://rickandmortyapi.com/api/character/";

var myData = {}

fetch(API)
  .then(data => {
    // console.log(data.info.count);
    myData.count = data.info.count
    return fetch(`${API}${data.results[0].id}`);
  })
  .then(data => {
    // console.log(data.name);
    myData.name = data.name
    return fetch(data.origin.url);
  })
  .then(data => {
    // console.log(data.dimension);
    myData.dimesion = data.dimension
  })
  .catch(error => console.log(error))
  .then(()=>{
    console.log(myData)
  })
  console.log('Hola')


