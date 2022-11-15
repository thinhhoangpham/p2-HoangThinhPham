class DateDisplay {
    
    constructor() {
        this.m = month();
        this.d = day();
        this.y = year();
        this.colorBright = 16;
        this.colorDark = 255;
    }

    update() {
        this.m = month();
        this.d = day();
        this.y = year();
    }

    display(x, y) {

        let mf;
        switch (this.m) {
            case 1:
                mf = "January";
                break;
            case 2:
                mf = "February";
                break;
            case 3:
                mf = "March";
                break;
            case 4:
                mf = "April";
                break;
            case 5:
                mf = "May";
                break;
            case 6:
                mf = "June";
                break;
            case 7:
                mf = "July";
                break;
            case 8:
                mf = "August";
                break;
            case 9:
                mf = "September";
                break;
            case 10:
                mf = "October";
                break;
            case 11:
                mf = "November";
                break;
            case 12:
                mf = "December";
                break;
            default:
                break;
        }

        let df;
        switch (this.d % 10) {
            case 1:
                df = this.d + "st";
                break;
            case 2:
                df = this.d + "nd";
                break;
            case 3:
                df = this.d + "rd";
                break;
            default:
                df = this.d + "th";
                break;
        }
        push();
        fill(this.colorBright);
        noStroke();
        translate(x, y);
        textSize(28);
        textAlign(LEFT, TOP);
        text(mf + " " + df, 0, 0, 512, 512);
        pop();
    }

}