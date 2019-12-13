let canvas = document.getElementById("c1"); // Получаем canvas 
let ctx = canvas.getContext('2d'); // отрисовка в 2D


// УРОК 1

// ctx.fillStyle = 'red'; // Цвет заливки
// ctx.fillRect(100, 50, 150, 75); // Отрисовка по координатам x,y,w,h
// ctx.fillStyle = 'green';
// ctx.fillRect(150, 100, 100, 50);
// ctx.clearRect(0, 0, 400, 200); // стирание по координатам

// ctx.rect(50, 50, 100, 100); // прямоугольник 
// ctx.strokeStyle = 'yellow'; // цвет линии
// ctx.lineWidth = '5'; // толщина линии 
// ctx.stroke(); // начать рисовать

//УРОК 2

// ctx.moveTo(100, 50); // Начало линии
// ctx.lineTo(150, 150); // Конец линии
// ctx.strokeStyle = 'green';
// ctx.lineWidth = '5'; // Ширина линии
// ctx.moveTo(200, 50);
// ctx.lineTo(300, 50);
// ctx.stroke(); 
// stx.closePath(); // замыкание фигуры
// ctx.beginPath(); // Отделение 
// ctx.lineCap = 'round'; // square, butt. Для изменения конца координат

//УРОК 3

// let myColor = 'red';
// document.getElementById('color').oninput = function() {
//     myColor = this.value;
// };

//     canvas.onmousedown = function(event) {
//         canvas.onmousemove = function(event) {
//             let x = event.offsetX;
//             let y = event.offsetY;
//             ctx.fillRect(x-5, y-5, 20, 20);
//             ctx.fillStyle = myColor;
//             ctx.fill();
//     };
//     canvas.onmouseup = function() {
//         canvas.onmousemove = null;
//     };
// };

//УРОК 4




//УРОК 7
//START RESTART RESET
document.getElementById('start').onclick = function() {
    spiro();
    
};

document.getElementById('restart').onclick = function() {
    restart();
    
};

document.getElementById('reset').onclick = function() {
    reset();
    
};

// coordinates

let R = 1;
document.getElementById('R').oninput = function() {
    R = this.value;
};
let r = 1;
document.getElementById('r').oninput = function() {
    r = this.value;
};
let d = 1;
document.getElementById('d').oninput = function() {
    d = this.value;
};
let teta = 0;
let timer;

let myColor = 'red';
    document.getElementById('color').oninput = function() {
    myColor = this.value;
};

//Drawing canvas

function spiro() {
    let x = (R-r)*Math.cos(teta) + d*Math.cos( (R-r)*teta/r );
    let y = (R-r)*Math.sin(teta) - d*Math.sin( (R-r)*teta/r );
    teta = teta + 0.1;
    ctx.fillRect(300+x, 300+y, 4, 4);
    timer = setTimeout(spiro, 50);
    ctx.fillStyle = myColor;
    ctx.fill();
    clearTimeout(timer);
}
    

//Function reset

function reset() {
    document.getElementById('R').value = 0;
    document.getElementById('r').value = 0;
    document.getElementById('d').value = 0;
    ctx.clearRect(0, 0, 100000, 100000);
    clearTimeout(timer);
}

//Function restart

function restart() {
    ctx.clearRect(0, 0, 100000, 100000);
    clearTimeout(timer);
    spiro();
}







