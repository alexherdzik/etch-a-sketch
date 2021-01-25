createGrid(16);

const clearBtn = document.querySelector('#clear-btn');

clearBtn.addEventListener('click', () => {
  const gridSize = prompt('New grid size', 16);
  clearGrid();
  createGrid(gridSize);
});

function createGrid(x) {
  const gridContainer = document.querySelector('#grid-container');
  gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      const gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      
      gridSquare.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
      });
    
      gridContainer.appendChild(gridSquare);
    }
  }
}

function clearGrid() {
  const gridContainer = document.querySelector('#grid-container');

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}