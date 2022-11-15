// I'm gonna use some javascript on the menu for small screens!
document.getElementById("menu").addEventListener("click", (e) => {
  e.target.nextElementSibling.classList.toggle("translate-x-full");
  e.target.nextElementSibling.classList.add("min-w-full");
  e.target.nextElementSibling.classList.add("ease-out");
});
