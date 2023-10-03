// const slideTrack = document.getElementById('slideTrack');
// const slideWidth = slideTrack.clientWidth;
// const numSlides = document.querySelectorAll('.slide').length;
// const scrollSpeed = 0.5; // Adjust the scroll speed as needed (higher values for slower scroll)
// const pauseTime = 2000; // 2 seconds (2000 milliseconds)

// // Clone the slides for infinite scroll
// slideTrack.innerHTML += slideTrack.innerHTML;

// let scrollPosition = 0;

// function startScroll() {
//   setInterval(() => {
//     scrollPosition += slideWidth * scrollSpeed;
    
//     if (scrollPosition >= slideWidth * numSlides) {
//       scrollPosition = 0;
//     }

//     slideTrack.scrollTo({
//       left: scrollPosition,
//       behavior: 'smooth', // for smooth scrolling
//     });
//   }, pauseTime);
// }

// startScroll();

let liEls = document.querySelectorAll('ul li');
let index = 0;
window.show = function(increase) {
index = index + increase;
index = Math.min(Math.max(index,0), liEls.length-1);
liEls[index].scrollIntoView({behavior: 'smooth'});
}