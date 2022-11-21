class BarChart {
    constructor(x, y, table, max, unit, title) {
        this.table = table;
        this.title = title;
        this.x = x;
        this.y = y;
        this.w = 511;
        this.h = 130;
        this.max = max;
        this.barW = 67;
        this.rowCount = this.table.getRowCount();
        this.bars = [];
        this.barVal = "";
        this.unit = unit;
    }

    update() {
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
            let end = map(data, 0, this.max, 0, 120);
            rectMode(CORNER);
            append(this.bars, new Bar((this.x + 16) + (i * this.barW), this.y, 35, 120));
            rect((this.x + 16) + (i * this.barW), (this.y + this.h), 35,  -end);

            textAlign(CENTER, CENTER);
            textSize(12);
            text(this.table.get(i, 0), this.x + 32 + (i * this.barW), this.y + this.h + 10);
            textSize(14);
            if (this.bars[i].mouseOVer() === true) {
                this.barVal = this.table.get(i, 1);
                textAlign(RIGHT, BASELINE);
                text(this.barVal + " " +this.unit, this.x + this.w, this.y - 10);
            }
            else {
                textAlign(RIGHT, BASELINE);
                text(this.unit, this.x + this.w, this.y - 10);
            }
        }
        
        
        pop();

        //console.log(this.table.getRowCount());
    }
}

class Bar {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    
    get_x() {
        return this.x;
    }
    get_y() {
        return this.y;
    }
    get_w() {
        return this.w;
    }
    get_h() {
        return this.h;
    }

    mouseOVer() {
        if ((mouseX > this.x && mouseX < (this.x + this.w)) && (mouseY > this.y && mouseY < (this.y + this.h))) {
            return true;
        }
        else {
            return false;
        }
    }
}