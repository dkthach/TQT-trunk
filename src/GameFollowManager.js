/**
 * Created by TQTP on 5/16/2015.
 */
//reuse namespace
var tqtp = tqtp || {};
/**
 * @type {Player}
 */
tqtp.player = null;
tqtp.listPos = null;
tqtp.flagtouch = true;

/**
 * @static
 */
tqtp.gameFollowManager = {

    /**
     * Bắt đầu follow game.
     * func dc gọi ở main.js
     */
    start: function () {
        this.init();
        this.reloadResOpenFirstScene();
    },

    wellComeScenelistener: null,
    init: function () {
        tqtp.player = new Player();
        tqtp.listPos = [];
        this.wellComeScenelistener = this.wellComeSceneListenerIpl();
    },

    reloadResOpenFirstScene: function () {
        //retain winsize
        tqtp.winSize = cc.winSize;
        var maginw = tqtp.winSize.width / 5;
        var maginh = tqtp.winSize.width / 5;
        tqtp.listPos.push(cc.p(maginw, maginh));
        tqtp.listPos.push(cc.p(tqtp.winSize.width / 2, maginh));
        tqtp.listPos.push(cc.p(tqtp.winSize.width - maginw, maginh));
        var scene = WellComeLayer.scene(this.wellComeScenelistener);
        //load resources
        cc.LoaderScene.preload(g_resources, function () {
            cc.director.runScene(GamePlayLayer.scene());
        }, this);
    },

    /**@implements*/
    wellComeSceneListenerIpl: function () {
        var l = {};
        l[scc.wcsListenerKey.WAITTING_DONE] = function () {
            cc.log("[GameFollowManager] Waiting done");
            cc.director.runScene(GamePlayLayer.scene());
        };
        return l;
    }

};



