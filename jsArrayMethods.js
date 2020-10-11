const items = [
  { name: 'pro', price: 150 },
  { name: '123', price: 40},
  { name: 'adf', price: 45},
  { name: 'ASD', price: 20},
  { name: 'TTT', price: 200 },
  { name: 'YYY', price: 450 },
  { name: 'MMM', price: 350 }
];

// filter
const filtereditems = items.filter((item) => {
  return item.price <= 100;
})
console.log(filtereditems);

// map
const mappeditems = items.map((item) =>{
  return item.price;
})
console.log(mappeditems);

// find
const finditem = items.find((item) => {
  return item.price === 200
})
console.log(finditem);

//foreach
items.forEach((item) => {
  console.log(item.name);
})

//some
const hasexpensiveitems = items.some((item) => {
  return item.price >= 200
})

console.log( hasexpensiveitems );

//every
const checkallitemshascondition = items.every((item) => {
  return item.prie <= 1000
})
console.log(checkallitemshascondition);

//reduce
const total = items.reduce((currentPrice, item) => {
  return item.price + currentPrice;
},0)
console.log(total);

// includes
const newitems = [ 1, 2, 3, 4, 5 ]
const includesone = newitems.includes(2)
console.log(includesone)