const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var path = window.location.pathname;
var page = path.split("/").pop();

var starCount;

if (page == "credits") {
  starCount = 400
}
else if (page == "changelogs") {
  starCount = 300
}
else if (page == "index") {
  starCount = 200
}

const stars = [];
for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    opacity: Math.random(),
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    if (star.y < canvas.height - 300 || Math.random() < 0.08 || page != "index.html") {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    }
  }
}

drawStars();