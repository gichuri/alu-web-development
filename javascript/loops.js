//#!/usr/bin/node

/*let i = 0;
if (isNaN(args[2])) {
  console.log('Missing number of occurrences');
} else {
  for (i = 0; i < Number(args[2]); i++) {
    let name = '';
    name += 'C is fun';
    console.log(name);
  }
}

if (isNaN(Number(args[2]))) {
    console.log('Missing size');
} else {
    for (i = 0; i < num; i++) {
    let row = ''
      for (j = 0; j < num; j++) {
      row+= 'X';
      }
console.log(row+'')
    }
}
*/
const a = parseInt(process.argv[2], 10);
const b = parseint(process.argv[3], 10);
function add(a, b) {
  return (a + b);
}
console.log(add(a, b));