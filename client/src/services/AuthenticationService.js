import Api from './api'

export default {
  regiser (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenicationService.regiser({
//   emial: 'testig@testig.pl',
//   pasword: '12345'
// })
