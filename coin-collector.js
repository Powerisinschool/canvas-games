let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let recW = 100;
let recH = 100;
let x = (window.innerWidth / 2) - (recW / 2);
let y = (window.innerHeight / 2) - (recH / 2);
let coinx = Math.random() * (window.innerWidth-50);
let coiny = Math.random() * (window.innerHeight-50);

let t = Date.now();
let speed = 300;
let dir = 0;
let score = 0;

let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");

document.body.addEventListener("keydown", (e) => {
    // console.log(e.key);
    switch (e.key) {
        case 'ArrowUp':
            dir = 4;
            break;

        case 'ArrowDown':
            dir = 3;
            break;

        case 'ArrowLeft':
            dir = 2;
            break;

        case 'ArrowRight':
            dir = 1;
            break;
    
        default:
            dir = 0;
            break;
    }
})

document.body.onkeyup = () => { dir = 0; }

up.onmousedown = () => { dir = 4; }
down.onmousedown = () => { dir = 3; }
left.onmousedown = () => { dir = 2; }
right.onmousedown = () => { dir = 1; }

up.ontouchstart = () => { dir = 4; }
down.ontouchstart = () => { dir = 3; }
left.ontouchstart = () => { dir = 2; }
right.ontouchstart = () => { dir = 1; }

up.onmouseup = () => { dir = 0; }
down.onmouseup = () => { dir = 0; }
left.onmouseup = () => { dir = 0; }
right.onmouseup = () => { dir = 0; }

up.ontouchend = () => { dir = 0; }
down.ontouchend = () => { dir = 0; }
left.ontouchend = () => { dir = 0; }
right.ontouchend = () => { dir = 0; }

const draw = () => {
    var timePassed = (Date.now() - t) / 1000;
    t = Date.now();
    // var fps = Math.round(1 / timePassed);

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    context.font = '25px Arial';
    context.fillStyle = 'black';
    context.fillText("Coin Collector 😊", 20, 30);
    context.fillText("Score: " + score, (window.innerWidth - 110), 30)

    context.beginPath();
    context.rect(x, y, recW, recH);
    context.fillStyle = "red";
    context.fill();

    context.beginPath();
    // context.rect(coinx, coiny, 50, 50);
    context.arc(coinx + 25, coiny + 25, 25, 0, 2 * Math.PI, true)
    context.fillStyle = '#e3c228';
    context.fill();

    if (dir == 1) {
        if (x+100 < window.innerWidth) {
            x += (speed * timePassed);
        }
    } else if (dir == 2) {
        if (x > 0) {
            x -= (speed * timePassed)
        }
    } else if (dir == 3) {
        if (y+100 < window.innerHeight) {
            y += (speed * timePassed);
        }
    } else if (dir == 4) {
        if (y > 0) {
            y -= (speed * timePassed)
        }
    }

    if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 &&y <= coiny+50) {
        score++;
        coinx = Math.random() * (window.innerWidth-50);
        coiny = Math.random() * (window.innerHeight-120);
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