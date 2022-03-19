let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;
let thirdY = (window.innerHeight / 3) * 2;

var maxX = window.innerWidth;

let x = centerX;
let y = thirdY;

let image = new Image();

let t = Date.now();
let balloonSpeed = 500;
let dir = 'nth';

document.body.addEventListener("keydown", (e) => {
    // console.log(e.key);
    switch (e.key) {
        case 'ArrowLeft':
            dir = 'left';
            break;

        case 'ArrowRight':
            dir = 'right';
            break;
    
        default:
            dir = '';
            break;
    }
})

document.body.onkeyup = () => { dir = ''; }

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
        var x = e.gamma;

        if (x >  90) { x =  90};
        if (x < -90) { x = -90};

        x += 90;

        if (x < 80) {
            dir = 'left';
        } else if (x > 100) {
            dir = 'right';
        } else {
            dir = '';
        }
    }, false);
}

canvas.ontouchstart = (e) => {
    if (e.targetTouches[0].pageX >= (window.innerWidth / 2) + 10) {
        e.preventDefault();
        dir = 'right';
    } else if (e.targetTouches[0].pageX <= (window.innerWidth / 2) - 10) {
        e.preventDefault();
        dir = 'left';
    }
}

canvas.onmousedown = (e) => {
    if (e.screenX >= (window.innerWidth / 2) + 10) {
        e.preventDefault();
        dir = 'right';
    } else if (e.screenX <= (window.innerWidth / 2) - 10) {
        e.preventDefault();
        dir = 'left';
    }
}

canvas.ontouchend = () => {
    dir = '';
}

canvas.onmouseup = () => {
   dir = '';
}

const draw = () => {
    var timePassed = (Date.now() - t) / 1000;
    t = Date.now();

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    image.src = 'assets/balloon.svg';
    context.drawImage(image, x - 50, y, 100, 140);

    if (dir == 'right') {
        if (x+60 < window.innerWidth) {
            x += (balloonSpeed * timePassed);
        }
    } else if (dir == 'left') {
        if (x-60 > 0) {
            x -= (balloonSpeed * timePassed)
        }
    }

    window.requestAnimationFrame(draw);
}

window.addEventListener('resize', () => {resizeCanvas(draw)}, false);
resizeCanvas(draw);

function resizeCanvas(draw) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}