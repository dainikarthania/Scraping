// const urlMetadata = require('url-metadata')
//  urlMetadata("https://www.youtube.com/watch?v=Ue3x6nbke1s").then(
//   function (metadata) { // success handler
//     console.log(metadata)
//   })

// var scrape = require('html-metadata');
 
// var url = "https://www.youtube.com/watch?v=Ue3x6nbke1s";
 
// scrape(url).then(function(metadata){
//     console.log(metadata);
// });

const commoncrawl = require('commoncrawl')


commoncrawl.searchURL('https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711')
    .then((data) => {
        console.log(data);
    });

