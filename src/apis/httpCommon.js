import axios from 'axios'

const token = localStorage.getItem('token')

export default axios.create({
  baseURL: 'https://api-harry-potter-app.cyclic.app/',
  headers: {
    'Content-type': 'application/json',
    'Authorization': token
  }
})
