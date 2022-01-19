// button
const menuButton = document.querySelector('.menuButton')
const searchButton = document.querySelector('.searchIcon')
const searchInput = document.querySelector('#search')
// objetos a serem modificados
const sidebar = document.querySelector('.sidebar')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const menuName1 = document.querySelector('.menuName1')
const menuName2 = document.querySelector('.menuName2')
const menuName3 = document.querySelector('.menuName3')
const menuName4 = document.querySelector('.menuName4')
const menuName5 = document.querySelector('.menuName5')
const logo = document.querySelector('.logo')
const userInfo = document.querySelector('.userInfo')

menuButton.addEventListener('click', menuToggle)

searchButton.addEventListener('click', searchToggle)

searchInput.addEventListener('click', searchToggle)

function menuToggle() {
  const itsActive = sidebar.getAttribute('id') === 'menuSlim'
  if (itsActive) {
    menuFat()
  } else if (!itsActive) {
    menuSlim()
  }
}

function searchToggle() {
  const itsSlim = sidebar.getAttribute('id') === 'menuSlim'
  if (itsSlim) {
    menuFat()
  }
}

function menuSlim() {
  sidebar.setAttribute('id', 'menuSlim')
  header.setAttribute('id', 'headerSlim')
  footer.setAttribute('id', 'footerSlim')
  menuName1.setAttribute('id', 'nameSlim')
  menuName2.setAttribute('id', 'nameSlim')
  menuName3.setAttribute('id', 'nameSlim')
  menuName4.setAttribute('id', 'nameSlim')
  menuName5.setAttribute('id', 'nameSlim')
  logo.setAttribute('id', 'logoSlim')
  userInfo.setAttribute('id', 'userInfoSlim')
}
function menuFat() {
  sidebar.removeAttribute('id', 'menuSlim')
  header.removeAttribute('id', 'headerSlim')
  footer.removeAttribute('id', 'footerSlim')
  menuName1.removeAttribute('id', 'nameSlim')
  menuName2.removeAttribute('id', 'nameSlim')
  menuName3.removeAttribute('id', 'nameSlim')
  menuName4.removeAttribute('id', 'nameSlim')
  menuName5.removeAttribute('id', 'nameSlim')
  logo.removeAttribute('id', 'logoSlim')
  userInfo.removeAttribute('id', 'userInfoSlim')
}
