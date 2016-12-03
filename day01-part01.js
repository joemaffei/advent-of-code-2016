// Advent of Code 2016 - Day 1, Part 1


var modulo = function(a, b) {
  return ((a % b) + b) % b;
}

var instructions = "L4, L1, R4, R1, R1, L3, R5, L5, L2, L3, R2, R1, L4, R5, R4, L2, R1, R3, L5, R1, L3, L2, R5, L4, L5, R1, R2, L1, R5, L3, R2, R2, L1, R5, R2, L1, L1, R2, L1, R1, L2, L2, R4, R3, R2, L3, L188, L3, R2, R54, R1, R1, L2, L4, L3, L2, R3, L1, L1, R3, R5, L1, R5, L1, L1, R2, R4, R4, L5, L4, L1, R2, R4, R5, L2, L3, R5, L5, R1, R5, L2, R4, L2, L1, R4, R3, R4, L4, R3, L4, R78, R2, L3, R188, R2, R3, L2, R2, R3, R1, R5, R1, L1, L1, R4, R2, R1, R5, L1, R4, L4, R2, R5, L2, L5, R4, L3, L2, R1, R1, L5, L4, R1, L5, L1, L5, L1, L4, L3, L5, R4, R5, R2, L5, R5, R5, R4, R2, L1, L2, R3, R5, R5, R5, L2, L1, R4, R3, R1, L4, L2, L3, R2, L3, L5, L2, L2, L1, L2, R5, L2, L2, L3, L1, R1, L4, R2, L4, R3, R5, R3, R4, R1, R5, L3, L5, L5, L3, L2, L1, R3, L4, R3, R2, L1, R3, R1, L2, R4, L3, L3, L3, L1, L2".split(', ');

var movementMultiplier = [
  { x:  0, y:  1 }, // North
  { x:  1, y:  0 }, // East
  { x:  0, y: -1 }, // South
  { x: -1, y:  0 }  // West
];

var parseInstruction = function(origin, instruction) {
  var turn = instruction.substr(0,1);
  var steps = +(instruction.slice(1));
  var newDirection = modulo((turn === 'L') ? origin.direction - 1 : origin.direction + 1, 4);
  return {
    x: origin.x + movementMultiplier[newDirection].x * steps,
    y: origin.y + movementMultiplier[newDirection].y * steps,
    direction: newDirection
  }
}

var initialState = { x: 0, y: 0, direction: 0 };

var finalState = instructions.reduce(parseInstruction, initialState);

var distanceFromOrigin = function(state) {
  return Math.abs(state.x) + Math.abs(state.y);
}

console.log(distanceFromOrigin(finalState)); // 279
