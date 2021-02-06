export function nums(a, b) {
    let sum = a + b;
    let mult = a * b;
    try {
        if (isNaN(sum) || isNaN(mult)) {
            throw new Error(console.log("Error"));
        }
    } catch (err) {
        console.log("Error");
    }
    console.log(sum, mult);
}
