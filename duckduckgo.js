const axios = require('axios');
const cheerio = require('cheerio');
const _=require('lodash')
const metascraper = require('metascraper')([
  require('metascraper-image')()
])
const got = require('got')
const urlMetadata = require('url-metadata')
var parseDublinCore = require('html-metadata').parseDublinCore;
const { parser } = require('html-metadata-parser');
const request=require('request')
let searchTerm='bitcoin mining'
axios.get(`https://duckduckgo.com/html?q=${searchTerm}`)
  .then(async function (response) {
    const $ = cheerio.load(response.data)
    let links=$('.result__url').text()
    let titles=$('.result__title').text()
    let snippet=$('.result__snippet').text()
    let image=$('.result__icon').text()

    let data=[]

    $('.result__url').each(function (i, e) {
      let url=$(this).text().trim()
            if(!url.startsWith("http://") && !url.startsWith("https://")){
              url=`http://`+url
            }
            data.push({id:i,url})

      // data[i]=Object.assign({},data[i],{url:$(this).text().trim()})
   });
   $('.result__title').each(function (i, e) {
    let details=data.find(d=>{return d.id==i})
    // data[i]=Object.assign({},data[i],{title:$(this).text().trim()})
    data.push(Object.assign({},details,{title:$(this).text().trim()}))
    });
  $('.result__snippet').each(function (i, e) {
    let details=data.find(d=>{return d.id==i})
    data.push(Object.assign({},details,{description:$(this).text().trim()}))
    // data[i]=Object.assign({},data[i],{description:$(this).text().trim()})
    });

  // $('.result__icon__img').each(function (i, e) {
  //   data[i]=Object.assign({},data[i],{image:$(this).attr("src").trim()})
  // });
  

  await Promise.all(data.map(async d=>{
    await new Promise(async(rs,rj)=>{
  // urlMetadata(d.url).then(
  // function (metadata) { // success handler
  //   d.image=metadata.image
  //   d.keywords=metadata.keywords
  //   rs()
  // })

    //   parser(d.url).then(result=>{
    //     console.log(result);
    //  })
     

        // const metadata = await metascraper({url:d.url})
        // console.log(metadata)
        // // console.log(d.url)
        // // console.log(metadata)
        // d.image=metadata.image
        request(d.url, async (error, response, body)=> {
      // axios.get(d.url).then(async value=>{
        // const $ = cheerio.load(body);
      //   parseDublinCore($, function(error, metadata){
      //     console.log(error)
      //       console.log(metadata);
      //   });
    
      //   // const $ = cheerio.load(value.data)

      //   // let image=''
       
      //   // if(!image) image=$('meta[property="og:image:secure_url"]').attr('content')
      //   // if(!image) image=$('meta[property="og:image:url"]').attr('content')
      //   // if(!image) image=$('meta[property="og:image"]').attr('content')
      //   // if(!image) image=$('meta[name="twitter:image:src"]').attr('content')
      //   // if(!image) image=$('meta[name="twitter:image"]').attr('content')
      //   // if(!image) image=$('meta[itemprop="image"]').attr('content')
      //   // if(!image) image=$('img[alt*="author"]').attr('src')
      //   // if(!image) image=$('img[src]').attr('src')


        const metadata = await metascraper({html:body,url:d.url})
        // console.log(d.url)
        // console.log(metadata)
        d.image=metadata.image
        rs()
      })
    })
  }))

  console.log(data)

    // let all=$('.results')
    // all.map(a=>{
    //   console.log("hello",a)
    // })

    // console.log(all)

    // console.log("dd",titles)
    // console.log("dd",links)
    // console.log("dd",snippet)
    // console.log("dd",image)


    // // console.log(texts)
    // for (const link in texts) {
    //     let url=texts[link]
    //     // url = link['href']
    //     // console.log(url)
    // }


    // console.log(response.data)
  })