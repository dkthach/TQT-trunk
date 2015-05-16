/**
 * Created by TQTP on 5/16/2015.
 */

var RecordController = cc.Class.extend({
    localSt: null,
    _gold: 0,
    _clearner: 0,
    _level: 0,
    ctor: function () {
        this.localSt = cc.sys.localStorage;
    },

    getAllValue: function () {
        var c = tqtp.localStoragekey;
        this._gold = this.localSt.getItem(c.KEY_GOLD);
        this._clearner = this.localSt.getItem(c.KEY_CLEARNER);
        this._level = this.localSt.getItem(c.KEY_LEVEL);
    },

    getGold: function () {
        return this._gold;
    },

    recordGold: function (gold) {
        this.localSt.setItem(tqtp.localStoragekey.KEY_GOLD, gold);
    },

    getClearNer: function () {
        return this._clearner;
    },

    getLevel: function () {
        return this._level;
    }

});

RecordController._instanceController = null;
RecordController._getInstance = function () {
    if (!RecordController._instanceController) {
        RecordController._instanceController = new RecordController();
    }
    return RecordController._instanceController;
};

var tqtp = tqtp || {};
tqtp.recordController = RecordController._getInstance();
