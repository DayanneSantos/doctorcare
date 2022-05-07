window.addEventListener('scroll', onScroll)

// GERENCIAR OS SCROLLS DA PÁGINA
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // LINHA ALVO
  const targetLine = scrollY + innerHeight / 2

  // VERIFICAR SE A SEçÃO PASSOU DA LINHA
  // QUAIS DADOS VOU PRECISAR?

  // O TOPO DA SEÇÃO
  const sectionTop = section.offsetTop

  // ALTURA DA SEÇÃO
  const sectionHeight = section.offsetHeight

  // O TOPO DA SEÇÃO CHEGOU OU ULTRAPASSOU A LINHA ALVO
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // VERIFICAR SE A BASE ESTÁ ABAIXO DA LINHA ALVO
  // QUAIS DADOS VOU PRECISAR?

  // A SEÇÃO TERMINA ONDE?
  const sectionEndsAt = sectionTop + sectionHeight

  // O FINAL DA SEÇÃO PASSOU DA LINHA ALVO
  const sectionEndReachOrPassedTargetline = sectionEndsAt <= targetLine


  // LIMITES DA SEÇÃO
  const sectionBoundaries = 
  sectionTopReachOrPassedTargetline &&
  !sectionEndReachOrPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

// MOSTRAR O NAVIGATION AO FAZER SCROLL NA PÁGINA
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

// MOSTRAR O BOTÃO BACK TO TOP AO FAZER SCROLL
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);