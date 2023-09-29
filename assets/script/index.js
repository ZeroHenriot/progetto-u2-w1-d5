const navBar = document.getElementById('nav')
const getStarted = document.getElementById('getStarted')

window.onscroll = () => {
  if (document.documentElement.scrollTop >= 250) {
    navBar.classList.add('whitenav')
    getStarted.classList.remove('blackstart')
    getStarted.classList.add('greenstart')
  } else {
    navBar.classList.remove('whitenav')
    getStarted.classList.add('blackstart')
    getStarted.classList.remove('greenstart')
  }
}
