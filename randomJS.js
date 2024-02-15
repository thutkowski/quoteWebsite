

// how to fetch data from a json file 

fetch('./songImage.json')
.then((response) => response.json)
.then((json)=>console.log(json))

