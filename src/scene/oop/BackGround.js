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
        var bgr = new cc.Sprite(res.bgr_png);
        bgr.setAnchorPoint(0, 1);
        bgr.setPosition(0, s.height);
        this.addChild(bgr);
        var w = bgr.getContentSize().width;
        var n = parseInt(s.width / w);
        //Fill backGround
        for (var i = 1; i < n + 1; i++) {
            var b = new cc.Sprite(res.bgr_png);
            b.setAnchorPoint(0, 1);
            b.setPosition(i * w, s.height);
            this.addChild(b);
        }
        var paralax = new cc.ParallaxNode();
    }
});
