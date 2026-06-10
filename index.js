const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link a')

function setMobileMenuOpen(isOpen) {
  if (!hamMenuBtn || !smallMenu || !headerHamMenuBtn || !headerHamMenuCloseBtn) {
    return
  }

  smallMenu.classList.toggle('header__sm-menu--active', isOpen)
  smallMenu.hidden = !isOpen
  hamMenuBtn.setAttribute('aria-expanded', String(isOpen))
  hamMenuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu')
  headerHamMenuBtn.classList.toggle('d-none', isOpen)
  headerHamMenuCloseBtn.classList.toggle('d-none', !isOpen)
}

if (hamMenuBtn && smallMenu) {
  setMobileMenuOpen(false)

  if (hamMenuBtn.tagName !== 'BUTTON') {
    hamMenuBtn.setAttribute('role', 'button')
    hamMenuBtn.setAttribute('tabindex', '0')
  }

  hamMenuBtn.addEventListener('click', () => {
    setMobileMenuOpen(!smallMenu.classList.contains('header__sm-menu--active'))
  })

  hamMenuBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setMobileMenuOpen(!smallMenu.classList.contains('header__sm-menu--active'))
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMobileMenuOpen(false)
      hamMenuBtn.focus()
    }
  })
}

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    setMobileMenuOpen(false)
  })
}

const headerLogoContainer = document.querySelector('.header__logo-container')

if (headerLogoContainer && headerLogoContainer.tagName !== 'A') {
  headerLogoContainer.setAttribute('role', 'link')
  headerLogoContainer.setAttribute('tabindex', '0')
  headerLogoContainer.addEventListener('click', () => {
    location.href = 'index.html'
  })
  headerLogoContainer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      location.href = 'index.html'
    }
  })
}
