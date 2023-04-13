const request = require('request');
const search = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
  if (error) {
    console.error(error);
  }

  const data = JSON.parse(body);

  if (data.length !== 0) {
    console.log(data[0]["description"]);
  } else {
    console.log("Breed not found");
  }
});