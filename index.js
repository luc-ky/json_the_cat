const { fetchBreedDescription } = require('./breedFetcher');

const search = process.argv[2];

fetchBreedDescription(search, (error, description) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log(description);
  }
});