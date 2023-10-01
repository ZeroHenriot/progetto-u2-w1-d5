// const navBar = document.getElementById('nav')
const navBar = document.querySelector('header')
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

const mS = function () {
  const invisibleMS = document.querySelectorAll("svg > g > g > g[opacity='0']")
  const visibleMS = document.querySelectorAll("svg > g > g > g[opacity='1']")

  let randomizer = Math.floor(Math.random() * invisibleMS.length)
  invisibleMS[randomizer].setAttribute('opacity', '1')

  randomizer = Math.floor(Math.random() * visibleMS.length)
  visibleMS[randomizer].setAttribute('opacity', '0')
}

setInterval(mS, 200)
