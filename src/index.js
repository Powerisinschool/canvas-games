import _ from 'lodash';
import './style.css';
import coinCollector from './coin-collector';
import floatGame from './games/float';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, now imported
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
//     return element;
// }
  
// document.body.appendChild(component());

let games = document.body.querySelectorAll('.game');
for (let i = 0; i < games.length; i++) {
    const game = games[i]
    game.onclick = () => {
        selectGame(game.innerText);
    }
}

const gamepad = () => {
    let arrows = document.createElement('div');
    arrows.align = 'center';
    let br = document.createElement('br');

    let upButton = document.createElement('button');
    upButton.id = 'up';
    upButton.innerHTML = '&uarr;';

    let leftButton = document.createElement('button');
    leftButton.id = 'left';
    leftButton.innerHTML = '&larr;';

    let downButton = document.createElement('button');
    downButton.id = 'down';
    downButton.innerHTML = '&darr;';

    let rightButton = document.createElement('button');
    rightButton.id = 'right';
    rightButton.innerHTML = '&rarr;';

    arrows.append(...[upButton, br, leftButton, downButton, rightButton]);
    return arrows;
}

const prepCoinCollector = (container) => {
    let canvas = document.createElement('canvas');
    canvas.setAttribute('width', '600');
    canvas.setAttribute('height', '400');
    canvas.id = 'canvas';
    container.appendChild(canvas);

    container.appendChild(gamepad());
}

const prepFloat = (container) => {
    let canvas = document.createElement('canvas');
    canvas.setAttribute('width', '600');
    canvas.setAttribute('height', '400');
    canvas.id = 'canvas';
    container.appendChild(canvas);
}

const selectGame = (game) => {
    document.body.innerHTML = 'Loading...<br />Please Wait.';
    let container = document.createElement('div');
    document.body.innerHTML = '';
    document.body.appendChild(container);
    switch (game.toLowerCase()) {
        case 'coin collector':
            prepCoinCollector(container);
            coinCollector();
            break;

        case 'float':
            prepFloat(container);
            floatGame();
            break;

        default:
            document.body.innerHTML = '<h1>Error loading the selected game.</h1><br />';
            let reloadBtn = document.createElement('button');
            reloadBtn.textContent = 'reload';
            reloadBtn.onclick = () => {window.location.reload()};
            document.body.appendChild(reloadBtn);
            alert('Error Loading Game!');
            break;
    }
    document.title = game;
}