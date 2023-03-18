// Select the navigation element
const nav = document.querySelector('nav');
const sidebar = document.querySelector('#sidebar');
const navbtn = document.querySelector('#navbtn');
const menu = document.querySelector('#menu');
const jobOne = document.querySelector("#job-one")
const jobTwo = document.querySelector("#job-two")
const jobThree = document.querySelector("#job-three")
const btnOne = document.querySelector(".btn-one")
const btnTwo = document.querySelector(".btn-two")
const btnThree = document.querySelector(".btn-three")


jobTwo.style.display = "none"
jobThree.style.display = "none"
     btnOne.classList.add("active");


btnOne.addEventListener("click", () => {
     jobOne.style.display = "block"
     jobTwo.style.display = "none"
     jobThree.style.display = "none"
     btnOne.classList.add("active");
     btnTwo.classList.remove("active");
     btnThree.classList.remove("active");

})
btnTwo.addEventListener("click", () => {
     jobOne.style.display = "none"
     jobTwo.style.display = "block"
     jobThree.style.display = "none"
      btnOne.classList.remove("active");
     btnTwo.classList.add("active");
     btnThree.classList.remove("active");


})
btnThree.addEventListener("click", () => {
     jobOne.style.display = "none"
     jobTwo.style.display = "none"
     jobThree.style.display = "block"
       btnOne.classList.remove("active");
     btnTwo.classList.remove("active");
     btnThree.classList.add("active");
 

})
// Add an onscroll event listener to the window object]

menu.addEventListener("click", () => sidebar.style.display = "flex");
navbtn.addEventListener("click", () => sidebar.style.display = "none");



window.addEventListener('scroll', () => {
     // Get the current scroll position
     const scrollPosition = window.scrollY;

     // Check if the scroll position is greater than a certain value (e.g. 100)
     if (scrollPosition > 100) {
          // If the scroll position is greater than 100, change the background color of the navigation element
          nav.style.backgroundColor = '#112240';
     } else {
          // Otherwise, reset the background color of the navigation element
          nav.style.backgroundColor = 'transparent';
     }
});
// shadow-md bg-[#112240]