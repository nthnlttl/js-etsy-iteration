let average = (items.reduce((accum, element) => {
    return accum + element.price;
},0) / items.length).toFixed(2);

console.log(`$${average}`);



let specificItems = items.filter(element => {
    return element.price >= 14 && element.price <= 18;
});

console.log(`Items between $14.00 and $18.00:\n`, specificItems);



let itemsGBP = items.filter(element => {
    return element.currency_code === "GBP"
});

console.log(`${itemsGBP[0].title} costs ${itemsGBP[0].price}`)
