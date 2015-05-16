var res = {
    background_png : "res/Background_0.png",
    bgpacker_png: "res/background/background.png",
    bgpacker_plist: "res/background/background.plist",
    bgr_png: "res/background/bgr.png",
    layermap_json: "res/LayerMap.json",
    iland_ic_plist: "res/gui/iland_ic.plist",
    iland_ic_png: "res/gui/iland_ic.png",

    fish_png: "res/fish.png",
    fish_plist: "res/fish.plist",
    bakets_png: "res/Bakets.png",
    bakets_plist: "res/Bakets_plist"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}