let a = [1, 23, 22, 64, 14, 634, 0, 434, 23, 435345, 342, 232,-323, 23, -22223442, 24234234534324, 231467868578566, -22];
var count = 0;

function quickSort(arr) {
    if(arr.length === 0) return [];
    let choseEl = arr[0];
    let leftA = [];
    let rightA = [];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < choseEl) leftA.push(arr[i]);
        else rightA.push(arr[i]);
        count++;
    }

    return quickSort(leftA).concat(choseEl, quickSort(rightA));
}

console.log(quickSort(a), count);
