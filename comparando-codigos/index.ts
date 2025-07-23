function somarArray(arr: number[]): number {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}


function somarArray2(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
}