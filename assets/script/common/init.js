/**
*@file 公共组建初始化
*/
define(function (require, exports, module) {
	// 擦为了兼容只能多谢js了。。。。喵的
	require('widget/topbar');
	require('widget/topnav');
    require('widget/footbar');
    require('widget/helpbar');
    require('widget/leftbar-help');
    
    var widget = require('widget/slidebanner');
    var insslide = new widget.slide({
        control: '.slidebanner .dot-index li',
        controlwrap: '.slidebanner .dot-index',
        contents: '.slidebanner .banner li',
        contentwrap: '.slidebanner .banner',
        item: $('.slidebanner').width(),
        times: 10000
    });

});
