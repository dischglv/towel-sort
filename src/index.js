
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || (matrix.length == 0)) return [];

  return matrix.reduce((pM, cM, i) => (i%2 == 0) ? pM.concat(cM) : pM.concat(cM.reverse()));
}


