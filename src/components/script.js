const imgs = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');
let currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide

function changeSlide(n) {
    for (let i = 0; i < imgs.length; i++) { // reset
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
    }
  
    currentImg = (currentImg + 1) % imgs.length; // update the index number

    if (n != undefined) {
        clearInterval(timer);
        timer = setInterval(changeSlide, interval);
        currentImg = n;
    }
  
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}

let timer = setInterval(changeSlide, interval);