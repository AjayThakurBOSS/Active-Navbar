// const activePage = window.location;
/* 
To get directly path location
const activePage = window.location.pathname;
*/
const activePage = window.location.pathname;

console.log(activePage);

// now we are going to select nav links

const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  console.log(link.href); // it will give all the nav link locations
  if (link.href.includes(`${activePage}`)) {
    console.log(`${activePage}`);
    // link.classList.add("active");
    link.style.backgroundColor = "green";
  }
});
