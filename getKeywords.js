const axios = require('axios');
const cheerio = require('cheerio');
const got=require('got')
var randtoken = require('rand-token').generator({
    chars: '0-9'
});
const _=require('lodash')
var randomWords = require('random-words');


let client=`chrome`
let suffixes=["","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z","how","which","why","where","who","when","are","what"]



const getKeywords = async() =>{
    let keywords=[]
    let word=randomWords()

    if(keywords.length<=500){
        await Promise.all(suffixes.map(async s=>{
            let query=`${word} ${s}`
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


getKeywords().then(a=>{
    console.log(a)
})