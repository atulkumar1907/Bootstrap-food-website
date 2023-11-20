

// active navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on')
    }
    else{
        nav.classList.remove('scroll-on')
    }
}

// nav hide

let navbar = document.querySelectorAll('.nav-link');
let collapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach((a) => {
    a.addEventListener('click', () => {
        collapse.classList.remove('show')
    })
})


// counter design

document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end- start,  
        increment = end >start ? 1: -1;
        step = Math.abs(Math.floor(duration/range)), 
        timer =  setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step)
        console.log(current)
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5287, 3500);
    counter("count3", 0, 1487, 3000);
    counter("count4", 0, 2287, 3900);
})