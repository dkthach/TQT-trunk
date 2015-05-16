/**
 * Created by TQTP on 5/16/2015.
 */

var BackGround = cc.Node.extend({
    ctor: function () {
        this._super();
        this.layout();
    },

    layout: function () {
        var s = tqtp.winSize;
        var bgr = new cc.Sprite(res.bgr_png);

        var w = bgr.getContentSize().width;
        var n = parseInt(s.width / w);
        //Fill backGround
        var tile = new TileMap();
        tile.setAnchorPoint(0,1);
       tile.setPosition(0, s.height);
        for (var i = 0; i < n + 2; i++) {
            var b = new cc.Sprite(res.bgr_png);
            tile.addRightTile(b);
        }
        this.addChild(tile);

        var fi = new Fish(2);
        fi.setPosition(100,100);
        this.addChild(fi,999);
    }
});

var TileMap = cc.Node.extend({
    listSprites: null,
    ctor: function () {
        this._super();
        this.listSprites = [];
    },
    addRightTile: function (node) {
        node.setAnchorPoint(0, 0);
        if (this.listSprites.length > 0) {
            var temp  = this.listSprites[this.listSprites.length-1];
            this.setContentSize(0,node.getContentSize().height);
        }
        node.setPosition((this.listSprites.length-1)*node.getContentSize().width, 0);
        this.listSprites.push(node);
        this.addChild(node);
    }
});


