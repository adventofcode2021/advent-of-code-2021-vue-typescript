import { solveDay1Part1, solveDay1Part2 } from '@/lib/day1';
import { solveDay2Part1, solveDay2Part2 } from '@/lib/day2';
import { solveDay3Part1, solveDay3Part2 } from '@/lib/day3';
import { solveDay4Part1, solveDay4Part2 } from '@/lib/day4';

// Function for solving Advent of Code 2021
export function solve(input: string, day: number, part: number): string {
    if (day === 1 && part === 1)
        return solveDay1Part1(input);
    else if (day === 1 && part === 2)
        return solveDay1Part2(input);
    else if (day === 2 && part === 1)
        return solveDay2Part1(input);
    else if (day === 2 && part === 2)
        return solveDay2Part2(input);
    else if (day === 3 && part === 1)
        return solveDay3Part1(input);
    else if (day === 3 && part === 2)
        return solveDay3Part2(input);
    else if (day === 4 && part === 1)
        return solveDay4Part1(input);
    else if (day === 4 && part === 2)
        return solveDay4Part2(input);

    
    return 'Invalid day or part';
}