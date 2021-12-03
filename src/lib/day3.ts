enum Rating {
    OxygenGenerator = 1,
    CO2Scrubber = 2,
}

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

function findRating(input:string, rating: Rating) : number {
    let tempList: string[] = input.split('\n');
    let index = 0;    
    do {
        const zeros: string[] = [];
        const ones: string[] = [];
        tempList.forEach(element => {
            const current = element.charAt(index);
            if (current === '0') {
                zeros.push(element);
            } else if (current === '1') {
                ones.push(element);
            }
        });
        if ((rating === Rating.OxygenGenerator &&  zeros.length > ones.length)
         || (rating === Rating.CO2Scrubber && zeros.length <= ones.length)) {
            tempList = zeros;
        } else {
            tempList = ones;
        }
        index++;
    } while(tempList.length > 1);
    return parseInt(tempList[0], 2);       
}

// Solve Advent of Code 2021
// Day 3 part 2
export function solveDay3Part2(input: string) : string  {
    const oxygenGeneratorRating = findRating(input, Rating.OxygenGenerator);
    const co2ScrubberRating = findRating(input, Rating.CO2Scrubber);
    const lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating;
    return lifeSupportRating + '';
}