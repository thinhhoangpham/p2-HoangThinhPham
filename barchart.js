class BarChart {
    constructor(x, y, table) {
        this.table = table;
        this.x = x;
        this.y = y;
        this.w = 511;
        this.h = 128;
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
        
        pop();

        //console.log(this.table.getRowCount());
    }
}