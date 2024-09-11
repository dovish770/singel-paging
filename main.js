const login = document.querySelector(`#login`);
const logoutBTN = document.getElementById(`logout-btn`);
const loginPage = document.querySelector(`.login-conteiner`);
const homePage =  document.querySelector(`.home-conteiner`);
const darkAndLightMode = document.getElementById(`dark-light-mode-btn`);
const body = document.body;


function toggleLoginHome(event) {
    event.preventDefault()
    loginPage.classList.toggle('hidden');
    homePage.classList.toggle('hidden');
}

function lightDark(){
    body.classList.toggle(`dark`)
}

login.addEventListener(`click`, (e) => toggleLoginHome(e));
logoutBTN.addEventListener(`click`, (e) => toggleLoginHome(e));
darkAndLightMode.addEventListener(`click`, lightDark);