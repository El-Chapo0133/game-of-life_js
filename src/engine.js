

class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Engine {
    constructor() {

    }
    next(map) {
        let newMap = [];


        for (let x = 0; x < MAPSIZEX; x++) {
            newMap.push([]);
            for (let y = 0; y < MAPSIZEY; y++) {
                newMap[x].push(calculateCell(x, y, map));
            }
        }

        return newMap;
    }
}

function calculateCell(x, y, map) {
    let count = 0;
    let neightbors = getNeightbors(x, y);
    for (let i = 0; i < neightbors.length; i++) {
        count += map.get(neightbors[i].x, neightbors[i].y);
    }
    return map.get(x, y) == 0 ? (count == 3 ? 1 : 0) : (count == 2 || count == 3 ? 1 : 0);
}
function getNeightbors(x, y) {
    let neightbors = [];

    if (x > 0 && y > 0)
        neightbors.push(new Vector2D(x-1, y-1));
    if (x > 0)
        neightbors.push(new Vector2D(x-1, y));
    if (x > 0 && y < MAPSIZEY - 1)
        neightbors.push(new Vector2D(x-1, y+1));
    if (y > 0)
        neightbors.push(new Vector2D(x, y-1));
    if (y < MAPSIZEY - 1)
        neightbors.push(new Vector2D(x, y+1));
    if (x < MAPSIZEX - 1 && y > 0)
        neightbors.push(new Vector2D(x+1, y-1));
    if (x < MAPSIZEX - 1)
        neightbors.push(new Vector2D(x+1, y));
    if (x < MAPSIZEX - 1 && y < MAPSIZEY - 1)
        neightbors.push(new Vector2D(x+1, y+1));

    return neightbors;
}