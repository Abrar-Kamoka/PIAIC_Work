// import contentful from "contentful"

const contentful = require('contentful')

export const client = contentful.createClient({
  space: '6ppgmcbel7nq',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'aj9jCrP5NbEF4MaQtlhl2-uHT9zPA6zuw11CNwcVoB0'
})
client.getEntry('GqMvfaYHonv0HDdCofiHr')
  .then((entry: string) => console.log(entry))
  .catch(console.error)