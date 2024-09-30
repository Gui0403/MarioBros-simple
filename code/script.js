const mario = document.querySelector(".mario");
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const menu = document.querySelector('.menu')


const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump')
    },600);
};

const loop = setInterval(() =>{

    const marioPosition =  +window.getComputedStyle(mario).bottom.replace('px', '  ');
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;


    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.src = '../imgs/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'

        menu.innerHTML = 'Game Over';
        
        clearInterval(loop);
    }

},10);
document.addEventListener("keypress", jump);