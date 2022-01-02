const someHost = "https://examples.cloudflareworkers.com/demos"
const url = `https://keywordtool.io/search/keywords/google/1#suggestions`

const fetch=require('node-fetch')
/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response
 */
async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json())
  }
  else if (contentType.includes("application/text")) {
    return response.text()
  }
  else if (contentType.includes("text/html")) {
    return response.text()
  }
  else {
    return response.text()
  }
}

async function handleRequest() {
  const init = {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  }
  const response = await fetch(url, init)
  const results = await gatherResponse(response)
  console.log(results)
//   return new Response(results, init)
}

handleRequest()

// addEventListener("fetch", event => {
//   return event.respondWith(handleRequest())
// })
