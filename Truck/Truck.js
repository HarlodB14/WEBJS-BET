export class Truck {
    width;
    height;
    interval;
    transportType;

    constructor(width, height, interval, transportType) {
        this.height = height;
        this.width = width;
        this.interval = interval;
        this.transportType = transportType;
    }


    draw(height, width) {
        const table = document.createElement('table');

        for(let i = 0; i < height; i++){
            const row = document.createElement('tr');
            for(let j = 0; j < width; j++){
                const cell = document.createElement('td');
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }
}