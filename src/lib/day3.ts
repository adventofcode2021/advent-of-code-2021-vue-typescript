// Solve Advent of Code 2021
// Day 3 part 1
export function solveDay3Part1(input: string) : string  {    
    const inputSplitted = input.split('\n');
    const numOfZeros: number[] = [];
    inputSplitted.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            if(numOfZeros.length < i+1) {
                numOfZeros.push(0);
            }
            if (element.charAt(i) === '0') {
                numOfZeros[i]++;
            }
        }
    });
    let gamma = '';
    let epsilon = '';
    for (let i = 0; i < numOfZeros.length; i++) {
        if (numOfZeros[i] > inputSplitted.length / 2) {
            gamma += '0';
            epsilon += '1';
        } else {
            gamma += '1';
            epsilon += '0';
        }
    }
    return (parseInt(gamma, 2) * parseInt(epsilon, 2)) + '';
}

// Solve Advent of Code 2021
// Day 3 part 2
export function solveDay3Part2(input: string) : string  {
    return 0 + '';
}