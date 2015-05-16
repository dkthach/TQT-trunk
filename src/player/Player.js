/**
 * Created by TQTP on 5/16/2015.
 */
var Player = cc.Class.extend({
    gold: 0,
    listcurrentIndexbBaket: [0, 1, 2],
    ctor: function () {

    },

    addGold: function (value) {
        this.gold += value
    },

    getGold: function () {

    },

    swapLeft: function () {
        var temp = this.listcurrentIndexbBaket[0];
        this.listcurrentIndexbBaket[0] = this.listcurrentIndexbBaket[1];
        this.listcurrentIndexbBaket[1] = temp;
    },
    swapRight: function () {
        var temp = this.listcurrentIndexbBaket[2];
        this.listcurrentIndexbBaket[2] = this.listcurrentIndexbBaket[1];
        this.listcurrentIndexbBaket[1] = temp;
    }


});
