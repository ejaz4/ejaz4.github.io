// var old = {};

// const header = document.getElementsByClassName("header")[0];
// const headerHeight = header.offsetHeight;

// setInterval(() => {
//     if (old["scrollY"] != window.scrollY) {
//         old["scrollY"] = window.scrollY;
//         const laBox = document.getElementsByClassName("la-box")[0];
//         const name = document.getElementsByClassName("name")[0];

//         if (window.scrollY > 0 && window.scrollY < 200) {
//             laBox.setAttribute("style", `opacity: ${1 - (window.scrollY/100/2)};`);
//             header.setAttribute("style", `margin-top: ${window.scrollY}px; height: ${headerHeight - window.scrollY}px;`)
//         }

//         if (window.scrollY < 1) {
//             laBox.removeAttribute("style");
//             header.removeAttribute("style");
//         }

//         if (window.scrollY > 200) {
//             laBox.setAttribute("style", `opacity: 0;`);
//         }
//     }
// }, 10);