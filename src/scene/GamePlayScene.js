/**
 * Created by TQTP on 5/16/2015.
 */
var GamePlayLayer = cc.Layer.extend({
    listBakets: [],
    ctor: function () {
        this._super();
        this.initLayer();
        this.layout();

    },

    initLayer: function () {
        cc.spriteFrameCache.addSpriteFrames(res.bakets_plist);
        this.initEventListener(this);
    },
    initEventListener: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            swallowTouches: false,
            onTouchBegan: this.ontouchDown.bind(this),
            onTouchEnded: this.ontouchUp.bind(this)
        }, this);
    },
    ontouchDown: function (event, target) {
        if (event.getLocation().x > tqtp.listPos[1].x) {
            //Right
            this.touchRightHandler();
            return true;
        } else {
            //Left
            this.touchLeftHandler();
            return true;
        }
        return true;
    },

    ontouchUp: function (event, target) {
        // event.getLocation();
    },

    touchLeftHandler: function () {

    },
    touchRightHandler: function () {

    },


    layout: function () {
       /* var back = new BackGround();
        back.setContentSize(tqtp.winSize);
        back.setAnchorPoint(0, 0);
        back.setPosition(0, 0);
        this.addChild(back);*/

        for (var i = 0; i < 3; i++) {
            var baket = new Baket("#n" + i + ".png",i);
            this.addChild(baket,99);

        }


    }, update: function () {

    }
});

GamePlayLayer.scene = function () {
    var layer = new GamePlayLayer();
    var scene = new cc.Scene();
    scene.addChild(layer, -1);
    return scene;
};