type BingoCell = {
    value: number;
    marked: boolean;
};

type BingoTable = {
    cells: BingoCell[][];
    won: boolean;
};

// Solve Advent of Code 2021
// Day 4 part 1
export function solveDay4Part1(input: string) : string  {
    const inputs = input.split('\n');
    const numbersString = inputs.shift();
    if (!numbersString) {
        return 0 + '';    
    }
    const numbers = numbersString.split(',').map(a => +a);
    let index = 0;
    let tempBingo: BingoCell[][] = [];
    const allBingoTables: BingoTable[] = [];
    inputs.forEach(element => {
        if (element !== '') {
            const bingoCells = element.trim().split(/[ ]+/).map(a => +a);
            bingoCells.forEach(element => {
                if (!tempBingo[index]) {
                    tempBingo[index] = [];
                }
                tempBingo[index].push({ value: element, marked: false });
            });
            index++;
            if (index === 5) {
                allBingoTables.push({ cells: tempBingo, won: false });
                tempBingo = [];
                index = 0;
            }
        }
    });
    for (const num of numbers) {
        for (const bingo of allBingoTables) {
            for(let i = 0; i < 5; i++) {
                for(let j = 0; j < 5; j++) {
                    if (bingo.cells[i][j].value === num) {
                        bingo.cells[i][j].marked = true;
                    }
                }
            }
            let unmarkedSum = 0;
            for(let i = 0; i < 5; i++) {
                for(let j = 0; j < 5; j++) {
                    if (!bingo.cells[i][j].marked) {
                        unmarkedSum += bingo.cells[i][j].value;
                    }
                }
            }
            // Check for horizontal
            for (let i = 0; i < 5; i++) {
                let allMarked = true;
                for (let j = 0; j < 5; j++) {
                    if (!bingo.cells[i][j].marked) {
                        allMarked = false;
                    }
                }
                if (allMarked) {
                    return (num * unmarkedSum) + '';
                }
            }
            // Check for vertical
            for (let i = 0; i < 5; i++) {
                let allMarked = true;
                for (let j = 0; j < 5; j++) {
                    if (!bingo.cells[j][i].marked) {
                        allMarked = false;
                    }
                }
                if (allMarked) {
                    return (num * unmarkedSum) + '';
                }
            }
        }        
    }
    return 0 + '';
}

// Solve Advent of Code 2021
// Day 4 part 2
export function solveDay4Part2(input: string) : string  {
    const inputs = input.split('\n');
    const numbersString = inputs.shift();
    if (!numbersString) {
        return 0 + '';    
    }
    const numbers = numbersString.split(',').map(a => +a);
    let index = 0;
    let tempBingo: BingoCell[][] = [];
    const allBingoTables: BingoTable[] = [];
    inputs.forEach(element => {
        if (element !== '') {
            const bingoCells = element.trim().split(/[ ]+/).map(a => +a);
            bingoCells.forEach(element => {
                if (!tempBingo[index]) {
                    tempBingo[index] = [];
                }
                tempBingo[index].push({ value: element, marked: false });
            });
            index++;
            if (index === 5) {
                allBingoTables.push({ cells: tempBingo, won: false });
                tempBingo = [];
                index = 0;
            }
        }
    });
    for (const num of numbers) {
        for (const bingo of allBingoTables.filter(a => !a.won)) {
            for(let i = 0; i < 5; i++) {
                for(let j = 0; j < 5; j++) {
                    if (bingo.cells[i][j].value === num) {
                        bingo.cells[i][j].marked = true;
                    }
                }
            }
            let unmarkedSum = 0;
            for(let i = 0; i < 5; i++) {
                for(let j = 0; j < 5; j++) {
                    if (!bingo.cells[i][j].marked) {
                        unmarkedSum += bingo.cells[i][j].value;
                    }
                }
            }
            // Check for horizontal
            for (let i = 0; i < 5; i++) {
                let allMarked = true;
                for (let j = 0; j < 5; j++) {
                    if (!bingo.cells[i][j].marked) {
                        allMarked = false;
                    }
                }
                if (allMarked) {
                    bingo.won = true;
                    const notWon = allBingoTables.filter(a => !a.won);
                    if (notWon.length === 0) {
                        return (num * unmarkedSum) + '';
                    }
                }
            }
            // Check for vertical
            for (let i = 0; i < 5; i++) {
                let allMarked = true;
                for (let j = 0; j < 5; j++) {
                    if (!bingo.cells[j][i].marked) {
                        allMarked = false;
                    }
                }
                if (allMarked) {
                    bingo.won = true;
                    const notWon = allBingoTables.filter(a => !a.won);
                    if (notWon.length === 0) {
                        return (num * unmarkedSum) + '';
                    }                    
                }
            }
        }        
    }
    return 0 + '';
}