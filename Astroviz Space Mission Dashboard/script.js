// Dark Matter Simulation
const canvas = document.getElementById('darkMatterCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 100;
const mouse = { x: null, y: null };

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 1.5;
    this.speedY = (Math.random() - 0.5) * 1.5;
  }

  draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 100 && mouse.x !== null) {
      this.x += dx / 40;
      this.y += dy / 40;
    }

    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// Fetch ISS Location
async function fetchISSLocation() {
  try {
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data = await res.json();
    const issSection = document.getElementById('iss-location');
    issSection.innerHTML = `
      <h2>🌍 ISS Live Location</h2>
      <p>Latitude: ${data.latitude.toFixed(2)}</p>
      <p>Longitude: ${data.longitude.toFixed(2)}</p>
      <p>Altitude: ${data.altitude.toFixed(2)} km</p>
      <p>Velocity: ${data.velocity.toFixed(2)} km/h</p>
    `;
  } catch (err) {
    console.error('ISS fetch error:', err);
  }
}

// Fetch Mars Weather
async function fetchMarsWeather() {
  try {
    const res = await fetch('https://api.maas2.apollorion.com/');
    const data = await res.json();
    const marsSection = document.getElementById('mars-weather');
    marsSection.innerHTML = `
      <h2>🪐 Mars Weather</h2>
      <p>Sol: ${data.sol}</p>
      <p>Temperature: ${data.min_temp}°C to ${data.max_temp}°C</p>
      <p>Pressure: ${data.pressure} Pa</p>
      <p>Season: ${data.season}</p>
      <button onclick="showGraph('mars')">📊 View Graph</button>
    `;
  } catch (err) {
    console.error('Mars weather fetch error:', err);
  }
}

fetchISSLocation();
fetchMarsWeather();
setInterval(fetchISSLocation, 10000);

// Show Graph Modal
function showGraph(type) {
  const modal = document.getElementById("graph-modal");
  modal.style.display = "flex";

  const title = document.getElementById("graph-title");
  const ctx = document.getElementById("popupChart").getContext("2d");

  let chartData = {};

  if (type === 'telemetry') {
    title.textContent = "Satellite Speed Over Time";
    chartData = {
      labels: ["T-4", "T-3", "T-2", "T-1", "Now"],
      datasets: [{
        label: "Speed (km/h)",
        data: [26000, 27000, 28000, 27500, 27000],
        borderColor: "#00eaff",
        backgroundColor: "#00eaff33",
        fill: true,
        tension: 0.4
      }]
    };
  } else if (type === 'mars') {
    title.textContent = "Mars Temperature Comparison";
    chartData = {
      labels: ["Min Temp", "Max Temp"],
      datasets: [{
        label: "°C",
        data: [-65, -10],
        backgroundColor: ['#00eaff88', '#ff638488'],
        borderColor: ['#00eaff', '#ff6384'],
        borderWidth: 1
      }]
    };
  } else if (type === 'asteroids') {
    title.textContent = "Asteroid Velocity Profile";
    chartData = {
      labels: ["2023 AA", "2023 AB", "2023 AC"],
      datasets: [{
        label: "Velocity (km/h)",
        data: [22000, 25000, 28000],
        backgroundColor: "#ffb34788",
        borderColor: "#ffb347",
        borderWidth: 1
      }]
    };
  }

  new Chart(ctx, {
    type: type === 'mars' ? 'bar' : 'line',
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: { display: true }
      }
    }
  });
}

document.getElementById("close-graph").onclick = () => {
  document.getElementById("graph-modal").style.display = "none";
};

window.onload = () => {
  const telemetry = document.getElementById('telemetry');
  const asteriods = document.getElementById('asteroids');

  if (telemetry) {
    telemetry.innerHTML += '<button onclick="showGraph(\'telemetry\')">📊 View Graph</button>';
  }
  if (asteriods) {
    asteriods.innerHTML += '<button onclick="showGraph(\'asteroids\')">📊 View Graph</button>';
  }
};
