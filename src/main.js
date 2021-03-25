let canvas = document.getElementById("main");

// consts


// settings
canvas.width = MAPSIZEX * CASESIZEX;
canvas.height = MAPSIZEY * CASESIZEY;





class Game {
    constructor() {
        this.drawer = new Drawer();
        this.map = new Map();
        this.engine = new Engine();
        this.drawer.drawAllLines();

        this.intervalGame;
    }


    start() {
        this.intervalGame = setInterval(() => {
            this.nextStep();
        }, 50);
    }
    stop() {
        clearInterval(this.intervalGame);
    }
    nextStep() {
        this.map.map = this.engine.next(this.map);

        this.drawer.clearFullRect();
        this.drawer.drawAllLines();

        for (let x = 0; x < MAPSIZEX; x++) {
            for (let y = 0; y < MAPSIZEY; y++) {
                if (this.map.get(x, y) == 1) {
                    this.drawer.drawRect(x * CASESIZEX, y * CASESIZEY, 'black');
                }
            }
        }
    }
}
class Map {
    constructor() {
        this.map = [];

        this.initMap();
    }
    initMap() {
        for (let x = 0; x < MAPSIZEX; x++) {
            this.map.push([]);
            for (let y = 0; y < MAPSIZEY; y++) {
                this.map[x].push(0);
            }
        }
    }
    resetMap() {
        for (let x = 0; x < MAPSIZEX; x++) {
            for (let y = 0; y < MAPSIZEY; y++) {
                this.map[x][y] = 0;
            }
        }
    }
    toggle(x, y) {
        this.map[x][y] = this.map[x][y] == 0 ? 1 : 0;
    }
    get(x, y) {
        return this.map[x][y];
    }
    clone() {
        let clone = [];
        for (let x = 0; x < MAPSIZEX; x++) {
            clone.push([]);
            for (let y = 0; y < MAPSIZEY; y++) {
                clone[x].push(this.map[x][y]);
            }
        }
        return clone;
    }
}


let game = new Game();



canvas.addEventListener('click', e => {
    const clickX = e.clientX;
    const clickY = e.clientY;
    const posX = Math.floor(clickX / CASESIZEX);
    const posY = Math.floor(clickY / CASESIZEY);

    game.map.toggle(posX, posY);

    const color = game.map.get(posX, posY) == 1 ? 'black' : 'white';
    game.drawer.drawRect(posX * CASESIZEX, posY * CASESIZEY, color);
    
    game.drawer.drawAllLines();
});

document.getElementById("start").addEventListener('click', () => {
    game.start();
});
document.getElementById("stop").addEventListener('click', () => {
    game.stop();
});