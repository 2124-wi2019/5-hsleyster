/* Heather Sleyster
sleyster_a05a.js
INFO 2124
Thoendel
01/19/2020
*/

const toDoList = ['Make Coffee', 'Brush Your Teeth',
'Pack Your Lunch', 'Feed the Dogs'];

console.log(toDoList);

toDoList.unshift('Let Dogs Out');
console.log(toDoList);

toDoList.reverse();
toDoList.sort();
console.log(toDoList);
toDoList.includes('X');

const groceryList = new Array('Milk', 'Bread',
'Orange Juice', 'Eggs', 'Butter', 'Fruit');

console.log(groceryList);

groceryList.shift();
console.log(groceryList);

groceryList.splice(3, 0, 'Bacon');
groceryList.splice(4, 0, 'Coffee');
console.log(groceryList);