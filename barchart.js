class BarChart {
    constructor(x, y, table, max, title) {
        this.table = table;
        this.title = title;
        this.x = x;
        this.y = y;
        this.w = 511;
        this.h = 130;
        this.max = max;
        this.barW = 67;
        this.rowCount = this.table.getRowCount();
    }

    display() {
        push();
        noFill();
        stroke(255);
        strokeWeight(3);
        line(this.x, this.y + 10, this.x, this.y + this.h);
        line(this.x, this.y + this.h, this.x + this.w, this.y + this.h);
        fill(255);
        noStroke();
        textSize(18);
        textAlign(LEFT, BASELINE);
        text(this.title, this.x, this.y - 10);
        for (let i = 0; i < this.rowCount; i++) {
            let data = this.table.get(i, 1);
            let end = data / this.max;
            for (let start = 0; start < end; start = start + 0.1){
                let position = map(start, 0, 1, 0, 120);
                rectMode(CORNER);
                rect((this.x + 16) + (i * this.barW), (this.y + this.h), 35,  -position);
            }

            textAlign(CENTER, CENTER);
            textSize(12);
            text(this.table.get(i, 0), this.x + 32 + (i * this.barW), this.y + this.h + 10);
        }
        
        pop();

        //console.log(this.table.getRowCount());
    }
}