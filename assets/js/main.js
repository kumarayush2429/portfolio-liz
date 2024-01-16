/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'),
navToggle= document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');

/*--------=====MENU SHOW =============*/
if(navToggle){
  navToggle.addEventListener('click',() =>{
    navMenu.classList.add('show-menu')
  })
}

/*----=====MENU HIDDEN=====--------*/
if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
  const header = document.getElementById('header')

  this.scrollY >= 50? header.classList.add('bg-header')
                    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user previously chose a topic
if (selectedTheme){
  // if the valiadtion is fulfilled , we ask what the issue was to know if we actiavted or dead 
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate/ deactiavted the theme maunally with the button
themeButton.addEventListener('click',() =>{
  // Add or remove the dark/icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // we save the theme And the curent icon that the user chose
  localStorage.setItem('selected-Theme',getCurrentTheme())
  localStorage.setItem('selected-Theme',getCurrentIcon())
})
