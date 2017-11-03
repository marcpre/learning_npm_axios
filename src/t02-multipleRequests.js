const axios = require('axios')
const username = 'marcpre'

axios.get('https://api.github.com/users/' + username)
    .then(function(response) {
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
    })
