/*Searchform*/
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/*  shoppingCart*/
let  shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}










/*  Login form*/
let    LoginForm  = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    LoginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

/* Hamburger Menu*/
let    navbar  = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
}

/*Scroll */
Window.onscroll() = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
    navbar.classList.remove('active');
}

 

/*----Vanilla js---*/
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
});

 
 