const cheerio = require('cheerio');
const request = require('request');
request('https://www.giftcardwiki.com/gift-cards/PetCo', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

  findTable(body);
});

function findTable(body) {
    const $ = cheerio.load(body);
    const table = $('#cards tbody');
    console.log(table.html());
}
