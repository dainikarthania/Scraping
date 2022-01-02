// const axios = require('axios');
// const cheerio = require('cheerio');

// let searchTerm='bitcoin'
// axios.get(`https://www.bing.com/search?q=${searchTerm}`)
//   .then(function (response) {

//     console.log(response.data)
// //     const $ = cheerio.load(response.data)
// //     let links=$('.result__url').text()
// //     let titles=$('.result__title').text()
// //     let snippet=$('.result__snippet').text()
// //     let image=$('.result__icon').text()

// //     let data={}

// //     $('.result__url').each(function (i, e) {
// //       data[i]=Object.assign({},data[i],{url:$(this).text().trim()})
// //    });
// //    $('.result__title').each(function (i, e) {
// //     data[i]=Object.assign({},data[i],{title:$(this).text().trim()})
// //   });
// //   $('.result__snippet').each(function (i, e) {
// //     data[i]=Object.assign({},data[i],{description:$(this).text().trim()})
// //   });
// //   $('.result__icon__img').each(function (i, e) {
// //     data[i]=Object.assign({},data[i],{image:$(this).attr("src").trim()})
// //   });
  

// //   console.log(data)


// //     let all=$('.results')
// //     // all.map(a=>{
// //     //   console.log("hello",a)
// //     // })

// //     // console.log(all)

// //     // console.log("dd",titles)
// //     // console.log("dd",links)
// //     // console.log("dd",snippet)
// //     // console.log("dd",image)


// //     // // console.log(texts)
// //     // for (const link in texts) {
// //     //     let url=texts[link]
// //     //     // url = link['href']
// //     //     // console.log(url)
// //     // }


// //     // console.log(response.data)
//   })



const bing = require("bing-scraper");
bing.search({
    q: "react programing",
    enforceLanguage: true,
    pageCount: 5
}, function(err, resp) {
    if (err) {
        console.log(err);
    } else {
        console.log(resp.results);
        console.log(resp.results.length);

    }
})