/**
 * Created by TQTP on 5/16/2015.
 */


var GamePlayLayer = cc.Layer.extend({
    timeStartGame: 0,
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
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
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
        if (tqtp.flagtouch = true) {
            tqtp.flagtouch = false;
            tqtp.player.listcurrentIndexbBaket[0].swaptoindex(1);
            tqtp.player.listcurrentIndexbBaket[1].swaptoindex(0);
            tqtp.player.swapLeft();
        }

    },
    touchRightHandler: function () {
        if (tqtp.flagtouch = true) {
            tqtp.flagtouch = false;
            tqtp.player.listcurrentIndexbBaket[2].swaptoindex(1);
            tqtp.player.listcurrentIndexbBaket[1].swaptoindex(2);
            tqtp.player.swapRight();
        }
    },


    layout: function () {
        var back = new cc.Sprite(res.bgr);
        back.setContentSize(tqtp.winSize);
        back.setAnchorPoint(0.5, 0.5);
        back.setPosition(tqtp.winSize.width / 2, tqtp.winSize.height / 2);
        this.addChild(back);

        for (var i = 0; i < 3; i++) {
            var baket = new Baket("#n" + i + ".png", i);
            this.addChild(baket, 99);
            tqtp.player.listcurrentIndexbBaket.push(baket);
        }
        this.timeStartGame = Date.now();
        this.scheduleUpdate();

    },
    listIdex: [0, 1, 2],
    randomTrash: function () {
        var inx = this.randomInt(3) - 1;
        var tra = Trash.getOrCreate(inx, this.randomInt(2), this.listen());
        this.addChild(tra, 10);
        tra.drop(this.randomInt(3) - 1, this.randomInt(3) + 2);
    },
    //random tu 1 to
    randomInt: function (to) {
        return Math.floor((Math.random() * to) + 1);
    },
    listen: function () {
        l = {};
        var sefl = this;
        l.fail = function () {
            //sefl.gameOver();
        };
        return l;
    },

    randomDuration: function (now) {
        this.randomInt(20) + 4;
    },

    count: 0,
    delay: 120,
    update: function () {
        this.count++;
        if (this.count > this.delay) {
            this.randomTrash();
            this.count = 0;
        }
    },
    gameOver: function () {
        this.unscheduleUpdate();
    }

});

GamePlayLayer.scene = function () {
    var layer = new GamePlayLayer();
    var scene = new cc.Scene();
    scene.addChild(layer, -1);
    return scene;
};
