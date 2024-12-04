const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const bg = document.querySelector("img#bg");
const col = document.querySelector("img#col");

const bird = {
    img: document.querySelector("img#bird"),
    x: 50,
    y: canvas.height / 2 - 20,
    w: 50,
    h: 35,
    vy: 0,
    ay: 500
}

const SPACE_BETWEEN_COLUMNS = 100
let columns = [];

function newColumns() {
    const h = Math.floor(Math.random() * ((canvas.height/2)-10+1)) + 10; 
    
    columns = [
        {
            x: canvas.width,
            y: 0,
            w: 35,
            h: h
        },
        {
            x: canvas.width,
            y: h + SPACE_BETWEEN_COLUMNS,
            w: 35,
            h: canvas.height - (h + SPACE_BETWEEN_COLUMNS)
        }
    ]
}

let lastUpdateTime = performance.now();

function gameLogic() {
    const now = performance.now();
    const dt = (now - lastUpdateTime) / 700;
    lastUpdateTime = now;

    update(dt);
    draw();
    requestAnimationFrame(gameLogic);
}

let points = 0;

function update(dt) {
    bird.vy += bird.ay * dt;
    bird.y += bird.vy * dt;
    // if (bird.y > canvas.height) {
    //     bird.y -= bird.vy * dt;
    // }
    columns.forEach(e => {
        e.x -= 3;
        if(isColliding(bird, e)) alert('THE BIRD DIED 😭😭😭');
    })
    if(columns[0].x < 10) {
        newColumns();
        points += 1;
    }
}

function draw() {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bird.img, bird.x, bird.y, bird.w, bird.h);
    columns.forEach(c => {
        ctx.drawImage(col, c.x, c.y, c.w, c.h);
    })
    ctx.font = '20px Arial';
    ctx.fillText(`Points: ${points}`, 10, 15);
}

window.addEventListener('keypress', (e) => {
    // e.preventDefault();
    if (e.code == "Space") {
        bird.vy = -200;
    }
}) 

function isColliding(b, c) {
    return !(
        c.y + c.h < b.y ||
        b.x + b.w < c.x ||
        b.y + b.h < c.y ||
        c.x + c.w < b.x
    )
}

newColumns();
gameLogic();