const http = require('http')
const fileSystem = require('fs')

const helloWorld = (request, response) => {
  console.log('Request URL: ', request.url)

  if (request.url === '/andra-sidan') {
    response.writeHead(200)
    response.end('<html><head><meta charset="utf-8"></head><body><div style="background: blue;">Hej från andra sidan!</div></body></html>')
    return
  }

  fileSystem.readFile('index.html', (error, content) => {
    if (error) {
      response.writeHead(404)
      response.end()
      return
    }

    response.writeHead(200)
    response.end(content)
  })

  //response.writeHead(200)
  //response.end('<html><head><meta charset="utf-8"></head><body><div style="background: red;">Hej från första sidan!</div></body></html>')
}

const server = http.createServer(helloWorld)
server.listen(8080)