/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/

Object.prototype.extend = function (obj) {
    for(var k in obj) {
        if(this.hasOwnProperty(k) && typeof this[k] == 'object') {
            extend(this[k], obj[k]);
        } else {
            this[k] = obj[k];
        }
    }
}

var Pie = function (element, opt) {
    this.opts = {
        colors: ['#CAF44A', '#FFBD30', '#FFF335', '#FF6D4C'],
        valueStyle: {
            formate: '{v}人',
            color: '#fff',
            font: '16px Microsoft YaHei'
        }
    };

    this.opts.extend(opt);
    this.element = typeof element == 'string' ? document.getElementById(element) : element;
    this.r = this.element.width / 2;
    this.context = this.element.getContext('2d');
}

Pie.prototype = {
    calcLocation: function(r, end){

        return {
            x: this.r + r * Math.cos(Math.PI * end),
            y: this.r + r * Math.sin(Math.PI * end)
        };
    },
    drawCircle: function(opts) {
        var s = opts.s || 0,
            e = opts.e || 2;

        this.context.beginPath();
        this.context.moveTo(this.r, this.r);
        this.context.arc(this.r, this.r, this.r, Math.PI*s, Math.PI*e);
        this.context.closePath();
        this.context.fillStyle = opts.style;
        this.context.fill(); 
    },
    fillText: function(opts){
        var style = this.opts.valueStyle,
            text = style.formate.replace('{v}', opts.text);

        this.context.font = style.font; 
        this.context.fillStyle = style.color;
        this.context.textAlign = style.align || 'center';
        this.context.textBaseline = style.vertical || 'middle';  
        this.context.moveTo(opts.loc.x, opts.loc.y);  
        this.context.fillText(text, opts.loc.x, opts.loc.y); 
    },
    drawRange: function (sum, values) {
        var ends = [], txtEnds = [];
        for (var i = 0, len = values.length; i < len; i++) {
            var s = i === 0 ? 1.5 : ends[i-1],
                e = values[i] / sum * 2 + s,
                txtEnd = s + (e - s) / 2;

            ends.push(e);
            txtEnds.push(txtEnd);

            this.drawCircle({
                s: s,
                e: e,
                style: this.opts.colors[i]
            });
        };

        for (var i = 0, len = txtEnds.length; i < len; i++) {
            this.fillText({
                loc: this.calcLocation(this.r * 0.6, txtEnds[i]),
                text: values[i]
            });
        }

    },
    draw: function () {
        var sum = 0, values = [], data = this.opts.data;
        for (var i = 0, len = data.length; i < len; i++) {
            var value = data[i].value;
            values.push(value);
            sum += value;
        };

        this.drawRange(sum, values);

    }
}
console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");