var request = require('request');
var cheerio = require('cheerio');
let fs=require('fs');
const { RSA_NO_PADDING } = require('constants');
var searchTerm = 'screen+scraping';
// var url = 'http://www.bing.com/search?q=' + searchTerm;
let url=`https://www.producthunt.com/posts/only-recipe`

let data=[]
const abc = async() =>{
    await new Promise((rs,rj)=>{
        request(url, function(err, resp, body){
            $ = cheerio.load(body);
          links = $('a'); //jquery get all hyperlinks
          $(links).each(function(i, link){
              data.push({
                  title:$(link).text(),
                  url:$(link).attr('href')
              })
          })
          console.log(data.slice(0,50))
        })
    })
}

abc()


console.log(data)