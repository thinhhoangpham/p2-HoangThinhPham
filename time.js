class TimeDisplay {
    
    constructor() {
        this.hh = hour();
        this.mm = minute();
        this.ss = second();
        this.isOn = false;
        this.fade = 0;
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

        fill(255, 255, 255, this.fade);
        noStroke();
        translate(x, y);
        textSize(56);
        text(nf(hf, 2, 0) + ":" + nf(this.mm, 2, 0) + " " + ap, 0, 0, 512, 512);
        if (this.fade<255) { 
            this.fade += 10;
        }
        else {
            this.isOn = true;
        }
        //print(this.fade);
    }

}