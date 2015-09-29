/**
*@file 公共组建初始化
*/
define(function (require, exports, module) {
    require('widget/footbar');
    require('widget/helpbar');
    var widget = require('widget/slidebanner');
    var insslide = new widget.slide({
        container: '.slidebanner .banner',
        slide: '.slidebanner .banner > li',
        handler: '.slidebanner .dot-index'
    });

});
