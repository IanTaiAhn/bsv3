// I'm gonna use some javascript on the menu for small screens!
let menu = document.getElementById("menu");
// let bool = false;
let bool = true;
document.getElementById('menu').addEventListener('click', (e) => {
    console.log(e.target.nextElementSibling.classList.toggle('hidden'));
});

// console.log(menu);
// menu.style.visibility = "visible";