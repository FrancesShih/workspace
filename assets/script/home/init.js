/**
*@file init
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    var widget = require('widget/slidebanner');
    
    var insslide2 = new widget.slide({
        container: '.showcase .showcase-banner',
        slide: '.showcase .showcase-banner > li',
        handler: '.showcase .showcase-tab',
        fits: true
    });

    // 滚动
    var g = window;
    var pos = 0;
    var posArr = [1282, 2075, 2571, 2923];
    var eArr = ['.round-inline', '.cloudy', '.cloudy-m'];
    var e1 = $(eArr[0]),
        e2 = $(eArr[1]),
        e3 = $(eArr[2]),
        eA = $(eArr.join(','));

    $(document).on('scroll', function () {
         pos = g.scrollY ? g.scrollY : document.documentElement.scrollTop;
         
         if(pos < posArr[0]) {
            eA.removeClass('active');
         }
         if (pos >= posArr[0] && pos < posArr[1] && !e1.hasClass('active') ) {
            eA.removeClass('active');
            e1.addClass('active');
         }
         if (pos >= posArr[1] && pos < posArr[2] && !e2.hasClass('active') ) {
            eA.removeClass('active');
            e2.addClass('active');
         }
         if (pos >= posArr[2] && pos < posArr[3] && !e3.hasClass('active') ) {
            eA.removeClass('active');
            e3.addClass('active');
         }
         if(pos >= posArr[3]) {
            eA.removeClass('active');
         }
    });
});
