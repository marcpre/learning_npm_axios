const path = require('path')
require('dotenv').config(path.join(__dirname, '/../.env'))
const axios = require('axios')


const url = process.env.WP_GET_ALL_USER

console.log(url)

setInterval(() => {
  axios.get(url)
        .then((response) => {
          console.log(response)
          console.log('#######################')
        })
}, 3000)
