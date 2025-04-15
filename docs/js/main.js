$(function () {




});

// new WOW().init();

let $burgerNav = document.querySelector('.mobile-nav__burger');
let $sidenav = document.querySelector('.sidenav');
let $burgerSidenav = document.querySelector('.sidenav__burger');
let $sidenavBack = document.querySelector('.sidenav-back');

console.dir($burgerNav, $sidenav, $burgerSidenav);

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


// filter products
$filter = document.querySelectorAll(".products__filter button")
$products = document.querySelectorAll('.card-product')
// $products.forEach(p=> p.style.opacity = 1)
console.log($filter, $products)

$filter.forEach(element => {
    element.addEventListener('click', (ev) => {
        console.log(ev.target.dataset.filter)
        let filter = ev.target.dataset.filter

        $products.forEach(p => {
            p.classList.remove("animate__fadeIn")
            p.style.display = 'none'
        })

        setTimeout(() => {
            if (filter == 'all') {
                $products.forEach(p => {
                    p.classList.add("animate__fadeIn")
                    p.style.display = 'block'
                })
            }
            else {
                $products.forEach(p => {
                    if (p.dataset.category == filter) {
                        p.classList.add("animate__fadeIn")
                        p.style.display = "block";
                    }
                    else {
                        p.classList.remove("animate__fadeIn")
                        p.style.display = 'none'
                    }
                })
            }


        }, 200);

    })

});


// filter products