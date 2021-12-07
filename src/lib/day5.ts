type Coordinate = {
    x : number;
    y : number;
}

type Line = {
    from : Coordinate;
    to : Coordinate;
}

// Solve Advent of Code 2021
// Day 5 part 1
export function solveDay5Part1(input: string) : string  {
    const inputSplitted = input.split('\n');
    const lines: Line[] = [];
    for (const i of inputSplitted) {
        const parts = i.split(' -> ');
        const fromCoordinates = parts[0].split(',');
        const toCoordinates = parts[1].split(',');
        const line: Line = {
            from: { x: +fromCoordinates[0], y: +fromCoordinates[1] },
            to: { x: +toCoordinates[0], y: +toCoordinates[1] },
        };
        lines.push(line);
    }
    const horizontalAndVerticalLines = lines.filter(a => a.from.x === a.to.x || a.from.y === a.to.y);
    let dimensionsMaxX = 0;
    let dimensionsMaxY = 0;
    for (const l of horizontalAndVerticalLines) {
        if (l.from.x > dimensionsMaxX) {
            dimensionsMaxX = l.from.x;
        }
        if (l.to.x > dimensionsMaxX) {
            dimensionsMaxX = l.to.x;
        }
        if (l.from.y > dimensionsMaxY) {
            dimensionsMaxY = l.from.y;
        }
        if (l.to.y > dimensionsMaxY) {
            dimensionsMaxY = l.to.y;
        }        
    }
    dimensionsMaxX++;
    dimensionsMaxY++;
    const diagram: number[][] = new Array(dimensionsMaxY);
    for (let i = 0; i < dimensionsMaxY; i++) {
        diagram[i] = new Array(dimensionsMaxX);
        for (let j = 0; j < dimensionsMaxX; j++) {
            diagram[i][j] = 0;
        }
    }
    for (const l of horizontalAndVerticalLines) {
        if (l.from.x === l.to.x) {
            let minY = l.from.y;
            let maxY = l.to.y;
            if (l.to.y < l.from.y) {
                minY = l.to.y;
                maxY = l.from.y;
            }
            for (let i = minY; i <= maxY; i++) {
                diagram[i][l.from.x]++;
            }
        }
        else if (l.from.y === l.to.y) {
            let minX = l.from.x;
            let maxX = l.to.x;
            if (l.to.x < l.from.x) {
                minX = l.to.x;
                maxX = l.from.x;
            }
            for (let i = minX; i <= maxX; i++) {
                diagram[l.from.y][i]++;
            }
        }
    }
    let result = 0;
    for (let i = 0; i < dimensionsMaxY; i++) {
        for (let j = 0; j < dimensionsMaxX; j++) {
            if (diagram[i][j] >= 2) {
                result++;
            }
        }
    }
    return result + '';
}

// Solve Advent of Code 2021
// Day 5 part 2
export function solveDay5Part2(input: string) : string  {
    return 0 + '';
}