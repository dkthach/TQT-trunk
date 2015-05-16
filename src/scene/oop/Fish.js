/**
 * Created by TQTP on 5/16/2015.
 */
var Fish = cc.Node.extend({
    spr: null,
    ctor: function (fishID) {
        this._super();
        this.spr = new cc.Sprite("#" + fishID + "_01.png");

        this.addChild(this.spr);
        var array = [];
        for (var i = 1; i < 2; i++) {
            array.push(fishID + "_0" + i + ".png");
            cc.log(fishID + "_0" + i + ".png");
        }
        var frame = __getSpriteFrames(array);
        var anima = new cc.Animation(frame, 0.8);
        //var moveto=cc.moveBy(2,200,200);
        this.spr.runAction(cc.animate(anima).repeatForever());
    }
});
__getSpriteFrames = function (listpath) {
    var spriteFrame = [];
    for (var i = 0; i < listpath.length; i++) {
        var frame = cc.spriteFrameCache.getSpriteFrame(listpath[i]);
        spriteFrame.push(frame);
    }
    return spriteFrame;
};
