let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let nav_list = document.querySelector(".nav-list");
let menu_open_btn = document.getElementById("menu-open-btn");
let menu_close_btn = document.getElementById("menu-close-btn");
let nav_list_item = document.querySelectorAll(".nav-list-item");

menu_open_btn.addEventListener('click', (e) => {
    e.preventDefault();
    nav_list.style.display = "flex";
    menu_open_btn.style.display = "none";
    menu_close_btn.style.display = "block";
})
menu_close_btn.addEventListener('click', (e) => {
    e.preventDefault();
    nav_list.style.display = "none";
    menu_open_btn.style.display = "block";
    menu_close_btn.style.display = "none";
})
