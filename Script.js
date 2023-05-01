const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const loginLogout = document.getElementsByClassName('login-logout')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active'),
        loginLogout.classList.toggle('active')
})
