const { Responder } = require('cote')

const { guessLanguage } = require('./lib')

const service = new Responder({
  name: `[${process.env.npm_package_name}] service`,
})

service.on('guess', ({ query }) => {
  return Promise.resolve(guessLanguage(query)[0])
})
