const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
    
}
function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == "") {
        parent.classList.remove ('focus');
    }
    
}
inputs.forEach(input =>{
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);

});
const login = document.querySelector('.login-container');
const image = document.querySelector('.img');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(login, 2, {left: -150, opacity: 0, ease: "power2.out"}, 0.3)
    .from(image, 2, {transform: "scale(0)", ease: "power2.out"}, '-=2')

    TL.play();
})
