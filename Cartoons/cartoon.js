var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// Stars
for (let i = 0; i < 80; i++) {
  let x = Math.random() * innerWidth;
  let y = Math.random() * 650;

  c.beginPath();
  c.arc(x, y, 2, 0, Math.PI * 2);
  c.fillStyle = "yellow";
  c.fill();
}

// House
c.fillStyle = "#02735E";
c.fillRect(500, 300, 400, 400);

// Roof
c.beginPath();
c.strokeStyle = "#9BF2EA";
c.moveTo(500, 300);
c.lineTo(700, 100);
c.lineTo(900, 300);
c.lineTo(500, 300);
c.fillStyle = "#9BF2EA";
c.stroke();
c.fill();

// Chimney
c.beginPath();
c.strokeStyle = "#260101";
c.moveTo(900, 300);
c.lineTo(900, 100);
c.lineTo(825, 100);
c.lineTo(825, 225);
c.fillStyle = "#41BFB3";
c.stroke();
c.fill();

// Windows
c.fillStyle = "#41BFB3";
c.fillRect(550, 400, 100, 100);
c.fillRect(750, 400, 100, 100);

// Door
c.fillStyle = "#012E40";
c.fillRect(650, 550, 100, 150);

// Moon
c.beginPath();
c.arc(80, 80, 60, 0, Math.PI * 2, false);
c.fillStyle = "white";
c.fill();

// Grass
c.fillStyle = "green";
c.fillRect(0, 700, canvas.width, 40);

// Caption Text
c.fillStyle = "white";
c.font = "30px Arial";
c.fillText("What a beautiful night sky!", 1050, 75);

// Fence
c.fillStyle = "yellow";
c.fillRect(0, 690, innerWidth, 10);
for (let x = 10; x < innerWidth; x += 40) {
  c.save();
  c.translate(x, 670);
  c.fillRect(0, 0, 25, 40);
  c.restore();
}
