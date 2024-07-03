function start() {
    setInterval(gradient, 25);
}

var r2 = Math.floor(Math.random() * 256);
var g2 = Math.floor(Math.random() * 256);
var b2 = Math.floor(Math.random() * 256);
var r1 = 0, g1 = 0, b1 = 0;
var countr2 = 0, countg2 = 0, countb2 = 0, countr1 = 0, countg1 = 0, countb1 = 0;
var val1 = "rgb(0, 0, 0)", val2;
var i;
for (i = 0; i < 100; i++) {
    if (countr2 % 2 == 0) {
        r2++;
        if (r2 == 256) {
            r2 = 254;
            countr2++;
        }
    } else {
        r2--;
        if (r2 == -1) {
            r2 = 1;
            countr2++;
        }
    }
    if (countg2 % 2 == 0) {
        g2 += 2;
        if (g2 >= 256) {
            g2 -= 4;
            countg2++;
        }
    } else {
        g2-=2;
        if (g2 <= -1) {
            g2 += 4;
            countg2++;
        }
    }
    if (countb2 % 2 == 0) {
        b2+=3;
        if (b2 >= 256) {
            b2 -= 6;
            countb2++;
        }
    } else {
        b2-=3;
        if (b2 <= -1) {
            b2 += 6;
            countb2++;
        }
    }
}

val2 = `rgb(${r2}, ${g2}, ${b2})`;
function gradient() {
    
    
    if (countr2 % 2 == 0) {
        r2++;
        if (r2 == 256) {
            r2 = 254;
            countr2++;
        }
    } else {
        r2--;
        if (r2 == -1) {
            r2 = 1;
            countr2++;
        }
    }
    if (countg2 % 2 == 0) {
        g2 += 2;
        if (g2 >= 256) {
            g2 -= 4;
            countg2++;
        }
    } else {
        g2-=2;
        if (g2 <= -1) {
            g2 += 4;
            countg2++;
        }
    }
    if (countb2 % 2 == 0) {
        b2+=3;
        if (b2 >= 256) {
            b2 -= 6;
            countb2++;
        }
    } else {
        b2-=3;
        if (b2 <= -1) {
            b2 += 6;
            countb2++;
        }
    }

    if (countr1 % 2 == 0) {
        r1++;
        if (r1 == 256) {
            r1 = 254;
            countr1++;
        }
    } else {
        r1--;
        if (r1 == -1) {
            r1 = 1;
            countr1++;
        }
    }
    if (countg1 % 2 == 0) {
        g1 += 2;
        if (g1 >= 256) {
            g1 -= 4;
            countg1++;
        }
    } else {
        g1-=2;
        if (g1 <= -1) {
            g1 += 4;
            countg1++;
        }
    }
    if (countb1 % 2 == 0) {
        b1+=3;
        if (b1 >= 256) {
            b1 -= 6;
            countb1++;
        }
    } else {
        b1-=3;
        if (b1 <= -1) {
            b1 += 6;
            countb1++;
        }
    }

    val2 = `rgb(${r2}, ${g2}, ${b2})`;
    val1 = `rgb(${r1}, ${g1}, ${b1})`;
    
    document.body.style.background = `linear-gradient(235deg, ${val1}, ${val2})`;

}