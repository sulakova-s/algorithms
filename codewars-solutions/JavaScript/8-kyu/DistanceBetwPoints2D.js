class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
/*
  This series of katas will introduce you to basics of doing geometry with computers.
  
  Point objects have attributes x and y.
  Write a function calculating distance between Point a and Point b.
  Input coordinates fit in range −50⩽x,y⩽50. 
  
  Tests compare expected result and actual answer with tolerance of 1e-6.
 */
function distanceBetweenPoints(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Test cases
console.log(distanceBetweenPoints(new Point(    3,    3), new Point(  3,    3))); // 0
console.log(distanceBetweenPoints(new Point(    1,    6), new Point(  4,    2))); // 5
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7))); // 10.728001

