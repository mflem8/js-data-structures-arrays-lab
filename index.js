const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
    drivers.push('Ralph');
}

function destructivelyPrependDriver() {
    drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
    drivers.pop(-1);
}

function destructivelyRemoveFirstDriver() {
    drivers.shift(0);
}

function appendDriver() {
    const newArr = [...drivers, 'Broom'];
    return newArr;
}

function prependDriver() {
    const newArr2 = ['Arnold', ...drivers];
    return newArr2;
}

function removeLastDriver() {
    const newArr3 = drivers.slice(0,2);
    return newArr3;
}

function removeFirstDriver() {
    const newArr4 = drivers.slice(-2);
    return newArr4;
}
