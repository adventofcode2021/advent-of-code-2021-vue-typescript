// Solve Advent of Code 2021
// Day 1 part 1
export function solveDay1Part1(input: string) : string  {
    let amount = 0;
    let previousNumber: number | undefined = undefined;
    input.split('\n').forEach(element => {
        if (previousNumber && +element > previousNumber) {
            amount++;
        }
        previousNumber = +element;
    });
    return amount + '';
}

// Solve Advent of Code 2021
// Day 1 part 2
export function solveDay1Part2(input: string) : string  {
    let amount = 0;
    let previousSum: number | undefined = undefined;
    const inputs = input.split('\n');
    for (let i = 0; i < inputs.length; i++) {
        if (i+2 < inputs.length) {
            const sum = +inputs[i] + +inputs[i+1] + +inputs[i+2];
            if (previousSum && sum > previousSum) {
                amount++;
            }
            previousSum = sum;
        }
    }
    return amount + '';
}