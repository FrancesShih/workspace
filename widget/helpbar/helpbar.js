/**
*@file helpbar.js
*/
define(function (require, exports, module){
    var $ = require('jquery');
    var g = window;
    var toolbar = $('#toolbar');
    var service = toolbar.find('.tool').eq(0);
    var sTop = toolbar.find('.tool').eq(1);
    var widget = require('widget/anchor');
    var offsettop = 0;

    $(document).on('scroll', function (e) {
        offsettop = g.scrollY ? g.scrollY : document.documentElement.scrollTop;        
        if (offsettop > 600 && !toolbar.hasClass('active')) {
            toolbar.addClass('active');
        }
        if (offsettop < 800) {
            toolbar.removeClass('active');
        }
    });
    
    service.on('click', function () {
        window.open('http://chat32.live800.com/live800/chatClient/chatbox.jsp?companyID=462131&configID=56872&jid=1949975560&enterurl=http%3A%2F%2Fwww.ksyun.com%2F&skillId=3823&pagetitle=%E9%87%91%E5%B1%B1%E4%BA%91%E5%AE%98%E7%BD%91&pagereferrer=http%3A%2F%2Fwww%2Eksyun%2Ecom%2F&firstEnterUrl=http%3A%2F%2Fwww%2Eksyun%2Ecom%2F&lan=zh', '_blank', 'height=600,width=600,scrollbars=no');
    });    
    
    sTop.on('click', function () {
        widget.anchor({
            duringtime: 500,
            ele: 'html'
        })            
    });
});
