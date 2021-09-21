let average = (items.reduce((accum, element) => {
    return accum + element.price;
},0) / items.length).toFixed(2);

console.log(`$${average}`);