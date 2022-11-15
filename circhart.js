class CircleChart {
    constructor(x, y, dia, d1, d2, unit, icon) {
        this.x = x;
        this.y = y;
        this.dia = dia;
        this.w = 256;
        this.h = d;
        this.d1 = d1;
        this.d2 = d2;
        this.unit = unit;
        this.icon = createImg('assets/bed.png');
        this.end = d1 / d2;
        this.start = 0;
    }

    update() {
        
    }

    display() {
        push();
        imageMode(CENTER);
        image(this.icon, this.x, this.y, 32, 32);
        angleMode(DEGREES);
        noFill();
        stroke(255);
        strokeWeight(8);
        if (this.start < this.end) {
            this.start = this.start + .02;
        }
        let position = map(this.start, 0, 1, 0, 360);
        arc(this.x, this.y, this.dia, this.dia, -90, position - 90);
        fill(255);
        noStroke();
        textAlign(LEFT, CENTER);
        textSize(18);
        text(this.d1 + "/" + this.d2 + " " + this.unit, this.x + this.dia - 10, this.y);
        pop();
    }
}