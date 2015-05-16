/**
 * Created by TQTP on 5/16/2015.
 */
var GamePlayLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initLayer();
        this.layout();

    },

    initLayer: function () {
        cc.spriteFrameCache.addSpriteFrames(res.bgpacker_plist);
    },

    layout: function () {
        var back = new BackGround();
        back.setContentSize(tqtp.winSize);
        back.setAnchorPoint(0,0);
        back.setPosition(0,0);
        this.addChild(back);

    }, update: function () {

    }
});

GamePlayLayer.scene = function () {
    var layer = new GamePlayLayer();
    var scene = new cc.Scene();
    scene.addChild(layer, -1);
    return scene;
};