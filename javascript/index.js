//#!/usr/bin/node
const cars = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let i = 0;
/*let text = [];
let i = 0;
while (i < cars.length) {
  text += cars[i] + (" ");
  i++;
}
console.log(text)
*/
for (i=0;i<cars.length;i++)
{
  let name = ''
  name += cars[i]
  console.log(name);
}