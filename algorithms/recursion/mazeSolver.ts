const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]

type Point = {
    x: number,
    y: number,
}

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // -- Base case --
    //off the map
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {

        return false
    }

    //on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false
    }

    //find the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end)
        return true
    }

    //seen case
    if (seen[curr.y][curr.x]) {
        return false
    }

    // -- recurse --

    //pre
    seen[curr.y][curr.x] = true
    path.push(curr)
    
    //recurse
    for (let i=0; i<directions.length; i++) {
        const [x,y] = directions[i]

        if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
            return true
        }

    }

    //post
    path.pop()
    
    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = []
    const path: Point[] = []

    for (let i=0; i<maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    walk(maze, wall, start, end, seen, path)
    return path
}
