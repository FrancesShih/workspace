/**
*@file 公共组建初始化
*/
define(function (require, exports, module) {
	// 擦为了兼容只能多谢js了。。。。喵的
	require('widget/topbar');
	require('widget/topnav');
    require('widget/footbar');
    require('widget/helpbar');
    
    var widget = require('widget/slidebanner');
    var insslide = new widget.slide({
        container: '.slidebanner .banner',
        slide: '.slidebanner .banner > li',
        handler: '.slidebanner .dot-index'
    });

});
