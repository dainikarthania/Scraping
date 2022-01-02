const axios = require('axios');
const cheerio = require('cheerio');
const got=require('got')
var randtoken = require('rand-token').generator({
    chars: '0-9'
});
const _=require('lodash')
var cloudscraper = require('cloudscraper');
const cloudflareScraper = require('cloudflare-scraper');
const CloudflareBypasser = require('cloudflare-bypasser');
 
let cf = new CloudflareBypasser();

// // const axiosCloudflare = require('axios-cloudflare');
 
// axiosCloudflare(axios);

let client=`chrome`
let suffixes=["","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z","how","which","why","where","who","when","are","what"]

let query=`react b`


const getKeywords = async() =>{
    let keywords=[]

    for(let i=1;i<=5;i++){
        let url=`https://keywordtool.io/search/keywords/google/${i}#suggestions`
    
        console.log(url)
        const res = await cloudscraper.get(url);
        console.log(res)
        // const $ = cheerio.load(res.data)
        // let text=$("#edit-keyword--3")
        // console.log(text)

        // await new Promise((rs,rj)=>{
        //     axios.get(url, {
        //         headers: {
        //           Accept: "application/json",
        //           "User-Agent": "axios 0.21.1",
        //           contentType:"text/html"
        //         }
        //       })
        //     .then(async function (response) {
        //         const $ = cheerio.load(response.data)
        //         let text=$("#edit-keyword--3")
        //         console.log(text)
        //         rs()
        //     }).catch(e=>{
        //         console.log(e.config)
        //     })
        // })
    }

    if(keywords.length<=200){
        await Promise.all(suffixes.map(async s=>{
            let query=`react ${s}`
            let underScope= randtoken.generate(19)
            let jsonp=`jQuery${randtoken.generate(20)}_${randtoken.generate(17)}`
            await new Promise((rs,rj)=>{
                axios.get(`https://suggestqueries.google.com/complete/search?q=${query}&client=${client}&_=${underScope}&jsonp=${jsonp}`)
                .then(async function (response) {
                    let data=response.data
                    data=data.replace(`${jsonp}(`,"")
                    data=data.substr(0,data.length-1)
                    let arr=JSON.parse(data)
                    keywords.push(arr[1])
                    rs()
                })
            })
        }))
    }

    return _.flatten(keywords)
}



// (async () => {
//     try {
//     for(let i=1;i<=5;i++){
//         let url=`https://keywordtool.io/search/keywords/google/${i}#suggestions`
    
//         console.log(url)
//         cf.request(`https://keywordtool.io/search/keywords/google/${i}#suggestions`)
//         .then(res => {
//             console.log(res.body)
//         });
//         // const response = await cloudflareScraper.get(url);
//         // console.log(response)
//         // const $ = cheerio.load(response.data)
//         // let text=$("#edit-keyword--3")
//         // console.log(text)
//     }
//     } catch (error) {
//       console.log(error.message);
//     }
//   })();
  

(async()=>{
    let url=`https://keywordtool.io/search/keywords/google/1#suggestions`

    const options = {
        method:"get",
        uri:url,
        headers: {
            Referer: "https://keywordtool.io/",
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
        }
    }

    const res = await cloudscraper(options);
    console.log(res)
})()


// for(let i=1;i<=5;i++){
//     let url=`https://keywordtool.io/search/keywords/google/${i}#suggestions`

//     const options = {
//         url,
//         headers: {
//             Referer: "https://keywordtool.io/",
//             'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
//         }
//     }

//     const res = await cloudscraper.get(options);
//     console.log(res)




    
//     // got(url, options).then(result => {
//     //     console.log(result);
//     // }).catch(err => {
//     //     console.log(err);
//     // });

//     // axios.get(url)
//     // .then(async function (response) {
//     //     console.log(response)
//     //     // const $ = cheerio.load(response.data)
//     //     // let text=$("#edit-keyword--3")
//     //     // console.log(text)
//     //     rs()
//     // }).catch(e=>{
//     //     console.log(e.message)
//     // })
// }


// getKeywords().then(a=>{
//     console.log(a)
// })

// axios.get(`https://suggestqueries.google.com/complete/search?q=${query}&client=${client}&_=${_}&jsonp=${jsonp}`)
//   .then(async function (response) {
//       let data=response.data
//       data=data.replace(`${jsonp}(`,"")
//       data=data.substr(0,data.length-1)
//       let arr=JSON.parse(data)
//       console.log(arr[1])
//     })

// cf.request({
//   url: 'https://keywordtool.io/search/keywords/google/1#suggestions',
//   headers: {
//     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//   Referer: "https://keywordtool.io/"
//     }
// })
// .then(res => {
// console.log(res)
// });