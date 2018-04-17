import API from './API'

export default {
  register (credentials) {
    return API.post('register', credentials)
  }
}
