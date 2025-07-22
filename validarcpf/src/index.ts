export function validar(x: string): boolean {
    if (!x) return false;

    x = x.replace(".", "").replace(".", "").replace("-", "");

    if (x.length !== 11) return false;

    if (
        x === "00000000000" ||
        x === "11111111111" ||
        x === "22222222222" ||
        x === "33333333333" ||
        x === "44444444444" ||
        x === "55555555555" ||
        x === "66666666666" ||
        x === "77777777777" ||
        x === "88888888888" ||
        x === "99999999999"
    ) return false;

    let a = 0;
    let b = 0;

    for (let i = 1; i < 10; i++) {
        a = a + parseInt(x.substring(i - 1, i)) * (11 - i);
    }

    b = (a * 10) % 11;
    if (b === 10 || b === 11) {
        b = 0;
    }

    if (b !== parseInt(x.substring(9, 10))) {
        return false;
    }

    a = 0;

    for (let i = 1; i < 11; i++) {
        a = a + parseInt(x.substring(i - 1, i)) * (12 - i);
    }

    b = (a * 10) % 11;

    if (b === 10 || b === 11) {
        b = 0;
    }

    if (b !== parseInt(x.substring(10, 11))) {
        return false;
    }

    return true;
}

console.log(validar("123.456.789-09")); // false
console.log(validar("357.960.388-42")); // true
