const hamburguerActivated = document.getElementById('hamburguerActivated')
const headerHamburguer = document.getElementById('headerHamburguerId')

export function closeButton(){
  headerHamburguer.style.right = '0'
  hamburguerActivated.style.right = '3000px'
  document.documentElement.style.overflow = 'visible'
}

export function OpenButtonHamburguer(){
  hamburguerActivated.style.right = '0'
  headerHamburguer.style.right = '510px' 
  document.documentElement.style.overflow = 'hidden'
  window.scrollTo(0,0)
}