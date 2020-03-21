const franc = require('franc')
const { Responder } = require('cote')

const service = new Responder({
  name: `[${process.env.npm_package_name} service]`,
})

service.on('guess', ({ query }) => {
  const res = franc(query, { ignore: ['glg'] })
  return Promise.resolve(res)
})
