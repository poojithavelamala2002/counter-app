// script.js - Counter App (vanilla JS)

// DOM references
const display = document.getElementById('countDisplay');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0; // current count

// helper: render the count to DOM and manage UI state
function render() {
  display.textContent = String(count);
  // disable decrement if count is zero
  if (count <= 0) {
    decBtn.setAttribute('aria-disabled', 'true');
    decBtn.disabled = true; // prevents pointer interaction
  } else {
    decBtn.removeAttribute('aria-disabled');
    decBtn.disabled = false;
  }
}

// action functions
function increment() {
  count += 1;
  render();
}

function decrement() {
  if (count <= 0) {
    // safety: never go below zero
    count = 0;
    render();
    return;
  }
  count -= 1;
  render();
}

function resetCounter() {
  count = 0;
  render();
}

// attach event listeners
incBtn.addEventListener('click', increment);
decBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', resetCounter);

// keyboard support: Space or Enter on focused buttons will trigger click automatically
// (native for <button>), but we also allow keyboard shortcuts: ArrowUp = increment, ArrowDown = decrement, r = reset
document.addEventListener('keydown', (e) => {
  if (e.altKey || e.ctrlKey || e.metaKey) return; // ignore combos
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    increment();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    decrement();
  } else if (e.key.toLowerCase() === 'r') {
    // press 'r' to reset
    resetCounter();
  }
});

// initial render
render();
