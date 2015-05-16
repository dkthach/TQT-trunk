/**
 * Created by TQTP on 5/17/2015.
 */

var DURATION_BAKET = 0.5;
var Baket = cc.Node.extend({
        index: -1,
        spr:null,
       ctor: function (frame, inx) {
            this._super();
           this.spr = new cc.Sprite(frame);
           this.addChild(this.spr);
            this.index = inx;
            this.setPosition(tqtp.listPos[inx]);
        },

        swaptoindex: function (index) {
            var moveTo = cc.moveTo(DURATION_BAKET, tqtp.listPos[index]).easing(cc.easeOut(1.5));
            this.runAction(cc.sequence(moveTo, cc.callFunc(function () {
                this.index = index;
            }.bind(this))));
        }


    })
    ;