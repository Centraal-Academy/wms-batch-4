'use strict';

const formatNumber = (amount, format = 'small') => {
    if (typeof amount !== 'number') {
        return '$0';
    }

    let formatted = '';

    amount = addComma(amount.toString());

    switch (format) {
        case 'small':
            formatted = `$${amount}`;
            break;
        case 'large':
            formatted = `$${amount} USD`;
            break;
    }

    return formatted;
};

const addComma = (number) => {
    let stringFormatted = '';
    let positions = [];
    let initialPosition = number.length;
    if (number.indexOf('.') !== -1) {
        initialPosition = number.indexOf('.');
    }
    for(let index = initialPosition; index > 0; index = index - 3){
        positions.push(index);
    }
    positions.shift();
    for(let index = 0; index < number.length; index++){
        if(positions.indexOf(index) !== -1) {
            stringFormatted += ',';
        }
        stringFormatted += number[index];
    }
    return stringFormatted;
};


export {formatNumber};