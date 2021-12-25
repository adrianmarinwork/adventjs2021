export default function canMouseEat(direction, game) {

  for(let i = 0; i<game.length; i++){
    for(let j = 0; j<game[i].length; j++){
      if(game[i][j] === 'm'){
        switch(direction){
          case 'up':
            if(i - 1 > - 1) return game[i-1][j] === '*';
            break;
          case 'down':
            if(i + 1 < game.length) return game[i+1][j] === '*';
            break;
          case 'right':
            if(j + 1 < game[i].length) return game[i][j+1] === '*';
            break;
          case 'left':
            if(j - 1 > - 1) return game[i][j-1] === '*';
            break;
        }
      }
    }
  }

  return false;
}
