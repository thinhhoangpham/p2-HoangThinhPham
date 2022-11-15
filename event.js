class Event {
    constructor(title) {
        this.x = 0;
        this.y = 0;
        this.w = 256;
        this.h = 32;
        this.title = title;
        this.tSize = 14;
    }

    display(x, y) {
        fill(255, 255, 255, 85);
        rectMode(CORNER);
        rect(x, y, this.w, this.h);
        textSize(this.tSize);
        textAlign(LEFT, CENTER);
        fill(96);
        text(this.title, x + 5, y + this.h / 2);
        fill(255);
        text("11:00 am\t|\tHuman interactive Design",x + 5, y + this.h/2 + 32);


    }
}