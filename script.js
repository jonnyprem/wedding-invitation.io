// Countdown Timer
function updateCountdown() {
  // Set wedding date (June 26, 2026 at 6:00 PM)
  const weddingDate = new Date('2026-02-15T18:00:00').getTime();
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference > 0) {
    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  } else {
    // Wedding day has passed
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '0';
    document.getElementById('minutes').textContent = '0';
    document.getElementById('seconds').textContent = '0';
  }
}

// Update countdown immediately
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);
