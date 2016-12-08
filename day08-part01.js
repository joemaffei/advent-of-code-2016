var screen = [0,0,0,0,0,0];

var leftmost = Math.pow(2,50);

var rect = function(x,y) {
  for (var i = 0; i < y; i++) {
    for (var j = 0; j < x; j++) {
      screen[i] += leftmost / Math.pow(2,j);
    }
  }
}

rect(3,2);

screen.map(function(line, i){
  console.log(line.toString(2));
});

// max: 1125899906842623
