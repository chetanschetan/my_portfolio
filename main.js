// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
// var btn = document.getElementById("btn");
// var nav = document.getElementById("menu");
// if (btn && nav) {
//     btn.addEventListener("click", function () {
//         nav.classList.toggle("flex");
//         nav.classList.toggle("hidden");
//     });
// }


import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS Animation library
AOS.init();

// Mobile Menu Toggle Logic
var btn = document.getElementById("btn");
var nav = document.getElementById("menu");

if (btn && nav) {
    btn.addEventListener("click", function () {
        nav.classList.toggle("flex");
        nav.classList.toggle("hidden");
    });
}