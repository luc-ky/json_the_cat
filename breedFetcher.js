const request = require('request');

const fetchBreedDescription = function(search, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (!breed) {
      callback("Breed not found", null);
      return;
    }

    callback(null, breed.description);
    return;
  });
};

module.exports = { fetchBreedDescription };