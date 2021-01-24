const gridContainer = document.querySelector('#grid-container');

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    
    gridSquare.addEventListener('mouseenter', event => {
      event.target.style.backgroundColor = '#000';
    });
    
    gridContainer.appendChild(gridSquare);
  }
}

const clearBtn = document.querySelector('#clear-btn');

clearBtn.addEventListener('click', () => {
  const gridSize = prompt('New grid size', 16);
});