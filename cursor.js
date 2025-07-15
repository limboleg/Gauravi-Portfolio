// Cursor elements
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
const lerp = (a, b, n) => (1 - n) * a + n * b;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

function animateRing() {
  ringX = lerp(ringX, mouseX, 0.2);
  ringY = lerp(ringY, mouseY, 0.2);
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.addEventListener("mousedown", () => {
  dot.classList.add("click");
  ring.classList.add("click");
});
document.addEventListener("mouseup", () => {
  dot.classList.remove("click");
  ring.classList.remove("click");
});

document.querySelectorAll('a, .project-card, .title-link').forEach(el => {
  el.addEventListener("mouseenter", () => ring.classList.add("hover"));
  el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
});
