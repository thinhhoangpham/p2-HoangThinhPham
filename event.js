class Event {
    constructor(title) {
        this.x = 0;
        this.y = 0;
        this.w = 300;
        this.h = 32;
        this.title = title;
        this.tSize = 16;
        this.colorBright = 16;
        this.colorDark = 255;
    }

    display(x, y) {
        this.color = this.colorDark;
        fill(0 + this.color, 0 + this.color, 0 + this.color, 90);
        rectMode(CORNER);
        rect(x, y, this.w, this.h);
        textSize(this.tSize);
        textAlign(LEFT, CENTER);
        fill(255 - this.color);
        text(this.title, x + 5, y + this.h / 2);
        fill(0 + this.color);
        text("11:00 am\t\tHuman Computer Interaction",x + 5, y + this.h/2 + 32);
        text("12:00 pm\t\tLunch with Mom",x + 5, y + this.h/2 + 32*2);
        text("3:00 pm \t\tGroup meeting",x + 5, y + this.h/2 + 32*3);


    }
}