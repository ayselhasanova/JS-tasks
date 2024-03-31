let goods = [];

for (let index = 1; index <= 30; index++) {
    goods.push({
        name: `Element${index}`,
        description: `Description${Math.floor(Math.random() * 100)}`,
        price: Math.floor(Math.random() * 100),
        year: Math.floor(Math.random() * (2030 - 1900 + 1)) + 1900
    });
}

console.log(goods);

while (true) {
    let input = prompt(
        `For read all goods write - READ
        For delete goods write - DELETE
        For CHANGE goods write - CHANGE
        For ADD goods write - ADD
        For SORTING goods write - SORT
        For STOP write - STOP
        `
    );

    input = input.toUpperCase();

    if (input === 'STOP') {
        break;
    } else if (input === 'DELETE') {
        let deletedElement = prompt('Write name of element that you want to delete');
        let indexToDelete = goods.findIndex(item => item.name === deletedElement);
        if (indexToDelete !== -1) {
            goods.splice(indexToDelete, 1);
            console.log(goods);
        } else {
            console.log('Element not found.');
        }
    } else if (input === 'CHANGE') {
        let changedElement = prompt('Write name of element that you want to change');
        let indexToChange = goods.findIndex(item => item.name === changedElement);
        if (indexToChange !== -1) {
            let changedItem = prompt('Write which information of the element you want to change (description, price or year)');
            if (changedItem === 'price') {
                let price = prompt('Write the new price');
                goods[indexToChange].price = parseInt(price);
                console.log(goods);
            } 
            else if (changedItem === 'year') {
                let year = prompt('Write the new year');
                goods[indexToChange].year = parseInt(year);
                console.log(goods);
            }else if (changedItem === 'description') {
                let description = prompt('Write the new description');
                goods[indexToChange].description = description;
                console.log(goods);
            } else {
                console.log('Wrong input.');
            }
        } else {
            console.log('Element not found.');
        }
    } else if (input === 'ADD') {
        let addedElement = prompt('Write information of the element that you want to add (name description price year)').split(' ');
        let el = goods.some(item => item.name === addedElement[0]);
        if (!el) {
            let newElement = {
                name: addedElement[0],
                description: addedElement[1],
                price: parseInt(addedElement[2]),
                year: parseInt(addedElement[3])
            };
            goods.push(newElement);
            console.log(goods);
        } else {
            console.log('Array already contains this element.');
        }
    } else if (input === 'READ') {
        goods.forEach(item => {
            console.log(item.name, item.description, item.price);
        });
    } else if (input === 'SORT') {
        let forWhat = prompt("What do you want to sort?(price, year or description");
        if (forWhat === "description") {
            let direction = prompt('Write how you want to sort the array: increase or decrease');
            if (direction === 'increase') {
                goods.sort((a, b) => {
                    let aNum = parseInt(numPart(a.description));
                    let bNum = parseInt(numPart(b.description));
                    return aNum - bNum;
                });
            } else if (direction === 'decrease') {
                goods.sort((a, b) => {
                    let aNum = parseInt(numPart(a.description));
                    let bNum = parseInt(numPart(b.description));
                    return bNum - aNum;
                });
            } else {
                console.log('Wrong input.');
            }
            goods.forEach(item => {
                console.log(item.name, item.description, item.price);
            });
        }
        else if (forWhat === "price") {
            let direction = prompt('Write how you want to sort the array: increase or decrease');
            if (direction === 'increase') {
                goods.sort((a, b) => a.price - b.price);
            } else if (direction === 'decrease') {
                goods.sort((a, b) => b.price - a.price);
            } else {
                console.log('Wrong input.');
            }
            goods.forEach(item => {
                console.log(item.name, item.description, item.price);
            });
        }
        else if (forWhat === "year") {
            let direction = prompt('Write how you want to sort the array: increase or decrease');
            if (direction === 'increase') {
                goods.sort((a, b) => a.year - b.year);
            } else if (direction === 'decrease') {
                goods.sort((a, b) => b.year - a.year);
            } else {
                console.log('Wrong input.');
            }
            goods.forEach(item => {
                console.log(item.name, item.description, item.price, item.year);
            });
        }
    }
    else {
        alert("There is no option like this")
    }
}

function numPart(str) {
    let numericPart = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            numericPart += str[i];
        }
    }
    return numericPart;

}

