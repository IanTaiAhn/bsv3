// I'm gonna use some javascript on the menu for small screens!
document.getElementById('menu').addEventListener('click', (e) => {
    console.log(e.target.nextElementSibling.classList.toggle('hidden'));
});

