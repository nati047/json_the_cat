const request = require('request');
request('https://api.thecatapi.com/v1/breeds/search?q=b', (error, response, body) => {
  if (error) {
    console.log('request failed!!!');
    return;
  }
  if (body === '[]') {
    console.log('Sorry breed not found!');
    return;
  }
  body = JSON.parse(body);
  console.log('\n-----------------------\n', body[0].description, '\n-----------------------\n');

});