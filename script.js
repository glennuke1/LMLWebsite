let currentStop = 50; // Initial color stop at 50%
let targetStop = 50; // Target color stop
let isAnimating = false;

function smoothTransition() {
  if (!isAnimating) return;
  
  // Interpolate towards the target value
  currentStop += (targetStop - currentStop) * 0.03;

  // Stop animation when close enough
  if (Math.abs(currentStop - targetStop) < 0.5) {
    currentStop = targetStop;
    isAnimating = false;
  }

  // Apply the gradient
  document.body.style.backgroundImage = `linear-gradient(45deg, rgb(0, 0, 0) ${currentStop}%, rgb(60, 0, 90))`;

  // Continue animating until the transition is complete
  if (isAnimating) {
    requestAnimationFrame(smoothTransition);
  }
}

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = scrollPosition / maxScroll;

  if (scrollPercentage > 0.3) {
    targetStop = 45 - (scrollPercentage * 50);
  } else {
    targetStop = 50;
  }

  // Start animation if not already running
  if (!isAnimating) {
    isAnimating = true;
    requestAnimationFrame(smoothTransition);
  }
});
