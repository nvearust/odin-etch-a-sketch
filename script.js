const gridContainer = document.getElementById('gridContainer');
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');

  gridItem.addEventListener('mouseenter', () => {
    gridItem.style.backgroundColor = randomColor(); 
  });

  gridContainer.appendChild(gridItem);
}

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
