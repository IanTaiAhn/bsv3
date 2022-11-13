// I'm gonna use some javascript on the menu for small screens!
document.getElementById("menu").addEventListener("click", (e) => {
  console.log(e.target.nextElementSibling.classList.toggle("hidden"));
  e.target.nextElementSibling.classList.add("text-blue-400");
  //   e.target.nextElementSibling.classList.add("");

  console.log(e.target.nextElementSibling.classList);
});
