const Humanoid = require("humanoid-js");
const CloudflareBypasser = require('cloudflare-bypasser');
let cf = new CloudflareBypasser();
let humanoid = new Humanoid();

cf.request({
    url: 'https://keywordtool.io/search/keywords/google/1#suggestions',
    headers: {
    referer: 'https://keywordtool.io/search/keywords/google/1',
    origin: 'https://keywordtool.io'
    }
  })
  .then(res => {
        humanoid.bypassJSChallenge(res)
        .then(challengeResponse => {
            // Note that challengeResponse.isChallengeSolved won't be set to true when doing manual bypassing.
            console.log(challengeResponse) // <!DOCTYPE html><html lang="en">...
        })
});
  


// let humanoid = new Humanoid();
// humanoid.get("https://keywordtool.io/search/keywords/google/1#suggestions",null,{
//     referer: 'https://keywordtool.io/search/keywords/google/1',
//     origin: 'https://keywordtool.io'
// })
//     .then(res => {
//         console.log(res.statusCode)
//         console.log(res.isSessionChallenged)

//         humanoid.bypassJSChallenge(res)
//         .then(challengeResponse => {
//             // Note that challengeResponse.isChallengeSolved won't be set to true when doing manual bypassing.
//             console.log(challengeResponse.body) // <!DOCTYPE html><html lang="en">...
//         })
  
//     })
//     .catch(err => {
//     	console.error("ddd",err.message)
//     })
