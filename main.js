const texts = document.querySelectorAll(".text-item");
const container = document.querySelector('.wrapper');
let currentIndex = 0

function showNextText() {
    texts.forEach((item) => {
      item.classList.remove("animation-start");
    });
    
    if (currentIndex == 2) {
        container.classList.add('container-stripped')
    }
    
    if (currentIndex != 6) {
        texts[currentIndex].classList.add("animation-start");
        currentIndex = currentIndex + 1;
        console.log(currentIndex)    
    } 
    else {
        window.location.assign('profile')
    }


    setTimeout(showNextText, 4300);
}

showNextText()