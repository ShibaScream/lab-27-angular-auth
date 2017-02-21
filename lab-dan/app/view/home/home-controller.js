'use strict'

require('./home.scss')

module.exports = ['$log', '$location', 'authService', HomeController]

function HomeController ($log, $location, authService) {
  let self = this

  authService.getToken()
  .then(() => {
    $location.url('/home')
  })
  .catch( err => {
    $log.debug(err)
    $location.url('/')
  })

  self.title = 'Welcome to the home page!'

  self.logout = function() {
    authService
      .logout()
      .then(() => {
        $location.url('/')
      })
  }
}
