const axios = require('axios')

const url = 'https://api.github.com/users/marcpre'


setInterval(() => {
  axios.get(url)
        .then((response) => {
          console.log(response)
          console.log('#######################')
        })
}, 3000)
