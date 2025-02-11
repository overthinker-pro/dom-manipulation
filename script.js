const colors = ["red", "green", "blue", "yellow"];

const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Wireless Headphones", price: 199.99 },
  { id: 3, name: "Coffee Maker", price: 79.99 },
  { id: 4, name: "Smartphone", price: 799.99 },
  { id: 5, name: "Desk Chair", price: 149.99 },
  { id: 6, name: "Laptop", price: 999.99 },
  { id: 7, name: "Wireless Headphones", price: 199.99 },
  { id: 8, name: "Coffee Maker", price: 79.99 },
  { id: 9, name: "Smartphone", price: 799.99 },
  { id: 10, name: "Laptop", price: 999.99 },
  { id: 11, name: "Wireless Headphones", price: 199.99 },
  { id: 12, name: "Coffee Maker", price: 79.99 },
  { id: 13, name: "Smartphone", price: 799.99 }
];

let root = document.getElementById('root');

for (let i = 0; i < products.length; i++){
    let card = document.createElement("div");
    let name = document.createElement("h1")
    let price = document.createElement("p");

    name.innerText = products[i].name;
    price.innerText = products[i].price;

    card.className = 'card';
    card.style.backgroundColor = colors[i % colors.length];


    card.append(name);
    card.append(price);
    root.append(card);
}