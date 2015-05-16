/**
 * Created by TQTP on 5/17/2015.
 */
var Trash = cc.Sprite.extend({
    index: -1,
    _active: false,
    currenttrack: -1,
    listener: null,
    ctor: function (inx, frame,listener) {
        this._super("#" + inx + "_" + frame + ".png");
        this.listener = listener;
        cc.log("#" + inx + "_" + frame + ".png");

        this.index = inx;
        this.active();
        Trash.POOL.push(this);
    },
    reuse: function (listener) {
        this.listener = listener;
        this.active();
        this.setVisible(true);
    },
    unuse: function () {
        this.listener = null;
        this.deactive();
        this.removeFromParent();
        this.setVisible(false);
    },
    drop: function (index, duration) {
        this.currenttrack = index;
        this.setPosition(tqtp.listPos[index].x, tqtp.winSize.height - this.getContentSize().height);
        var moveTo = cc.moveTo(duration, tqtp.listPos[index]);
        this.runAction(cc.sequence(moveTo, cc.callFunc(function () {
            if(this.checkTrue()){
                tqtp.player.addGold(1);
                cc.log("---------------------------DUNG-----------------------");
            }else{

            }
            this.unuse();
        }.bind(this))));
    },
    checkTrue: function () {
        tqtp.flagtouch = true;
        if (tqtp.player.listcurrentIndexbBaket[this.currenttrack].index == this.index) {
            return true;
        }
        this.listener &&this.listener.fail();
        cc.log("---------------------------SAI-----------------------");
        return false;
    },
    active: function () {
        this._active = true;
    }, deactive: function () {
        this._active = false;
    },

    isactive: function () {
        return this._active;
    }
});
Trash.POOL = [];
Trash.getOrCreate = function (inx, frame,l) {
    var tr = null;
    for (var i = 0; i < Trash.POOL.length; i++) {
        tr = Trash.POOL[i];
        if (tr.index == inx && !tr.isactive()) {
            tr.reuse(l);
            return tr;
        }
    }
    tr = new Trash(inx, frame,l);
    return tr;
};

