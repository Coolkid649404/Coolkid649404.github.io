// Show warning, then fade
setTimeout(() => {
  document.getElementById('warning').style.opacity = 0;
}, 3000);

setTimeout(() => {
  document.getElementById('warning').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}, 4000);

document.getElementById('partyButton').addEventListener('click', () => {
  document.getElementById('partyButton').style.display = 'none';
  document.getElementById('partyText').style.display = 'block';

  // Flash background colors
  setInterval(() => {
    document.body.style.backgroundColor =
      'rgb(' +
      Math.floor(Math.random() * 256) + ',' +
      Math.floor(Math.random() * 256) + ',' +
      Math.floor(Math.random() * 256) + ')';
  }, 5);

  // Play dubstep
  const dubstep = document.getElementById('dubstep');
  dubstep.play().catch((e) => {
    console.error("Audio play failed:", e);
    alert("Audio couldn't play. Please try reloading the page and clicking the button again.");
  });

  // Launch confetti for 1.5 seconds
  const duration = 1500;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 8,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 8,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});
