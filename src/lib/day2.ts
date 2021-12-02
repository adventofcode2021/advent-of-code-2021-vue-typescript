// Solve Advent of Code 2021
// Day 2 part 1
export function solveDay2Part1(input: string) : string  {
    let horizontal = 0;
    let depth = 0;
    input.split('\n').forEach(element => {
        const parts = element.split(' ');
        if (parts.length === 2) {
            const direction = parts[0];
            const amount = +parts[1];
            if (direction === 'forward') {
                horizontal += amount;
            }
            else if (direction === 'up') {
                depth -= amount;
            }
            else if (direction === 'down') {
                depth += amount;
            }
        }
    });
    return (horizontal * depth) + '';
}

// Solve Advent of Code 2021
// Day 2 part 2
export function solveDay2Part2(input: string) : string  {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    input.split('\n').forEach(element => {
        const parts = element.split(' ');
        if (parts.length === 2) {
            const direction = parts[0];
            const amount = +parts[1];
            if (direction === 'forward') {
                horizontal += amount;
                depth += amount * aim;
            }
            else if (direction === 'up') {
                aim -= amount;
            }
            else if (direction === 'down') {
                aim += amount;
            }
        }
    });
    return (horizontal * depth) + '';
}