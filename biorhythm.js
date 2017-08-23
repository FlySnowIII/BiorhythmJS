/**
 * biorhythm with a little edit
 * by Pengfei Tang 2017
 *
 * From: https://ao-system.net/javascript/code/1020/
 * @auther ao-system
 */
var Biorhythm = {
    byear: 2000,
    bmonth: 1,
    bday: 1,
    syear: 2000,
    smonth: 1,
    sday: 1,
    ssday:1,
    height:180,

    cv: undefined,
    ctx: undefined,

    init: function(width,height) {
        this.cv = document.createElement('canvas');
        this.cv.width = width;
        this.cv.height = height;
        this.height = this.cv.height;
        this.ctx = this.cv.getContext('2d');
    },
    setDate: function(y1,m1,d1,y2,m2,d2) {
        this.byear = y1;
        this.bmonth = m1;
        this.bday = d1;
        this.syear = y2;
        this.smonth = m2;
        this.sday = 1;
        this.ssday = d2+1;
    },
    calc: function(divId,width,height) {
        var elm = document.getElementById(divId);
        if (elm.childNodes.item(0)) {
            elm.removeChild(elm.childNodes.item(0));
        }
        this.init(width,height);
        elm.appendChild(this.cv);
        this.drawRule();
        this.drawBio();
    },
    drawRule: function() {
        this.ctx.strokeStyle = 'rgb(180,180,180)';
        this.ctx.beginPath();	//縦 毎日
        this.ctx.moveTo(0,0);
        this.ctx.lineTo(0,this.height);
        this.ctx.stroke();
        var tempCount = 1;
        for (var x = 0; x < this.cv.width; x += 12) {
          if(tempCount === this.ssday){
            this.ctx.strokeStyle = 'rgb(255,0,0)';
            this.ctx.lineWidth = 4;
          }
          else{
            this.ctx.strokeStyle = 'rgb(180,180,180)';
            this.ctx.lineWidth =1;
          }
            this.ctx.beginPath();	//縦 毎日
            this.ctx.moveTo(12 + x,0);
            this.ctx.lineTo(12 + x,this.height);
            this.ctx.stroke();
            tempCount++;
        }
        this.ctx.strokeStyle = 'rgb(120,120,120)';
        this.ctx.beginPath();	//縦 当日
        this.ctx.moveTo(24,0);
        this.ctx.lineTo(24,this.height);
        this.ctx.stroke();
        this.ctx.strokeStyle = 'rgb(120,120,120)';
        this.ctx.beginPath();	//横 center
        this.ctx.moveTo(0,(this.height)/2);
        this.ctx.lineTo(this.cv.width,(this.height)/2);
        this.ctx.stroke();
        this.ctx.beginPath();	//横 100%
        this.ctx.moveTo(0,0);
        this.ctx.lineTo(this.cv.width,0);
        this.ctx.stroke();
        this.ctx.beginPath();	//横 -100%
        this.ctx.moveTo(0,this.height);
        this.ctx.lineTo(this.cv.width,this.height);
        this.ctx.stroke();
        this.ctx.strokeStyle = 'rgb(180,180,180)';
        this.ctx.beginPath();	//横 50%
        this.ctx.moveTo(0,this.height*0.25);
        this.ctx.lineTo(this.cv.width,this.height*0.25);
        this.ctx.stroke();
        this.ctx.beginPath();	//横 -50%
        this.ctx.moveTo(0,this.height*0.75);
        this.ctx.lineTo(this.cv.width,this.height*0.75);
        this.ctx.stroke();
        this.ctx.strokeStyle = 'rgb(120,120,120)';
        this.ctx.font = '11px sans-serif';
        var da = new Date(this.syear, this.smonth - 1, this.sday);
        var lineCount = parseInt(this.cv.width / 12);
        for (var i = 0; i <lineCount; i += 7) {
            this.ctx.fillText((da.getMonth() + 1) + '/' + da.getDate(), 25 + (i * 12), this.height-2);
            da.setDate(da.getDate() + 7);
            this.ctx.strokeStyle = 'rgb(100,100,100)';
            this.ctx.beginPath();	//縦 その日
            this.ctx.moveTo(24 + (i * 12), 0);
            this.ctx.lineTo(24 + (i * 12), this.height);
            this.ctx.stroke();
        }
    },
    drawBio: function() {
        var dat1 = new Date(this.byear, this.bmonth - 1, this.bday);
        var dat2 = new Date(this.syear, this.smonth - 1, this.sday);
        var diff = (dat2.getTime() - dat1.getTime()) / (1000 * 60 * 60 * 24) - 2;
        var bioP = diff % 23;
        var bioS = diff % 28;
        var bioI = diff % 33;

        //P(身体) 緑
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'rgb(0,255,0)';
        this.ctx.moveTo(-100,100);
        for (var x = 0; x < this.cv.width; x++) {
            var xx = x + (bioP * 12);	//1日は12ピクセル
            this.ctx.lineTo(x, Math.sin((xx / 23) * Math.PI / 180 * 30) * -this.height/2 + this.height/2);
        }
        this.ctx.stroke();
        //S(感情) 赤
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'rgb(255,0,0)';
        this.ctx.moveTo(-100,100);
        for (var x = 0; x < this.cv.width; x++) {
            var xx = x + (bioS * 12);	//1日は12ピクセル
            this.ctx.lineTo(x, Math.sin((xx / 28) * Math.PI / 180 * 30) * -this.height/2 + this.height/2);
        }
        this.ctx.stroke();
        //I(知性) 青
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'rgb(0,0,255)';
        this.ctx.moveTo(-100,100);
        for (var x = 0; x < this.cv.width; x++) {
            var xx = x + (bioI * 12);	//1日は12ピクセル
            this.ctx.lineTo(x, Math.sin((xx / 33) * Math.PI / 180 * 30) * -this.height/2 + this.height/2);
            // this.ctx.lineTo(x, Math.sin((xx / 33) * Math.PI / this.height * 30) * -this.height/2 + this.height/2);
        }
        this.ctx.stroke();
    },
    dummy: undefined
};
