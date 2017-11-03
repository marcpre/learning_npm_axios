const axios = require('axios')
const url = 'https://api.github.com/users/marcpre'


setInterval(function() {
    axios.get(url)
        .then(function(response) {
            console.log(response)
            console.log('#######################')
        })
}, 3000)
