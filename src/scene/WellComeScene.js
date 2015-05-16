/**
 * Created by TQTP on 5/16/2015.
 */



var WellComeLayer = cc.Layer.extend({
    listener: null,
    /**
     * @constructor
     */
    ctor: function (listener) {
        this._super();
        this.initLayer(listener);
        this.layout();
    },

    initLayer: function (listener) {
        this.listener = listener;
    },

    layout: function () {
        /**@type cc.Size*/
        var s = tqtp.winSize;
        var bg = new cc.Sprite(res.background_png);





        bg.setPosition(s.width / 2, s.height / 2);
        this.addChild(bg, -1);

        var delay = cc.delayTime(5);
        this.runAction(cc.sequence(delay, cc.callFunc(function () {
            var callBack = this.listener[scc.wcsListenerKey.WAITTING_DONE] ;
            callBack & callBack();
        }.bind(this))));
    }
});

/**
 * Khởi tạo scene
 * @static
 */
WellComeLayer.scene = function (listener) {
    var layer = new WellComeLayer(listener);
    var scene = new cc.Scene();
    scene.addChild(layer, -1);
    return scene;
}