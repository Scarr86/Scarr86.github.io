$(function () {




});

let $burgerNav = document.querySelector('.mobile-nav__burger');
let $sidenav = document.querySelector('.sidenav');
let $burgerSidenav = document.querySelector('.sidenav__burger');
let $sidenavBack = document.querySelector('.sidenav-back');

console.log($burgerNav, $sidenav, $burgerSidenav);

// open
$burgerNav.addEventListener("click", (ev) => {
    console.log(ev)
    document.body.style.overflow = "hidden"
    $sidenav.classList.add('open');
    $sidenavBack.classList.add('open')
})


//close
$burgerSidenav.addEventListener("click", (ev) => {
    console.log(ev)
    document.body.style.overflow = "auto"
    document.body.style.overflowX = "hidden"
    $sidenav.classList.remove('open');
   $sidenavBack.classList.remove('open')
})