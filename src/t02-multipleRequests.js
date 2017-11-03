const axios = require('axios')


axios.all([
  axios.get('https://api.github.com/users/marcpre'),
  axios.get('https://api.github.com/users/marcpre/repos'),
])
    .then(axios.spread((userResponse, reposResponse) => {
      console.log('User', userResponse.data)
      console.log('###############################')
      console.log('Repositories', reposResponse.data)
    }))
