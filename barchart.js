class BarChart {
    constructor(x, y, table, max, title) {
        this.table = table;
        this.title = title;
        this.x = x;
        this.y = y;
        this.w = 511;
        this.h = 128;
        this.max = max;
        this.barW = 67;
        this.rowCount = this.table.getRowCount();
    }

    display() {
        push();
        noFill();
        stroke(255);
        strokeWeight(3);
        line(this.x, this.y, this.x, this.y + this.h);
        line(this.x, this.y + this.h, this.x + this.w, this.y + this.h);
        fill(255);
        noStroke();
        for (let i = 0; i < this.rowCount; i++) {
            let data = this.table.get(i, 1);
            let ratio = map(data / this.max, 0, 1, 0, 120);
            rectMode(CORNER);
            rect((this.x + 32) + (i * this.barW), (this.y + this.h), 35,  -ratio);
        }
        
        pop();

        //console.log(this.table.getRowCount());
    }
}