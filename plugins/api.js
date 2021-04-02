export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      'Access-Control-Allow-Headers': 'Authorization',
      'Access-Control-Allow-Methods': 'POST, GET',
      accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })

  api.setBaseURL('https://madqueen.herokuapp.com/api/')
  // Inject to context as $api
  inject('api', api)

  // interceptors
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token !== undefined && token != null && token.includes('Bearer')) {
      config.headers.Authorization = token
    }

    return config
  })
  api.interceptors.response.use((response) => {
    console.log(response)
    const token = response.headers.authorization
    if (token !== undefined && token !== null && token.includes('Bearer')) {
      localStorage.setItem('token', token)
    }
    return response
  })

  api.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 403) {
      redirect('/login')
    }
  })
}
