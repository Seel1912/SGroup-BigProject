const navbarTab = document.getElementById("navbar__action--tab")
const bodyImg1 = document.getElementById("body__img1")
const bodyImg2 = document.getElementById("body__img2")
const btn1 = document.getElementById("button1")
const btn2 = document.getElementById("button2")
const navbar = document.getElementById("navbar__act")
function hideTab() {
    navbarTab.style.display = 'none';
}
function showTab() {
    navbarTab.style.display = 'block';
}
function showImg1() {
    bodyImg2.style.display = "none"
    bodyImg1.style.display = "inline-block"
    btn1.style.opacity = "100%";
    btn2.style.opacity = "40%"
}
function showImg2() {
    bodyImg1.style.display = "none"
    bodyImg2.style.display = "inline-block"
    btn2.style.opacity = "100%";
    btn1.style.opacity = "40%"
}
function scrollNavbar() {
    let scrollY = window.scrollY
    if (scrollY > 0) {
        navbar.style.backgroundColor = "#ffffff"
        navbar.style.boxShadow = "0 8px 25px 0 rgb(0 0 0 / 4%)"
    } if (scrollY == 0) {
        navbar.style.backgroundColor = "#ECF6FA"
        navbar.style.boxShadow = "none"
    }
}
window.onscroll = scrollNavbar;