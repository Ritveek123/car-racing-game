// all game constants
const width = 400;
const height = 400;
const tick = 90;
const vel = 12;

let pX = 160;
let pY = 340;
let eX = 240;
let eY = 8;
let score = 0;

let color = new Color();
let random = new Random();
let canvas = createCanvas("win", width, height, body);
// let road = createRect("road", 200, 400, 100, 8, canvas, color.black());
let road = loadImage("road", "src/assets/img/road.png", 100, 8, 200, 400, canvas);
let player = new Player(pX, pY, 40, 60, vel, color, canvas);
let enemy = new Enemy(eX, eY, 40, 60, 8, color, canvas, random);
let stext = addText("score", "Score: " + score, 8, 8, canvas);
setTextColor(stext, color.white());

function upadate()
{
    //TODO: run in a loop
    score = enemy.score;
    setText("score", "Score: "+ score);
    player.update();
    enemy.update();
    if (player.isTouching(enemy))
    {
        alert("gameover");
        enemy.x = 8;
        window.location.reload(true);
    }
}

setBackground(canvas, color.green());
loop(upadate, tick);