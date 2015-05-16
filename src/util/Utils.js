/**
 * Created by Thanh on 3/30/2015.
 */

tqtp.util = tqtp.util || {};
/**
 * @param {array<string>}listpath
 * @return {Array<SpriteFrame>}
 */
tqtp.util.getSpriteFrames = function (listpath) {
    var spriteFrame = [];
    for (var i = 0; i < listpath.length; i++) {
        var frame = cc.spriteFrameCache.getSpriteFrame(listpath[i]);
        spriteFrame.push(frame);
    }
    return spriteFrame;
};

