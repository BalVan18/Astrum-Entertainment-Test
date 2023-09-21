// // Импортируем модули с которыми должен взаимодействовать Overlay
// import {visibleModal} from "./modalized";
// import {setCookie} from "./cookies";
// let _OPTIONS = [];

// export function visibleOverlay(visible = 'toggle', options = null) {
//     let overlay = document.querySelector('.js-overlay');
//     if(!overlay) return null;
//     switch (visible) {
//         case 'show':
//             overlay.classList.add('_active');
//             document.body.classList.add('_no-scroll');
//             if(options) _OPTIONS.push(options);
//             break;
//         case 'hide':
//             overlay.classList.remove('_active');
//             document.body.classList.remove('_no-scroll');
//             break;
//         default:
//             overlay.classList.toggle('_active');
//             document.body.classList.toggle('_no-scroll');
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     let overlay = document.querySelector('.js-overlay');
//     overlay.addEventListener('click', ()=> {
//         visibleModal('hide');
//         visibleOverlay('hide');
//         if(_OPTIONS.length !== 0) {
//             _OPTIONS.forEach(item => {
//                 setCookie(item.name, 'true', {secure: true, 'max-age': item.autoplayOffsetTime});
//             })
//         }
//     });
// });
