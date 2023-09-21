// import {visibleOverlay} from "../libs/overlay";

// // Управление видимостью мобильного меню
// export function visibleMobileMenu(visible = 'toggle', menu, btn) {
//     if (typeof menu === 'undefined') menu = document.querySelector('.js-mobile-menu');
//     if (typeof btn === 'undefined') btn = document.querySelector('.js-mobile-btn');
//     switch (visible) {
//         case 'show':
//             menu.classList.add('_active');
//             btn.classList.add('_active');
//             document.body.classList.add('_no-scroll');
//             break;
//         case 'hide':
//             menu.classList.remove('_active');
//             btn.classList.remove('_active');
//             document.body.classList.remove('_no-scroll');
//             break;
//         default:
//             menu.classList.toggle('_active');
//             btn.classList.toggle('_active');
//             document.body.classList.toggle('_no-scroll');
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     let mobileMenuBtn = document.querySelector('.js-mobile-btn'),
//         mobileMenu = document.querySelector('.js-mobile-menu'),
//         mobileMenuLinks = mobileMenu.querySelectorAll('a');

//     mobileMenuBtn.addEventListener('click', e => {
//         e.preventDefault();
//         visibleMobileMenu(undefined, mobileMenu, mobileMenuBtn);
//         visibleOverlay();
//     });

//     mobileMenuLinks.forEach(item => {
//         item.addEventListener('click',  ()=> {
//             visibleMobileMenu('hide', mobileMenu);
//             visibleOverlay('hide');
//         });
//     })
// });
