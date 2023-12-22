// window.onload = function() {
    
    let ele = document.getElementsByClassName("bred")[0];


ele.addEventListener('click', showMenu);

function showMenu() {
    // alert("clicked");
       document.getElementsByClassName("nav-menu")[0].classList.toggle("dis");
}

// }