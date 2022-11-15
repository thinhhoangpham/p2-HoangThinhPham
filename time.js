class TimeDisplay {
    
    constructor() {
        this.hh = hour();
        this.mm = minute();
        this.ss = second();
        this.isOn = false;
        this.colorBright = 16;
        this.colorDark = 255;
    }

    update() {
        this.hh = hour();
        this.mm = minute();
        this.ss = second();
    }

    display(x, y) {

        let ap, hf;
        if (this.hh < 12) {
            hf = this.hh;
            ap = "am";
        } 
        else if (this.hh > 12) {
            hf = this.hh % 12;
            ap = "pm";
        }
        else {
            hf = this.hh;
            ap = "pm";
        }
        push();
        fill(this.colorDark);
        noStroke();
        translate(x, y);
        textSize(48);
        textAlign(LEFT, TOP);
        text(nf(hf, 2, 0) + ":" + nf(this.mm, 2, 0) + " " + ap, 0, 0, 512, 512);
        //print(this.fade);
        pop();
    }

}