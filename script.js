'USE STRICT'
//! SLIDER
const sliderWrapper = document.querySelector('.slider-wrapper')
const slide = document.querySelector('.slider-wrapper .slide')
const slideImg = document.querySelector('.slider-wrapper .slide div img')


//! LANGUAGE

const languageBtn = document.querySelector('.getir .navbar ul .language-btn');

const language = document.querySelector('#language');
const popUp = document.querySelector('#language .pop-up');

const languageExit = document.querySelector('#language .pop-up header .exit');

languageBtn.addEventListener( 'click' , function () {
    language.classList.remove('hidden');
    language.classList.add('active');
});

languageExit.addEventListener('click' , () =>{
    language.classList.add('hidden');
})

//! LOG-İN
const logInBtn = document.querySelector('.getir .navbar ul .log-in-btn');
const logIn = document.querySelector('#log-in');
const logInExit = document.querySelector('#log-in .tel-container header .exit');
const logInToSignUp = document.querySelector('#log-in .tel-container .open-signUp')

logInBtn.addEventListener( 'click' , function () {
    logIn.classList.remove('hidden');
    logIn.classList.add('active');
});

logInExit.addEventListener('click' , () =>{
    logIn.classList.add('hidden');
})

logInToSignUp.addEventListener('click' , () =>{
    
    signUp.classList.remove('hidden');
    signUp.classList.add('active');
    logIn.classList.add('hidden');
})

//! SİGN-UP

const signUpBtn = document.querySelector('.getir .navbar ul .sign-up-btn');
const signUp = document.querySelector('#sign-up');
const signUpExit = document.querySelector('#sign-up .pop-up header .exit');
const signUpToLogIn = document.querySelector('#sign-up .pop-up footer div span');


signUpBtn.addEventListener( 'click' , function () {
    signUp.classList.remove('hidden');
    signUp.classList.add('active');
});

signUpExit.addEventListener('click' , () =>{
    signUp.classList.add('hidden');
})

signUpToLogIn.addEventListener('click' , () =>{
    
    logIn.classList.remove('hidden');
    logIn.classList.add('active');
    signUp.classList.add('hidden');
})

