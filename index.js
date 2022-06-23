// let serviceDropdown = document.querySelector('.services');
// let dropdown = document.querySelector('.dropdown')

// serviceDropdown.addEventListener('click', function () {
//     if (serviceDropdown.click) {
//         dropdown.style.display = "block"
        
//     } else {
//         dropdown.style.display ="none"
//     }
//     // dropdown.classList.toggle('dropdown')
// })


// // Hambuger Section

// let hambuger = document.querySelector('.hamburger')
// let navMenu = document.querySelector('.menu')

// hambuger.addEventListener('click', function () {
//    navMenu.classList.toggle('show-link')
// })

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

