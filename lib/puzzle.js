// todo
const button = document.querySelector('#show-hint');

button.addEventListener('click', (event) => {
  const hint = document.querySelector('.hint');
  hint.classList.add('active');
});

const winCondition = () => {
  // const tilesOrder = Array.from(document.querySelectorAll('td')).map(e => Number.parseInt(e.innerHTML, 10));
  // if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
  //   alert("You win!");
  // }
  const winArray = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",""];
  let actualArray = [];
  document.querySelectorAll('td').forEach((tile) => {
    actualArray.push(tile.innerText)
  })
  console.log(actualArray);
  console.log(winArray);
  return JSON.stringify(actualArray) === JSON.stringify(winArray);
}

const canMove = (tile) => {
  // get the column index and row index for the tile
  const tileCI = tile.cellIndex;
  const tileRI = tile.parentElement.rowIndex;
  // get column index and row index for the EMPTY tile
  const empty = document.querySelector('.empty');
  const emptyCI = empty.cellIndex;
  const emptyRI = empty.parentElement.rowIndex;

  return (tileCI == emptyCI && Math.abs(tileRI - emptyRI) == 1) ||
         (emptyRI == tileRI && Math.abs(tileCI - emptyCI) == 1);
}

// 1 - Select the tiles
const tiles = document.querySelectorAll('td');
// 2 - add event listener to EACH tile
tiles.forEach((tile) => {
  // 3 - Listening/triggering the click event
  tile.addEventListener('click', (event) => {
    // 4 - Check to see if the tile has an empty neighbor
    if (canMove(tile)) {
      // 5 - If there is an empty tile -> swap tile positions
      const empty = document.querySelector('.empty');
      empty.innerText = tile.innerText
      tile.innerText = '';
      tile.classList.add('empty');
      empty.classList.remove('empty');
    }
    console.log(winCondition());
  })
})

// 6 - Check to see if the player won!

