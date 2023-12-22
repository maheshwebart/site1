// window.onload = function() {
    
    let ele = document.getElementsByClassName("bred")[0];


ele.addEventListener('click', showMenu);

function showMenu() {
    // alert("clicked");
       document.getElementsByClassName("nav-menu")[0].classList.toggle("dis");
}

// }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    
    }
    
    });
    
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));