/**
 * Created by TQTP on 5/17/2015.
 */
var Trash = cc.Sprite.extend({
    index: -1,
    _active: false,
    ctor: function (frame) {
        this._super(frame);
    },

    drop: function (index, duration) {
        this.setPosition(tqtp.listPos[index].x, tqtp.winSize.height - this.getContentSize().height);
        var moveTo = cc.moveTo(duration, tqtp.listPos[index]);
        this.runAction(cc.sequence(moveTo, cc.callFunc(function () {
            this.checkTrue();
        }.bind(this))));
    },
    checkTrue: function () {

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

