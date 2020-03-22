const franc = require('franc')
const { Language } = require('node-nlp')

const language = new Language()

exports.guessLanguage = function guessLanguage(sentence, n = 10) {
  const top = {}
  const g1 = franc.all(sentence)
  const g2 = language.guess(sentence)
  for (let i = 0; i < n; i++) {
    let k = g1[i][0]
    if (!(k in top)) top[k] = 0
    top[k] += g1[i][1]

    k = g2[i]['alpha3']
    if (!(k in top)) top[k] = 0
    top[k] += g2[i]['score']
  }
  return Object.entries(top).sort((a, b) => -a[1] + b[1])[0]
}
