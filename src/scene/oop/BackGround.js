/**
 * Created by TQTP on 5/16/2015.
 */

var BackGround = cc.Node.extend({
    ctor: function () {
        this._super();
        this.layout();
    },

    layout: function () {
        var s = tqtp.winSize;

        this.addChild(bgr);
    }
});



